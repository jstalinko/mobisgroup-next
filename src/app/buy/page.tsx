"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Check, ShieldCheck, Smartphone, Zap, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

interface Plan {
    id: number;
    name: string;
    price: number;
    duration: number;
    features: string[];
    is_popular: boolean;
}

export default function BuyPage() {
    const [plans, setPlans] = useState<Plan[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                // We reuse the admin API but might need a public one or just use admin one if protected?
                // Wait, admin API is protected. We need a public API.
                // Or we update admin API to allow GET for public if no specific sensitive info.
                // Actually, let's create a public endpoint or update admin endpoint to separate logic.
                // For speed, let's use the /api/payment/channels which is public, NO that's for payment.
                // Let's create /api/plans route.
                const res = await fetch('/api/plans');
                const data = await res.json();
                if (data.success) {
                    setPlans(data.data);
                }
            } catch (error) {
                toast.error('Gagal memuat paket');
            } finally {
                setIsLoading(false);
            }
        };
        fetchPlans();
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 container mx-auto max-w-6xl">
            <div className="text-center mb-16 space-y-4 animate-fade-up">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                    Premium Access
                </span>
                <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
                    Pilih Paket Langganan
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Nikmati ribuan drama pendek pilihan tanpa batas. Berhenti langganan kapan saja.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, i) => (
                    <Card key={i} className={`relative glass-strong border-white/10 transition-all duration-300 hover:scale-[1.02] ${plan.is_popular ? 'border-primary/50 shadow-2xl shadow-primary/10' : ''}`}>
                        {plan.is_popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                                PALING LARIS
                            </div>
                        )}
                        <CardHeader className="text-center pt-8">
                            <CardTitle className="text-xl font-bold text-white mb-2">{plan.name}</CardTitle>
                            <div className="flex items-end justify-center gap-1 mb-2">
                                <span className="text-4xl font-bold text-white">Rp {plan.price.toLocaleString('id-ID')}</span>
                                {/* <span className="text-muted-foreground mb-1">/bulan</span> */}
                            </div>
                            <CardDescription>Aktif selama {plan.duration} Bulan</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ul className="space-y-3">
                                {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Check className="w-3.5 h-3.5 text-primary" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className={`w-full h-12 font-bold ${plan.is_popular ? 'bg-primary hover:bg-primary/90' : 'bg-white/10 hover:bg-white/20'}`}>
                                <Link href={`/buy/checkout?duration=${plan.duration}&price=${plan.price}`}>
                                    Pilih Paket
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Akses Instan</h3>
                    <p className="text-muted-foreground text-sm">Key langsung dikirim setelah pembayaran berhasil dikonfirmasi sistem.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Pembayaran Aman</h3>
                    <p className="text-muted-foreground text-sm">Transaksi diproses melalui gateway resmi dan terenkripsi 256-bit.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Smartphone className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Multi Device</h3>
                    <p className="text-muted-foreground text-sm">Satu akun bisa digunakan hingga di 3 perangkat berbeda sekaligus.</p>
                </div>
            </div>
        </div>
    );
}
