"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Check, Edit, Loader2, Plus, Trash, X } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

// Schema
const planSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(2, 'Nama minimal 2 karakter'),
    price: z.coerce.number().min(0, 'Harga harus positif'),
    duration: z.coerce.number().min(1, 'Durasi minimal 1 bulan'),
    features: z.array(z.string()).min(1, 'Minimal 1 fitur'),
    is_popular: z.boolean().default(false),
    is_active: z.boolean().default(true),
});

type PlanForm = z.infer<typeof planSchema>;

export default function AdminPlansPage() {
    const router = useRouter();
    const [plans, setPlans] = useState<PlanForm[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingPlan, setEditingPlan] = useState<PlanForm | null>(null);

    const form = useForm<PlanForm>({
        resolver: zodResolver(planSchema),
        defaultValues: {
            name: '',
            price: 0,
            duration: 1,
            features: [''],
            is_popular: false,
            is_active: true,
        },
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        // @ts-ignore
        name: 'features',
    });

    const fetchPlans = async () => {
        try {
            const res = await fetch('/api/admin/plans');
            const data = await res.json();
            if (data.success) {
                setPlans(data.data);
            }
        } catch (error) {
            toast.error('Gagal memuat plans');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPlans();
    }, []);

    const openDialog = (plan?: PlanForm) => {
        setEditingPlan(plan || null);
        if (plan) {
            form.reset({
                ...plan,
                features: plan.features || [''],
            });
        } else {
            form.reset({
                name: '',
                price: 0,
                duration: 1,
                features: [''],
                is_popular: false,
                is_active: true,
            });
        }
        setIsDialogOpen(true);
    };

    const onSubmit = async (data: PlanForm) => {
        try {
            const method = editingPlan ? 'PUT' : 'POST';
            const res = await fetch('/api/admin/plans', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            
            if (result.success) {
                toast.success(editingPlan ? 'Plan diupdate' : 'Plan dibuat');
                setIsDialogOpen(false);
                fetchPlans();
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error('Gagal menyimpan plan');
        }
    };

    const deletePlan = async (id: number) => {
        if (!confirm('Yakin hapus plan ini?')) return;
        try {
            const res = await fetch(`/api/admin/plans?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                toast.success('Plan dihapus');
                fetchPlans();
            }
        } catch (error) {
            toast.error('Gagal menghapus plan');
        }
    };

    return (
        <div className="p-8 space-y-8 min-h-screen bg-background text-foreground">
             <header className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                        Manage Plans
                    </h1>
                    <p className="text-muted-foreground">Create and manage subscription packages</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" onClick={() => router.push('/admin/dashboard')}>
                        Back to Users
                    </Button>
                    <Button onClick={() => openDialog()}>
                        <Plus className="w-4 h-4 mr-2" /> Tambah Plan
                    </Button>
                </div>
            </header>

            <Card className="glass-strong border-white/10">
                <CardHeader>
                    <CardTitle>Daftar Paket Langganan</CardTitle>
                </CardHeader>
                <CardContent>
                    {isLoading ? (
                        <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow className="hover:bg-white/5 border-white/10">
                                    <TableHead>Nama</TableHead>
                                    <TableHead>Harga</TableHead>
                                    <TableHead>Durasi (Bulan)</TableHead>
                                    <TableHead>Popular</TableHead>
                                    <TableHead>Aktif</TableHead>
                                    <TableHead className="text-right">Aksi</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {plans.map((plan) => (
                                    <TableRow key={plan.id} className="hover:bg-white/5 border-white/10">
                                        <TableCell className="font-medium">{plan.name}</TableCell>
                                        <TableCell>Rp {plan.price.toLocaleString('id-ID')}</TableCell>
                                        <TableCell>{plan.duration} Bulan</TableCell>
                                        <TableCell>{plan.is_popular ? <Check className="text-green-500 w-4 h-4" /> : '-'}</TableCell>
                                        <TableCell>
                                            <span className={`px-2 py-1 rounded text-xs ${plan.is_active ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                                {plan.is_active ? 'Active' : 'Inactive'}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right space-x-2">
                                            <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-white/10" onClick={() => openDialog(plan)}>
                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-red-500/20 text-red-400" onClick={() => deletePlan(plan.id!)}>
                                                <Trash className="w-4 h-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>

            {/* Dialog Form */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-lg bg-gray-950 border-white/10 text-white">
                    <DialogHeader>
                        <DialogTitle>{editingPlan ? 'Edit Plan' : 'Buat Plan Baru'}</DialogTitle>
                        <DialogDescription>Isi detail paket langganan di bawah ini.</DialogDescription>
                    </DialogHeader>
                    
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Nama Paket</Label>
                                <Input {...form.register('name')} placeholder="1 Bulan" className="bg-white/5 border-white/10" />
                            </div>
                            <div className="space-y-2">
                                <Label>Harga (Rp)</Label>
                                <Input type="number" {...form.register('price')} className="bg-white/5 border-white/10" />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Durasi (Bulan)</Label>
                                <Input type="number" {...form.register('duration')} className="bg-white/5 border-white/10" />
                            </div>
                            <div className="flex items-center justify-between pt-8">
                                <div className="flex items-center space-x-2">
                                    <Switch checked={form.watch('is_popular')} onCheckedChange={(v) => form.setValue('is_popular', v)} />
                                    <Label>Popular Badge</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch checked={form.watch('is_active')} onCheckedChange={(v) => form.setValue('is_active', v)} />
                                    <Label>Active</Label>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Features</Label>
                            <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                                {fields.map((field, index) => (
                                    <div key={field.id} className="flex gap-2">
                                        <Input 
                                            {...form.register(`features.${index}` as const)} 
                                            placeholder="Fitur..." 
                                            className="bg-white/5 border-white/10" 
                                        />
                                        <Button type="button" size="icon" variant="ghost" onClick={() => remove(index)}>
                                            <X className="w-4 h-4 text-red-400" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                            <Button type="button" variant="outline" size="sm" onClick={() => append('')} className="w-full border-dashed border-white/20 hover:bg-white/5">
                                <Plus className="w-4 h-4 mr-2" /> Tambah Fitur
                            </Button>
                        </div>

                        <DialogFooter>
                            <Button type="submit" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? 'Menyimpan...' : 'Simpan Plan'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
