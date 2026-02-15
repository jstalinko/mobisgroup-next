"use client";

import { useState, useEffect } from 'react';
import { 
    Plus, 
    Search, 
    RefreshCw, 
    Trash2, 
    Key, 
    Users, 
    Calendar, 
    BarChart, 
    Download,
    LogOut,
    Edit2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger,
    DialogFooter
} from '@/components/ui/dialog';
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from '@/components/ui/select';
import { toast } from 'sonner';
import { format, addMonths } from 'date-fns';
import { User } from '@/lib/db';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const router = useRouter();

    // Form states
    const [name, setName] = useState('');
    const [subscription, setSubscription] = useState('1');
    const [startAt, setStartAt] = useState(format(new Date(), "yyyy-MM-dd'T'HH:mm"));
    const [endAt, setEndAt] = useState(format(addMonths(new Date(), 1), "yyyy-MM-dd'T'HH:mm"));
    const [maxDevices, setMaxDevices] = useState('3');

    const fetchUsers = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/admin/users');
            if (res.status === 401) {
                router.push('/admin/login');
                return;
            }
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            toast.error('Failed to fetch users');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Update end date when subscription or start date changes
    useEffect(() => {
        const months = parseInt(subscription);
        if (!isNaN(months) && startAt) {
            const end = addMonths(new Date(startAt), months);
            setEndAt(format(end, "yyyy-MM-dd'T'HH:mm"));
        }
    }, [subscription, startAt]);

    const handleAddUser = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/admin/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    subscription_month: parseInt(subscription),
                    start_at: startAt,
                    end_at: endAt,
                    max_devices: parseInt(maxDevices)
                }),
            });

            const data = await res.json();
            if (data.success) {
                toast.success(`Generated key: ${data.user.access_key}`);
                setIsAddOpen(false);
                resetForm();
                fetchUsers();
            } else {
                toast.error(data.error || 'Failed to generate key');
            }
        } catch (error) {
            toast.error('An error occurred');
        }
    };

    const handleUpdateUser = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingUser) return;

        try {
            const res = await fetch('/api/admin/users', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: editingUser.id,
                    name,
                    subscription_month: parseInt(subscription),
                    start_at: startAt,
                    end_at: endAt,
                    max_devices: parseInt(maxDevices)
                }),
            });

            const data = await res.json();
            if (data.success) {
                toast.success('User updated successfully');
                setIsEditOpen(false);
                setEditingUser(null);
                resetForm();
                fetchUsers();
            } else {
                toast.error(data.error || 'Failed to update user');
            }
        } catch (error) {
            toast.error('An error occurred');
        }
    };

    const handleDeleteUser = async (id: number) => {
        if (!confirm('Are you sure you want to delete this user?')) return;

        try {
            const res = await fetch(`/api/admin/users?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                toast.success('User deleted');
                fetchUsers();
            }
        } catch (error) {
            toast.error('Failed to delete user');
        }
    };

    const resetForm = () => {
        setName('');
        setSubscription('1');
        setStartAt(format(new Date(), "yyyy-MM-dd'T'HH:mm"));
        setEndAt(format(addMonths(new Date(), 1), "yyyy-MM-dd'T'HH:mm"));
        setMaxDevices('3');
    };

    const openEdit = (user: User) => {
        setEditingUser(user);
        setName(user.name || '');
        setSubscription(user.subscription_month.toString());
        setStartAt(user.start_at ? format(new Date(user.start_at), "yyyy-MM-dd'T'HH:mm") : format(new Date(), "yyyy-MM-dd'T'HH:mm"));
        setEndAt(user.end_at ? format(new Date(user.end_at), "yyyy-MM-dd'T'HH:mm") : format(new Date(), "yyyy-MM-dd'T'HH:mm"));
        setMaxDevices(user.max_devices.toString());
        setIsEditOpen(true);
    };

    const filteredUsers = users.filter(u => 
        u.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        u.access_key.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleLogout = async () => {
        // Simple logout by clearing cookie (ideally via API)
        document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        router.push('/admin/login');
    };

    return (
        <div className="min-h-screen bg-background text-foreground pb-20">
            {/* Header */}
            <header className="glass-strong border-b border-white/10 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <Key className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold font-display">MobisGroup Admin</h1>
                            <p className="text-xs text-muted-foreground">Access Key Management</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" className="hidden md:flex" onClick={() => router.push('/admin/plans')}>
                            Manage Plans
                        </Button>
                        <Button variant="ghost" size="icon" onClick={handleLogout}>
                            <LogOut className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="glass border-white/5">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                <Users className="w-4 h-4" /> Total Users
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{users.length}</div>
                        </CardContent>
                    </Card>
                    <Card className="glass border-white/5">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> Active Keys
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">
                                {users.filter(u => new Date(u.end_at!) > new Date()).length}
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="glass border-white/5">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                <RefreshCw className="w-4 h-4" /> Expired
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">
                                {users.filter(u => new Date(u.end_at!) <= new Date()).length}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between items-center">
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input 
                            placeholder="Search by name or access key..." 
                            className="pl-10"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <Button onClick={fetchUsers} variant="outline" size="icon">
                            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                        </Button>
                        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                            <DialogTrigger asChild>
                                <Button className="w-full md:w-auto font-bold">
                                    <Plus className="w-4 h-4 mr-2" /> Generate Key
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="glass-strong border-white/10 sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Generate Access Key</DialogTitle>
                                    <DialogDescription>Create a new subscription key for a user.</DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleAddUser} className="space-y-4 py-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Username (Optional)</label>
                                        <Input 
                                            placeholder="Leave empty for auto-generated" 
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Subscription</label>
                                            <Select value={subscription} onValueChange={setSubscription}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Duration" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1">1 Month</SelectItem>
                                                    <SelectItem value="2">2 Months</SelectItem>
                                                    <SelectItem value="3">3 Months</SelectItem>
                                                    <SelectItem value="6">6 Months</SelectItem>
                                                    <SelectItem value="12">1 Year</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Max Devices</label>
                                            <Input 
                                                type="number" 
                                                value={maxDevices}
                                                onChange={(e) => setMaxDevices(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Start Date</label>
                                        <Input 
                                            type="datetime-local" 
                                            value={startAt}
                                            onChange={(e) => setStartAt(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">End Date (Auto)</label>
                                        <Input 
                                            type="datetime-local" 
                                            value={endAt}
                                            readOnly
                                            className="bg-muted/50"
                                        />
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit" className="w-full">Generate & Save</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                {/* Edit Dialog */}
                <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                    <DialogContent className="glass-strong border-white/10 sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit User</DialogTitle>
                            <DialogDescription>Update user subscription and details.</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleUpdateUser} className="space-y-4 py-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Username</label>
                                <Input 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Subscription</label>
                                    <Select value={subscription} onValueChange={setSubscription}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Duration" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">1 Month</SelectItem>
                                            <SelectItem value="2">2 Months</SelectItem>
                                            <SelectItem value="3">3 Months</SelectItem>
                                            <SelectItem value="6">6 Months</SelectItem>
                                            <SelectItem value="12">1 Year</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Max Devices</label>
                                    <Input 
                                        type="number" 
                                        value={maxDevices}
                                        onChange={(e) => setMaxDevices(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Start Date</label>
                                <Input 
                                    type="datetime-local" 
                                    value={startAt}
                                    onChange={(e) => setStartAt(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">End Date</label>
                                <Input 
                                    type="datetime-local" 
                                    value={endAt}
                                    onChange={(e) => setEndAt(e.target.value)}
                                />
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="w-full">Update User</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>

                {/* User List Table (Mobile Friendly) */}
                <div className="grid gap-4">
                    {isLoading ? (
                        Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="h-24 w-full bg-muted/20 animate-pulse rounded-2xl" />
                        ))
                    ) : filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => {
                            const isExpired = new Date(user.end_at!) <= new Date();
                            return (
                                <Card key={user.id} className={`glass border-white/5 overflow-hidden group transition-all hover:border-primary/30 ${isExpired ? 'opacity-70' : ''}`}>
                                    <CardContent className="p-0">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between p-6 gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${isExpired ? 'bg-muted text-muted-foreground' : 'bg-primary/20 text-primary'}`}>
                                                    {user.name?.[0].toUpperCase()}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg">{user.name}</h3>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <Key className="w-3 h-3 text-muted-foreground" />
                                                        <code className="bg-muted px-2 py-0.5 rounded text-xs font-mono select-all">
                                                            {user.access_key}
                                                        </code>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 md:flex md:items-center gap-6 text-sm">
                                                <div>
                                                    <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Status</p>
                                                    <span className={`inline-flex items-center mt-1 px-2 py-0.5 rounded-full text-xs font-bold ${isExpired ? 'bg-destructive/10 text-destructive' : 'bg-green-500/10 text-green-500'}`}>
                                                        {isExpired ? 'Expired' : 'Active'}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Ends At</p>
                                                    <p className="mt-1 font-medium">{format(new Date(user.end_at!), 'dd MMM yyyy')}</p>
                                                </div>
                                                <div>
                                                    <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Devices</p>
                                                    <p className="mt-1 font-medium">Max {user.max_devices}</p>
                                                </div>
                                                <div className="flex items-center gap-2 md:ml-4">
                                                    <Button variant="outline" size="icon" className="rounded-xl" onClick={() => openEdit(user)}>
                                                        <Edit2 className="w-4 h-4" />
                                                    </Button>
                                                    <Button variant="outline" size="icon" className="rounded-xl text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => handleDeleteUser(user.id)}>
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })
                    ) : (
                        <div className="text-center py-20 bg-muted/5 rounded-3xl border-2 border-dashed border-white/5">
                            <Users className="w-16 h-16 text-muted-foreground/20 mx-auto mb-4" />
                            <p className="text-muted-foreground">No users found</p>
                            <Button variant="link" onClick={() => setSearchQuery('')}>Clear search</Button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
