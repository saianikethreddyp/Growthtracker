'use client';

import { useParams } from 'next/navigation';
import { dsaSheets } from '@/lib/dsa-data';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { ProblemNotes } from '@/components/problem-notes';

export default function SheetDetailPage() {
    const params = useParams();
    const sheetId = params.id as string;
    const sheet = dsaSheets.find((s) => s.id === sheetId);

    // We need to fetch user's solved problems to check status
    const [solvedIds, setSolvedIds] = useState<Set<string>>(new Set());

    useEffect(() => {
        // Fetch user's problems to mark as solved
        const fetchUserProblems = async () => {
            try {
                const res = await fetch('/api/problems');
                if (res.ok) {
                    const data = await res.json();
                    // Assuming we match by title for now since we don't have IDs for external sheets stored in DB yet
                    // A better way would be to store 'externalId' or 'link' in Problem model.
                    // Let's match by Link.
                    const solvedLinks = new Set<string>(data.map((p: any) => p.link as string));
                    setSolvedIds(solvedLinks);
                }
            } catch (error) {
                console.error('Failed to fetch user problems');
            }
        };
        fetchUserProblems();
    }, []);

    const handleSolve = async (problem: any) => {
        try {
            const res = await fetch('/api/problems', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: problem.title,
                    link: problem.link,
                    difficulty: problem.difficulty,
                    platform: 'LeetCode', // Defaulting for these sheets
                    status: 'Solved'
                }),
            });

            if (!res.ok) throw new Error('Failed to mark as solved');

            toast.success('Marked as Solved!');
            setSolvedIds((prev) => new Set(prev).add(problem.link));
        } catch (error) {
            toast.error('Error updating status');
        }
    };

    const handleUnsolve = async (problem: any) => {
        try {
            const res = await fetch('/api/problems', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ link: problem.link }),
            });

            if (!res.ok) throw new Error('Failed to unsolve');

            toast.success('Marked as Unsolved');
            setSolvedIds((prev) => {
                const newSet = new Set(prev);
                newSet.delete(problem.link);
                return newSet;
            });
        } catch (error) {
            toast.error('Error updating status');
        }
    };

    if (!sheet) {
        return <div>Sheet not found</div>;
    }

    const getDifficultyColor = (diff: string) => {
        switch (diff) {
            case 'Easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
            case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
            case 'Hard': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
            default: return 'bg-gray-100';
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">{sheet.title}</h2>
                <p className="text-muted-foreground">{sheet.description}</p>
            </div>

            <div className="rounded-md border bg-white dark:bg-gray-900">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Status</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Topic</TableHead>
                            <TableHead>Difficulty</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sheet.problems.map((problem) => {
                            const isSolved = solvedIds.has(problem.link);
                            return (
                                <TableRow key={problem.id}>
                                    <TableCell>
                                        {isSolved ? (
                                            <CheckCircle className="h-5 w-5 text-green-500" />
                                        ) : (
                                            <div className="h-5 w-5 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                                        )}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        <a
                                            href={problem.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="hover:underline flex items-center group"
                                        >
                                            {problem.title}
                                            <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">{problem.topic}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant="outline"
                                            className={`border-0 ${getDifficultyColor(problem.difficulty)}`}
                                        >
                                            {problem.difficulty}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <ProblemNotes problemLink={problem.link} problemTitle={problem.title} />
                                            {isSolved ? (
                                                <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => handleUnsolve(problem)}>
                                                    Unsolve
                                                </Button>
                                            ) : (
                                                <Button size="sm" variant="outline" onClick={() => handleSolve(problem)}>
                                                    Mark Solved
                                                </Button>
                                            )}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
