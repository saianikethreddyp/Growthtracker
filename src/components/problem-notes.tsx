'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { StickyNote, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface ProblemNotesProps {
    problemLink: string;
    problemTitle: string;
}

export function ProblemNotes({ problemLink, problemTitle }: ProblemNotesProps) {
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            fetchNote();
        }
    }, [isOpen]);

    const fetchNote = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`/api/notes?link=${encodeURIComponent(problemLink)}`);
            if (res.ok) {
                const data = await res.json();
                setContent(data.content || '');
            }
        } catch (error) {
            toast.error('Failed to load notes');
        } finally {
            setIsLoading(false);
        }
    };

    const saveNote = async () => {
        setIsSaving(true);
        try {
            const res = await fetch('/api/notes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ link: problemLink, content }),
            });

            if (res.ok) {
                toast.success('Note saved!');
            } else {
                throw new Error('Failed to save');
            }
        } catch (error) {
            toast.error('Failed to save note');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 ml-1 hover:bg-yellow-100 hover:text-yellow-700 dark:hover:bg-yellow-900/30 dark:hover:text-yellow-400">
                    <StickyNote className="h-4 w-4" />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Notes for {problemTitle}</SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col h-[calc(100vh-10rem)]">
                    {isLoading ? (
                        <div className="flex items-center justify-center flex-1">
                            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                        </div>
                    ) : (
                        <>
                            <Textarea
                                placeholder="Write your thoughts, approach, or key learnings here..."
                                className="flex-1 resize-none p-4 font-mono text-sm leading-relaxed mb-4"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                            <Button onClick={saveNote} disabled={isSaving}>
                                {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                Save Note
                            </Button>
                        </>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
}
