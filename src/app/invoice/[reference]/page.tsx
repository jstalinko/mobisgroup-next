"use client";

import { useEffect, useState, use } from 'react';
import { notFound, usePathname, useRouter } from 'next/navigation';
import { CheckCircle, ChevronLeft, Clock, Copy, Download, Key, Loader2, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InvoiceProps {
    params: Promise<{
        reference: string;
    }>
}

interface TransactionDetail {
    reference: string;
    merchant_ref: string;
    payment_name: string;
    payment_method: string;
    amount: number;
    pay_code: string;
    pay_url: string;
    qr_url: string;
    checkout_url: string;
    status: string;
    expired_time: number;
    instructions: Array<{ title: string; steps: string[] }>;
    created_access_key?: string;
}

export default function InvoicePage({ params }: InvoiceProps) {
    const { reference } = use(params);
    const [tx, setTx] = useState<TransactionDetail | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [timeLeft, setTimeLeft] = useState<string>('');
    const router = useRouter();

    // Polling for status
    useEffect(() => {
        let interval: NodeJS.Timeout;

        const fetchData = async () => {
            try {
                const res = await fetch(`/api/payment/detail?reference=${reference}`);
                const result = await res.json();
                
                if (result.success) {
                    setTx(result.data);
                    if (result.data.status === 'PAID') {
                        clearInterval(interval);
                    }
                } else {
                    toast.error('Gagal memuat transaksi');
                }
            } catch (e) {
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

        // Poll every 5 seconds
        interval = setInterval(async () => {
            if (!tx || tx.status === 'PAID') return;
            
            const res = await fetch(`/api/payment/check?reference=${reference}`);
            const result = await res.json();
            
            if (result.success) {
                if (result.status === 'PAID') {
                    setTx(prev => prev ? { ...prev, status: 'PAID', created_access_key: result.access_key } : null);
                    clearInterval(interval);
                    toast.success('Pembayaran Berhasil!');
                } else if (result.status !== tx.status) {
                    setTx(prev => prev ? { ...prev, status: result.status } : null);
                }
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [reference, tx?.status]);

    // Countdown Timer
    useEffect(() => {
        if (!tx || tx.status !== 'UNPAID') return;

        const timer = setInterval(() => {
            const now = Math.floor(Date.now() / 1000);
            const diff = tx.expired_time - now;

            if (diff <= 0) {
                setTimeLeft('Expired');
                setTx(prev => prev ? { ...prev, status: 'EXPIRED' } : null);
                clearInterval(timer);
            } else {
                const hours = Math.floor(diff / 3600);
                const minutes = Math.floor((diff % 3600) / 60);
                const seconds = diff % 60;
                setTimeLeft(`${hours}j ${minutes}m ${seconds}d`);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [tx]);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success('Disalin ke clipboard');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
                <p className="text-muted-foreground">Memuat tagihan...</p>
            </div>
        );
    }

    if (!tx) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-2xl font-bold mb-2">Transaksi Tidak Ditemukan</h1>
                <Button onClick={() => router.push('/buy')}>Kembali</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 container mx-auto max-w-3xl">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold font-display mb-2">
                    {tx.status === 'PAID' ? 'Pembayaran Berhasil' : 'Selesaikan Pembayaran'}
                </h1>
                <p className="text-muted-foreground">Reference: {tx.reference}</p>
            </div>

            {tx.status === 'PAID' && (
                <Card className="glass-strong border-primary/50 shadow-2xl shadow-primary/20 mb-8 animate-fade-up">
                    <CardHeader className="text-center">
                        <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                            <CheckCircle className="w-8 h-8 text-green-500" />
                        </div>
                        <CardTitle className="text-2xl">Selamat! Akun Premium Aktif</CardTitle>
                        <CardDescription>Gunakan Access Key di bawah ini untuk login</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="p-6 rounded-2xl bg-black/40 border border-white/10 text-center relative group">
                            <span className="text-sm text-muted-foreground mb-2 block">Access Key Anda</span>
                            <div className="text-4xl font-mono font-bold tracking-wider text-primary break-all">
                                {tx.created_access_key}
                            </div>
                            <Button 
                                size="icon" 
                                variant="ghost" 
                                className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => copyToClipboard(tx.created_access_key || '')}
                            >
                                <Copy className="w-4 h-4" />
                            </Button>
                        </div>
                        <div className="flex justify-center">
                            <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => router.push('/login')}>
                                Login Sekarang <Key className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            {tx.status === 'UNPAID' && (
                <div className="grid gap-6 animate-fade-up">
                    <Card className="glass-strong border-white/10">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle>Total Tagihan</CardTitle>
                                    <CardDescription>Bayar sebelum {new Date(tx.expired_time * 1000).toLocaleString('id-ID')}</CardDescription>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-primary">Rp {tx.amount.toLocaleString('id-ID')}</div>
                                    <div className="flex items-center justify-end gap-1 text-sm text-orange-400 font-medium">
                                        <Clock className="w-3 h-3" />
                                        {timeLeft}
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                                <span className="font-medium">Metode Pembayaran</span>
                                <span className="font-bold">{tx.payment_name}</span>
                            </div>

                            {/* QRIS / QR Code */}
                            {tx.qr_url && (
                                <div className="text-center p-6 bg-white rounded-xl">
                                    <img src={tx.qr_url} alt="QR Code" className="mx-auto w-64 h-64 object-contain" />
                                    <p className="text-black text-sm mt-2 font-medium">Scan QRIS menggunakan E-Wallet / Mobile Banking</p>
                                    <Button variant="outline" size="sm" className="mt-4 border-black text-black hover:bg-gray-100" asChild>
                                        <a href={tx.qr_url} download>Download QR</a>
                                    </Button>
                                </div>
                            )}

                            {/* Pay Code / VA */}
                            {tx.pay_code && !tx.qr_url && (
                                <div className="space-y-2">
                                    <Label>Nomor Virtual Account / Kode Bayar</Label>
                                    <div className="flex gap-2">
                                        <div className="relative flex-1">
                                            <Input readOnly value={tx.pay_code} className="bg-white/5 border-white/10 font-mono text-lg h-12 text-center tracking-wider" />
                                        </div>
                                        <Button size="lg" onClick={() => copyToClipboard(tx.pay_code)}>
                                            <Copy className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Checkout URL (Redirect) */}
                            {tx.checkout_url && !tx.pay_code && !tx.qr_url && (
                                <Button asChild className="w-full h-12 text-lg font-bold">
                                    <a href={tx.checkout_url} target="_blank" rel="noopener noreferrer">
                                        Lanjut ke Pembayaran <ChevronLeft className="w-4 h-4 ml-2 rotate-180" />
                                    </a>
                                </Button>
                            )}
                        </CardContent>
                    </Card>

                    {/* Instructions */}
                    {tx.instructions && tx.instructions.length > 0 && (
                        <Card className="glass-strong border-white/10">
                            <CardHeader>
                                <CardTitle>Cara Pembayaran</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="0" className="w-full">
                                    <TabsList className="w-full justify-start overflow-x-auto bg-white/5 h-auto p-1">
                                        {tx.instructions.map((inst, i) => (
                                            <TabsTrigger key={i} value={i.toString()} className="data-[state=active]:bg-primary data-[state=active]:text-white">
                                                {inst.title}
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>
                                    {tx.instructions.map((inst, i) => (
                                        <TabsContent key={i} value={i.toString()} className="mt-4 space-y-2">
                                            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                                                {inst.steps.map((step, j) => (
                                                    <li key={j} dangerouslySetInnerHTML={{ __html: step }} />
                                                ))}
                                            </ol>
                                        </TabsContent>
                                    ))}
                                </Tabs>
                            </CardContent>
                        </Card>
                    )}
                </div>
            )}
        </div>
    );
}

import { ChevronRight } from 'lucide-react';
