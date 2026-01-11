'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, ExternalLink, RefreshCcw } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface Problem {
    _id: string;
    title: string;
    link: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    platform: string;
    status: 'Solved' | 'Revision' | 'Failed' | 'Pending';
    tags: string[];
}

export default function ProblemsPage() {
    const [problems, setProblems] = useState<Problem[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Form State
    const [newProblem, setNewProblem] = useState({
        title: '',
        link: '',
        difficulty: 'Easy',
        platform: 'LeetCode',
        status: 'Pending',
    });

    const fetchProblems = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/problems');
            if (res.ok) {
                const data = await res.json();
                setProblems(data);
            }
        } catch (error) {
            toast.error('Failed to load problems');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProblems();
    }, []);

    const handleCreate = async () => {
        try {
            const res = await fetch('/api/problems', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProblem),
            });

            if (!res.ok) throw new Error('Failed to create');

            toast.success('Problem added!');
            setIsDialogOpen(false);
            fetchProblems();
            setNewProblem({
                title: '',
                link: '',
                difficulty: 'Easy',
                platform: 'LeetCode',
                status: 'Pending',
            });
        } catch (error) {
            toast.error('Error adding problem');
        }
    };

    const getDifficultyColor = (diff: string) => {
        switch (diff) {
            case 'Easy':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
            case 'Medium':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
            case 'Hard':
                return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
            default:
                return 'bg-gray-100 dark:bg-gray-800';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Solved':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
            case 'Revision':
                return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
            default:
                return 'bg-slate-100 dark:bg-slate-800';
        }
    };

    const filteredProblems = problems.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">DSA Problems</h2>
                    <p className="text-muted-foreground">
                        Manage and track your coding problems.
                    </p>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" /> Add Problem
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Problem</DialogTitle>
                            <DialogDescription>
                                Add a new problem to your tracking list.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="title" className="text-right">
                                    Title
                                </Label>
                                <Input
                                    id="title"
                                    value={newProblem.title}
                                    onChange={(e) =>
                                        setNewProblem({ ...newProblem, title: e.target.value })
                                    }
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="link" className="text-right">
                                    Link
                                </Label>
                                <Input
                                    id="link"
                                    value={newProblem.link}
                                    onChange={(e) =>
                                        setNewProblem({ ...newProblem, link: e.target.value })
                                    }
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="difficulty" className="text-right">
                                    Difficulty
                                </Label>
                                <Select
                                    value={newProblem.difficulty}
                                    onValueChange={(val) =>
                                        setNewProblem({ ...newProblem, difficulty: val })
                                    }
                                >
                                    <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Select difficulty" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Easy">Easy</SelectItem>
                                        <SelectItem value="Medium">Medium</SelectItem>
                                        <SelectItem value="Hard">Hard</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="status" className="text-right">
                                    Status
                                </Label>
                                <Select
                                    value={newProblem.status}
                                    onValueChange={(val) =>
                                        setNewProblem({ ...newProblem, status: val })
                                    }
                                >
                                    <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Pending">Pending</SelectItem>
                                        <SelectItem value="Solved">Solved</SelectItem>
                                        <SelectItem value="Revision">Revision</SelectItem>
                                        <SelectItem value="Failed">Failed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button onClick={handleCreate}>Save Problem</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="flex items-center space-x-2">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search problems..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-8"
                    />
                </div>
                <Button variant="outline" size="icon" onClick={fetchProblems}>
                    <RefreshCcw className="h-4 w-4" />
                </Button>
            </div>

            <div className="rounded-md border bg-white dark:bg-gray-900">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Difficulty</TableHead>
                            <TableHead>Platform</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center h-24">
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : filteredProblems.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={5}
                                    className="text-center h-24 text-muted-foreground"
                                >
                                    No problems found. Start adding some!
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredProblems.map((problem) => (
                                <TableRow key={problem._id}>
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
                                        <Badge
                                            variant="outline"
                                            className={`border-0 ${getDifficultyColor(
                                                problem.difficulty
                                            )}`}
                                        >
                                            {problem.difficulty}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{problem.platform}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant="outline"
                                            className={`border-0 ${getStatusColor(problem.status)}`}
                                        >
                                            {problem.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {/* Add Edit/Delete Actions later */}
                                        <Button variant="ghost" size="sm">
                                            Edit
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
