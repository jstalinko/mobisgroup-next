"use client";

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Check, ChevronLeft, CreditCard, Loader2, ShieldCheck, Smartphone, Wallet } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { PaymentChannel } from '@/lib/tripay';

const formSchema = z.object({
    name: z.string().min(2, 'Nama minimal 2 karakter'),
    email: z.string().email('Email tidak valid'),
    phone: z.string().min(10, 'Nomor HP minimal 10 digit'),
    payment_method: z.string().min(1, 'Pilih metode pembayaran'),
});

type FormValues = z.infer<typeof formSchema>;

function CheckoutContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const duration = parseInt(searchParams.get('duration') || '1');
    const priceStr = searchParams.get('price') || '30000';
    const amount = parseInt(priceStr);

    const [channels, setChannels] = useState<PaymentChannel[]>([]);
    const [isLoadingChannels, setIsLoadingChannels] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            payment_method: '',
        },
    });

    const selectedMethod = watch('payment_method');

    useEffect(() => {
        const fetchChannels = async () => {
            try {
                const res = await fetch('/api/payment/channels');
                const data = await res.json();
                if (data.success) {
                    setChannels(data.data.filter((c: PaymentChannel) => c.active));
                }
            } catch (error) {
                toast.error('Gagal memuat metode pembayaran');
            } finally {
                setIsLoadingChannels(false);
            }
        };
        fetchChannels();
    }, []);

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/payment/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...data,
                    amount,
                    duration,
                }),
            });

            const result = await res.json();

            if (result.success) {
                toast.success('Order dibuat!');
                router.push(`/invoice/${result.reference}`);
            } else {
                toast.error(result.message || 'Gagal membuat order');
            }
        } catch (error) {
            toast.error('Terjadi kesalahan sistem');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Group channels
    const groupedChannels = channels.reduce((acc, channel) => {
        const group = channel.group;
        if (!acc[group]) acc[group] = [];
        acc[group].push(channel);
        return acc;
    }, {} as Record<string, PaymentChannel[]>);

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 container mx-auto max-w-4xl">
            <Button variant="ghost" className="mb-8 hover:bg-white/5" onClick={() => router.back()}>
                <ChevronLeft className="w-4 h-4 mr-2" /> Kembali
            </Button>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Form Section */}
                <div className="md:col-span-2 space-y-6">
                    <Card className="glass-strong border-white/10">
                        <CardHeader>
                            <CardTitle>Data Diri</CardTitle>
                            <CardDescription>Informasi untuk pengiriman akses key</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Nama Lengkap</Label>
                                <Input id="name" {...register('name')} className="bg-white/5 border-white/10" placeholder="John Doe" />
                                {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" {...register('email')} className="bg-white/5 border-white/10" placeholder="email@contoh.com" />
                                    {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="phone">No. WhatsApp</Label>
                                    <Input id="phone" type="tel" {...register('phone')} className="bg-white/5 border-white/10" placeholder="0812345678" />
                                    {errors.phone && <p className="text-red-400 text-xs">{errors.phone.message}</p>}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="glass-strong border-white/10">
                        <CardHeader>
                            <CardTitle>Metode Pembayaran</CardTitle>
                            <CardDescription>Pilih metode pembayaran yang tersedia</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {isLoadingChannels ? (
                                <div className="flex justify-center py-8">
                                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                                </div>
                            ) : (
                                <RadioGroup onValueChange={(val) => setValue('payment_method', val)} className="space-y-6">
                                    {Object.entries(groupedChannels).map(([group, items]) => (
                                        <div key={group}>
                                            <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">{group}</h3>
                                            <div className="grid gap-3">
                                                {items.map((channel) => (
                                                    <div key={channel.code} className={`relative flex items-center space-x-3 rounded-lg border p-4 transition-all hover:bg-white/5 cursor-pointer ${selectedMethod === channel.code ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-white/10'}`}>
                                                        <RadioGroupItem value={channel.code} id={channel.code} className="peer sr-only" />
                                                        <Label htmlFor={channel.code} className="flex flex-1 items-center justify-between cursor-pointer">
                                                            <div className="flex items-center gap-3">
                                                                {/* Use a placeholder validation because images might be broken from sandbox */}
                                                                <div className="w-10 h-6 bg-white rounded flex items-center justify-center overflow-hidden">
                                                                    <img src={channel.icon_url} alt={channel.name} className="h-full w-auto object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
                                                                </div>
                                                                <span className="font-medium">{channel.name}</span>
                                                            </div>
                                                            {selectedMethod === channel.code && <Check className="h-4 w-4 text-primary" />}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </RadioGroup>
                            )}
                            {errors.payment_method && <p className="text-red-400 text-xs mt-2">{errors.payment_method.message}</p>}
                        </CardContent>
                    </Card>
                </div>

                {/* Summary Section */}
                <div className="md:col-span-1">
                    <Card className="glass-strong border-white/10 sticky top-24">
                        <CardHeader>
                            <CardTitle>Ringkasan Order</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Paket Langganan</span>
                                <span className="font-medium">{duration} Bulan</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Harga Paket</span>
                                <span className="font-medium">Rp {amount.toLocaleString('id-ID')}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Biaya Admin</span>
                                <span className="font-medium text-green-400">Gratis</span>
                            </div>
                            <Separator className="bg-white/10" />
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-lg">Total</span>
                                <span className="font-bold text-xl text-primary">Rp {amount.toLocaleString('id-ID')}</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button 
                                className="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20" 
                                onClick={handleSubmit(onSubmit)}
                                disabled={isSubmitting || isLoadingChannels}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Memproses...
                                    </div>
                                ) : 'Bayar Sekarang'}
                            </Button>
                        </CardFooter>
                    </Card>

                    <div className="mt-6 space-y-4 text-center">
                        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                            <ShieldCheck className="w-4 h-4" />
                            Pembayaran Terenkripsi & Aman
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function CheckoutPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-primary" /></div>}>
            <CheckoutContent />
        </Suspense>
    );
}
