'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Plus, Trash2, Calendar as CalendarIcon } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface Goal {
    _id: string;
    title: string;
    date: string;
    completed: boolean;
}

export default function CalendarPage() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [goals, setGoals] = useState<Goal[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newGoalTitle, setNewGoalTitle] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const fetchGoals = async () => {
        try {
            const res = await fetch('/api/goals');
            if (res.ok) {
                const data = await res.json();
                setGoals(data);
            }
        } catch (error) {
            toast.error('Failed to load goals');
        }
    };

    useEffect(() => {
        fetchGoals();
    }, []);

    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();

    const handlePrevMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    };

    const handleNextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    };

    const handleAddGoal = async () => {
        if (!selectedDate || !newGoalTitle) return;

        try {
            const res = await fetch('/api/goals', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: newGoalTitle,
                    date: selectedDate.toISOString(),
                }),
            });

            if (res.ok) {
                toast.success('Goal added');
                fetchGoals();
                setIsDialogOpen(false);
                setNewGoalTitle('');
            }
        } catch (error) {
            toast.error('Failed to add goal');
        }
    };

    const handleDeleteGoal = async (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        try {
            const res = await fetch(`/api/goals?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                toast.success('Goal deleted');
                fetchGoals();
            }
        } catch (error) {
            toast.error('Failed to delete');
        }
    };

    const renderDays = () => {
        const days = [];
        const monthYear = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

        // Empty cells for padding
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="h-24 md:h-32 border bg-gray-50/50 dark:bg-gray-900/50"></div>);
        }

        // Days
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            const dateStr = date.toDateString(); // Simple comparison key
            const dayGoals = goals.filter(g => new Date(g.date).toDateString() === dateStr);
            const isToday = new Date().toDateString() === dateStr;

            days.push(
                <div
                    key={i}
                    className={`h-24 md:h-32 border p-2 relative group hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer ${isToday ? 'bg-blue-50/50 dark:bg-blue-900/20' : 'bg-white dark:bg-black'}`}
                    onClick={() => {
                        setSelectedDate(date);
                        setIsDialogOpen(true);
                    }}
                >
                    <div className={`text-sm font-medium mb-1 ${isToday ? 'text-blue-600' : 'text-gray-500'}`}>
                        {i}
                    </div>
                    <div className="space-y-1 overflow-y-auto max-h-[calc(100%-2rem)]">
                        {dayGoals.map((goal) => (
                            <div
                                key={goal._id}
                                className="text-[10px] md:text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200 p-1 rounded truncate flex items-center justify-between group/item"
                            >
                                <span>{goal.title}</span>
                                <button
                                    onClick={(e) => handleDeleteGoal(e, goal._id)}
                                    className="opacity-0 group-hover/item:opacity-100 hover:text-red-500"
                                >
                                    <Trash2 className="h-3 w-3" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Hover Add Button */}
                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Plus className="h-4 w-4 text-gray-400" />
                    </div>
                </div>
            );
        }

        return days;
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Study Calendar</h2>
                    <p className="text-muted-foreground">Plan your learning sprint.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={handlePrevMonth}>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="font-semibold min-w-[140px] text-center">
                        {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </div>
                    <Button variant="outline" size="icon" onClick={handleNextMonth}>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <Card>
                <CardContent className="p-0">
                    <div className="grid grid-cols-7 text-center text-sm font-medium border-b bg-gray-50 dark:bg-gray-900/50 py-3">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div className="grid grid-cols-7">
                        {renderDays()}
                    </div>
                </CardContent>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Goal for {selectedDate?.toLocaleDateString()}</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                        <Label>Goal Title</Label>
                        <Input
                            placeholder="e.g., Complete DP Sheet, Revise React"
                            value={newGoalTitle}
                            onChange={(e) => setNewGoalTitle(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAddGoal()}
                        />
                    </div>
                    <DialogFooter>
                        <Button onClick={handleAddGoal}>Add Goal</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
