'use client';

import { useState, useEffect, useMemo } from 'react';
import { Plus, BookOpen, GraduationCap, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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

interface Course {
    _id: string;
    semester: number;
    code: string;
    name: string;
    credits: number;
    status: 'Ongoing' | 'Completed' | 'Dropped';
    achievedGrade?: string;
}

const GRADE_POINTS: Record<string, number> = {
    'A+': 4.0, 'A': 4.0, 'A-': 3.7,
    'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7,
    'D+': 1.3, 'D': 1.0, 'F': 0.0
};

export default function PerformancePage() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Form State
    const [newCourse, setNewCourse] = useState({
        semester: '1',
        code: '',
        name: '',
        credits: '3',
        status: 'Ongoing',
        achievedGrade: '',
    });

    const fetchCourses = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/courses');
            if (res.ok) {
                const data = await res.json();
                setCourses(data);
            }
        } catch (error) {
            toast.error('Failed to load courses');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const handleCreate = async () => {
        try {
            const payload = {
                ...newCourse,
                achievedGrade: newCourse.status === 'Completed' ? newCourse.achievedGrade : undefined
            };

            const res = await fetch('/api/courses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error('Failed to create');

            toast.success('Course added!');
            setIsDialogOpen(false);
            fetchCourses();
            setNewCourse({
                semester: '1',
                code: '',
                name: '',
                credits: '3',
                status: 'Ongoing',
                achievedGrade: '',
            });
        } catch (error) {
            toast.error('Error adding course');
        }
    };

    const stats = useMemo(() => {
        let totalPoints = 0;
        let totalCredits = 0;
        const semesters = new Set<number>();

        courses.forEach(course => {
            semesters.add(course.semester);
            // Only count completed courses for CGPA and Total Credits
            if (course.status === 'Completed') {
                totalCredits += course.credits;
                if (course.achievedGrade && GRADE_POINTS[course.achievedGrade] !== undefined) {
                    totalPoints += (GRADE_POINTS[course.achievedGrade] * course.credits);
                }
            }
        });

        const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';

        return {
            gpa,
            totalCredits,
            semesterCount: semesters.size
        };
    }, [courses]);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this course?')) return;
        try {
            const res = await fetch(`/api/courses?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                toast.success('Course deleted');
                fetchCourses();
            } else {
                toast.error('Failed to delete');
            }
        } catch (error) {
            toast.error('Error deleting course');
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">
                        Academic Performance
                    </h2>
                    <p className="text-muted-foreground">
                        Track your semesters, courses, and CGPA.
                    </p>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" /> Add Course
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Course</DialogTitle>
                            <DialogDescription>Add a course to a semester.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="semester" className="text-right">
                                    Semester
                                </Label>
                                <Input
                                    id="semester"
                                    type="number"
                                    value={newCourse.semester}
                                    onChange={(e) =>
                                        setNewCourse({ ...newCourse, semester: e.target.value })
                                    }
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="code" className="text-right">
                                    Code
                                </Label>
                                <Input
                                    id="code"
                                    placeholder="CS101"
                                    value={newCourse.code}
                                    onChange={(e) =>
                                        setNewCourse({ ...newCourse, code: e.target.value })
                                    }
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    placeholder="Intro to Programming"
                                    value={newCourse.name}
                                    onChange={(e) =>
                                        setNewCourse({ ...newCourse, name: e.target.value })
                                    }
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="credits" className="text-right">
                                    Credits
                                </Label>
                                <Input
                                    id="credits"
                                    type="number"
                                    value={newCourse.credits}
                                    onChange={(e) =>
                                        setNewCourse({ ...newCourse, credits: e.target.value })
                                    }
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="status" className="text-right">
                                    Status
                                </Label>
                                <Select
                                    value={newCourse.status}
                                    onValueChange={(val) =>
                                        setNewCourse({ ...newCourse, status: val })
                                    }
                                >
                                    <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Ongoing">Ongoing</SelectItem>
                                        <SelectItem value="Completed">Completed</SelectItem>
                                        <SelectItem value="Dropped">Dropped</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {newCourse.status === 'Completed' && (
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="grade" className="text-right">
                                        Grade
                                    </Label>
                                    <Select
                                        value={newCourse.achievedGrade}
                                        onValueChange={(val) =>
                                            setNewCourse({ ...newCourse, achievedGrade: val })
                                        }
                                    >
                                        <SelectTrigger className="col-span-3">
                                            <SelectValue placeholder="Select Grade" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.keys(GRADE_POINTS).map((grade) => (
                                                <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}

                        </div>
                        <DialogFooter>
                            <Button onClick={handleCreate}>Save Course</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Current CGPA</CardTitle>
                        <GraduationCap className="h-4 w-4 text-purple-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.gpa}</div>
                        <p className="text-xs text-muted-foreground">Cumulative Grade Point</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Credits</CardTitle>
                        <BookOpen className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.totalCredits}</div>
                        <p className="text-xs text-muted-foreground">Across {stats.semesterCount} semesters</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Group by Semester manually or just list for now */}
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => {
                    const semCourses = courses.filter((c) => c.semester === sem);
                    if (semCourses.length === 0) return null;

                    return (
                        <Card key={sem} className="col-span-1">
                            <CardHeader>
                                <CardTitle>Semester {sem}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {semCourses.map((course) => (
                                        <div
                                            key={course._id}
                                            className="flex items-center justify-between p-3 border rounded-lg bg-gray-50 dark:bg-gray-900/50"
                                        >
                                            <div>
                                                <p className="font-semibold text-sm">{course.code}</p>
                                                <p className="text-xs text-muted-foreground truncate max-w-[150px]">
                                                    {course.name}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <Badge variant="secondary" className="mb-1 text-[10px]">
                                                    {course.credits} Cr
                                                </Badge>
                                                <div className="flex flex-col items-end">
                                                    <p className="text-xs font-medium text-blue-500">
                                                        {course.status}
                                                    </p>
                                                    {course.achievedGrade && (
                                                        <span className="text-[10px] font-bold text-green-600 bg-green-100 dark:bg-green-900/30 px-1 rounded">
                                                            Grade: {course.achievedGrade}
                                                        </span>
                                                    )}
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-6 w-6 mt-2 p-0 text-red-400 hover:text-red-600 hover:bg-red-50"
                                                        onClick={() => handleDelete(course._id)}
                                                    >
                                                        <Trash2 className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
