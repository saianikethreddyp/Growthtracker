'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Play, Pause, RotateCcw, Minus, Settings, Save, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function PomodoroTimer() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    // Default Times (in minutes)
    const [customTimes, setCustomTimes] = useState({
        focus: 25,
        short: 5,
        long: 15
    });

    // Temp state for editing
    const [tempTimes, setTempTimes] = useState(customTimes);

    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState<'focus' | 'short' | 'long'>('focus');

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
        }

        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const toggleTimer = () => setIsActive(!isActive);

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(customTimes[mode] * 60);
    };

    const changeMode = (newMode: 'focus' | 'short' | 'long') => {
        setMode(newMode);
        setIsActive(false);
        setTimeLeft(customTimes[newMode] * 60);
    };

    const saveSettings = () => {
        setCustomTimes(tempTimes);
        setIsSettingsOpen(false);
        // Reset current timer to new settings if not active
        if (!isActive) {
            setTimeLeft(tempTimes[mode] * 60);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    if (!isOpen) {
        return (
            <Button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl bg-blue-600 hover:bg-blue-700 z-50 flex items-center justify-center transition-all hover:scale-105"
            >
                <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold">{formatTime(timeLeft)}</span>
                </div>
            </Button>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
            <Card className="w-80 p-0 shadow-2xl border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm overflow-hidden">
                {/* Header */}
                <div className="p-3 bg-gray-50 dark:bg-gray-800/50 border-b flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                        {isSettingsOpen ? (
                            <span className="text-muted-foreground flex items-center">
                                <Settings className="w-4 h-4 mr-1" /> Settings
                            </span>
                        ) : (
                            mode === 'focus' ? <Badge variant="default" className="bg-red-500 hover:bg-red-600">Focus</Badge> :
                                mode === 'short' ? <Badge variant="secondary" className="bg-green-100 text-green-700">Short Break</Badge> :
                                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">Long Break</Badge>
                        )}
                    </div>
                    <div className="flex gap-1">
                        {!isSettingsOpen && (
                            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => {
                                setTempTimes(customTimes);
                                setIsSettingsOpen(true);
                            }}>
                                <Settings className="h-4 w-4" />
                            </Button>
                        )}
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                            <Minus className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Content */}
                {isSettingsOpen ? (
                    <div className="p-6 space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-muted-foreground">Focus Duration (mins)</label>
                            <Input
                                type="number"
                                value={tempTimes.focus}
                                onChange={(e) => setTempTimes({ ...tempTimes, focus: Number(e.target.value) })}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-muted-foreground">Short Break</label>
                                <Input
                                    type="number"
                                    value={tempTimes.short}
                                    onChange={(e) => setTempTimes({ ...tempTimes, short: Number(e.target.value) })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-muted-foreground">Long Break</label>
                                <Input
                                    type="number"
                                    value={tempTimes.long}
                                    onChange={(e) => setTempTimes({ ...tempTimes, long: Number(e.target.value) })}
                                />
                            </div>
                        </div>
                        <div className="flex gap-2 pt-2">
                            <Button variant="outline" size="sm" className="w-full" onClick={() => setIsSettingsOpen(false)}>
                                Cancel
                            </Button>
                            <Button size="sm" className="w-full" onClick={saveSettings}>
                                <Save className="w-4 h-4 mr-2" /> Save
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="p-6 flex flex-col items-center justify-center">
                        <div className="text-6xl font-black mb-6 tabular-nums tracking-tight text-gray-800 dark:text-gray-100 font-mono">
                            {formatTime(timeLeft)}
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <Button
                                size="lg"
                                className={`h-12 w-12 rounded-full ${isActive ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'}`}
                                onClick={toggleTimer}
                            >
                                {isActive ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current ml-1" />}
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-12 w-12 rounded-full border-2"
                                onClick={resetTimer}
                            >
                                <RotateCcw className="h-5 w-5" />
                            </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-2 w-full">
                            <Button
                                variant={mode === 'focus' ? 'secondary' : 'ghost'}
                                size="sm"
                                className="text-xs"
                                onClick={() => changeMode('focus')}
                            >
                                Focus
                            </Button>
                            <Button
                                variant={mode === 'short' ? 'secondary' : 'ghost'}
                                size="sm"
                                className="text-xs"
                                onClick={() => changeMode('short')}
                            >
                                Short
                            </Button>
                            <Button
                                variant={mode === 'long' ? 'secondary' : 'ghost'}
                                size="sm"
                                className="text-xs"
                                onClick={() => changeMode('long')}
                            >
                                Long
                            </Button>
                        </div>
                    </div>
                )}
            </Card>
        </div>
    );
}
