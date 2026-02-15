"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Key, ShieldCheck, Smartphone } from 'lucide-react';
import { toast } from 'sonner';

import { Suspense } from 'react';

function LoginContent() {
    const [accessKey, setAccessKey] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get('redirect') || '/';

    // Generate or retrieve a persistent device ID (simple version using localStorage)
    const [deviceId, setDeviceId] = useState('');

    useEffect(() => {
        let id = localStorage.getItem('device_id');
        if (!id) {
            id = 'dev_' + Math.random().toString(36).substring(2, 15);
            localStorage.setItem('device_id', id);
        }
        setDeviceId(id);
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!accessKey) return;
        
        setIsLoading(true);
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ access_key: accessKey, device_id: deviceId }),
            });

            const data = await res.json();

            if (data.success) {
                toast.success('Login successful! Enjoy your show.');
                router.push(redirectTo);
            } else {
                toast.error(data.message || 'Invalid Access Key');
            }
        } catch (error) {
            toast.error('An error occurred. Please check your connection.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full" />
            </div>

            <div className="w-full max-w-md relative animate-fade-up">
                <Card className="glass-strong border-white/10 shadow-2xl">
                    <CardHeader className="text-center pb-2">
                        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                            <ShieldCheck className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-3xl font-bold font-display tracking-tight text-white mb-2">Premium Access</CardTitle>
                        <CardDescription className="text-muted-foreground/80">Enter your Access Key to continue watching</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <div className="relative group">
                                    <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                    <Input
                                        type="text"
                                        placeholder="Enter Access Key (e.g. ABC-123-XYZ)"
                                        className="pl-12 h-14 bg-white/5 border-white/10 focus:border-primary/50 text-lg font-mono tracking-wider placeholder:tracking-normal placeholder:font-sans"
                                        value={accessKey}
                                        onChange={(e) => setAccessKey(e.target.value.toUpperCase())}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                                <Smartphone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Your access is limited to <span className="text-primary font-bold">3 devices</span>. 
                                    By logging in, this device will be registered to your account.
                                </p>
                            </div>

                            <Button 
                                type="submit" 
                                className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]" 
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                                        Verifying...
                                    </div>
                                ) : 'Unlock Access'}
                            </Button>

                            <p className="text-center text-sm text-muted-foreground">
                                Don't have a key? <a href="#" className="text-primary hover:underline font-medium">Contact Support</a>
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-background p-4">
                <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            </div>
        }>
            <LoginContent />
        </Suspense>
    );
}
