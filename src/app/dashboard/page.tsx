'use client';

import { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Activity, CheckCircle2, Flame, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface DashboardStats {
    totalSolved: number;
    hardSolved: number;
    streak: number;
    studyHours: number;
    recentProblems: any[];
}

export default function DashboardPage() {
    const [stats, setStats] = useState<DashboardStats>({
        totalSolved: 0,
        hardSolved: 0,
        streak: 0,
        studyHours: 0,
        recentProblems: [],
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch('/api/dashboard/stats');
                if (res.ok) {
                    const data = await res.json();
                    setStats(data);
                }
            } catch (error) {
                toast.error('Failed to load stats');
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const statCards = [
        {
            title: 'Total Solved',
            value: stats.totalSolved.toString(),
            description: 'Keep pushing!',
            icon: CheckCircle2,
            color: 'text-green-500',
        },
        {
            title: 'Current Streak',
            value: `${stats.streak} Days`,
            description: 'Consistency is key',
            icon: Flame,
            color: 'text-orange-500',
        },
        {
            title: 'Hard Problems',
            value: stats.hardSolved.toString(),
            description: 'Challenging ones',
            icon: Trophy,
            color: 'text-yellow-500',
        },
        {
            title: 'Study Hours',
            value: `${stats.studyHours}h`,
            description: 'Calculated time',
            icon: Activity,
            color: 'text-blue-500',
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <p className="text-muted-foreground">
                    Welcome back! Here&apos;s an overview of your progress.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {statCards.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={index}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {stat.title}
                                </CardTitle>
                                <Icon className={`h-4 w-4 ${stat.color}`} />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {loading ? '-' : stat.value}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    {stat.description}
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                            Your latest problem solving activity.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <div className="text-sm text-muted-foreground">Loading...</div>
                        ) : stats.recentProblems.length === 0 ? (
                            <div className="text-sm text-muted-foreground">
                                No recent activity found.
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {stats.recentProblems.map((problem: any) => (
                                    <div
                                        key={problem._id}
                                        className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0"
                                    >
                                        <div>
                                            <p className="text-sm font-medium">{problem.title}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {new Date(problem.updatedAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <Badge variant="outline">{problem.status}</Badge>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Quick Goals</CardTitle>
                        <CardDescription>Daily targets to hit.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Solve 1 Hard Problem
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {stats.hardSolved > 0 ? "Completed!" : "0/1 Completed"}
                                    </p>
                                </div>
                                <div className="ml-auto font-medium text-muted-foreground">
                                    +100 XP
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
