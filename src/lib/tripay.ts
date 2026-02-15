import crypto from 'crypto';

const TRIPAY_PRODUCTION = process.env.TRIPAY_PRODUCTION === 'true';
const TRIPAY_API_URL = TRIPAY_PRODUCTION 
    ? 'https://tripay.co.id/api' 
    : 'https://tripay.co.id/api-sandbox';

const TRIPAY_API_KEY = process.env.TRIPAY_API_KEY || '';
const TRIPAY_PRIVATE_KEY = process.env.TRIPAY_PRIVATE_KEY || process.env.TRIPAY_SECRET_KEY || '';
const TRIPAY_MERCHANT_CODE = process.env.TRIPAY_MERCHANT_CODE || '';

export interface PaymentChannel {
    group: string;
    code: string;
    name: string;
    type: string;
    fee_merchant: { flat: number; percent: number };
    fee_customer: { flat: number; percent: number };
    total_fee: { flat: number; percent: string };
    minimum_fee: number;
    maximum_fee: number;
    minimum_amount: number;
    maximum_amount: number;
    icon_url: string;
    active: boolean;
}

export interface TransactionPayload {
    method: string;
    merchant_ref: string;
    amount: number;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    order_items: Array<{
        sku: string;
        name: string;
        price: number;
        quantity: number;
        product_url?: string;
        image_url?: string;
    }>;
    return_url: string;
    expired_time?: number;
}

export interface TransactionResponse {
    reference: string;
    merchant_ref: string;
    payment_method: string;
    payment_name: string;
    customer_name: string;
    customer_email: string;
    amount: number;
    fee_merchant: number;
    fee_customer: number;
    total_fee: number;
    amount_received: number;
    pay_code: string;
    pay_url: string | null;
    checkout_url: string;
    status: string;
    expired_time: number;
    qr_string: string | null;
    qr_url: string | null;
    instructions: Array<{ title: string; steps: string[] }>;
}

export class TriPayClient {
    private apiKey: string;
    private privateKey: string;
    private merchantCode: string;
    private baseUrl: string;

    constructor() {
        this.apiKey = TRIPAY_API_KEY;
        this.privateKey = TRIPAY_PRIVATE_KEY;
        this.merchantCode = TRIPAY_MERCHANT_CODE;
        this.baseUrl = TRIPAY_API_URL;
    }

    private generateSignature(merchantRef: string, amount: number): string {
        const data = this.merchantCode + merchantRef + amount;
        return crypto.createHmac('sha256', this.privateKey).update(data).digest('hex');
    }

    private async request(method: 'GET' | 'POST', endpoint: string, data?: any) {
        const url = `${this.baseUrl}${endpoint}`;
        const options: RequestInit = {
            method,
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json',
            },
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(url, options);
        const result = await response.json();

        if (!result.success) {
            throw new Error(result.message || 'TriPay API Error');
        }

        return result.data;
    }

    async getPaymentChannels(): Promise<PaymentChannel[]> {
        return this.request('GET', '/merchant/payment-channel');
    }

    async getFeeCalculator(code: string, amount: number) {
        return this.request('GET', `/merchant/fee-calculator?code=${code}&amount=${amount}`);
    }

    async createTransaction(payload: TransactionPayload): Promise<TransactionResponse> {
        const signature = this.generateSignature(payload.merchant_ref, payload.amount);
        const expiry = Math.floor(Date.now() / 1000) + (24 * 60 * 60); // 24 hours

        const data = {
            ...payload,
            expired_time: payload.expired_time || expiry,
            signature,
        };

        return this.request('POST', '/transaction/create', data);
    }

    async getTransactionDetail(reference: string): Promise<TransactionResponse> {
        return this.request('GET', `/transaction/detail?reference=${reference}`);
    }
}

export const tripay = new TriPayClient();
