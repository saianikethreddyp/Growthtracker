'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    Code2,
    GraduationCap,
    LogOut,
    Settings,
    Menu,
    BookOpen,
    LineChart,
    Home,
    Layout,
    Layers,
    Calendar
} from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { toast } from 'sonner';
import { PomodoroTimer } from '@/components/pomodoro-timer';

const navItems = [
    { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { href: '/dashboard/problems', label: 'DSA Problems', icon: Code2 },
    { href: '/dashboard/sheets', label: 'Sheets', icon: BookOpen },
    { href: '/dashboard/calendar', label: 'Calendar', icon: Calendar },
    { href: '/dashboard/performance', label: 'Performance', icon: GraduationCap },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

function SidebarContent({ onClose }: { onClose?: () => void }) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            toast.success('Logged out successfully');
            router.push('/login');
        } catch (error) {
            toast.error('Failed to logout');
        }
    };

    return (
        <div className="flex flex-col h-full bg-slate-900 text-white">
            <div className="p-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    DevTracker
                </h1>
            </div>
            <nav className="flex-1 space-y-1 px-4">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className={`flex items-center space-x-3 text-sm font-medium rounded-lg px-4 py-3 transition-colors ${isActive
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            <Icon className="h-5 w-5" />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
            <div className="p-4 border-t border-slate-800">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800"
                    onClick={handleLogout}
                >
                    <LogOut className="mr-2 h-5 w-5" />
                    Logout
                </Button>
            </div>
        </div>
    );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            {/* Desktop Sidebar */}
            <div className="hidden md:flex md:w-64 md:flex-col fixed inset-y-0 h-full">
                <SidebarContent />
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 md:pl-64 transition-all duration-300">
                <header className="flex items-center justify-between h-16 px-6 border-b bg-white dark:bg-gray-950 dark:border-gray-800 md:hidden">
                    <span className="font-bold text-lg">DevTracker</span>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0 border-r-0 w-64">
                            <SidebarContent onClose={() => setIsOpen(false)} />
                        </SheetContent>
                    </Sheet>
                </header>

                <main className="flex-1 overflow-y-auto p-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full max-w-7xl mx-auto"
                    >
                        {children}
                    </motion.div>
                </main>
            </div>
            <PomodoroTimer />
        </div>
    );
}
