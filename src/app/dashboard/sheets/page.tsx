'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Layers, Zap } from 'lucide-react';
import { dsaSheets } from '@/lib/dsa-data';

export default function SheetsPage() {
    const getIcon = (id: string) => {
        switch (id) {
            case 'blind-75': return Zap;
            case 'neetcode-150': return Layers;
            case 'performance-marketing': return BookOpen;
            default: return BookOpen;
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Learning Sheets</h2>
                <p className="text-muted-foreground">
                    Curated paths for DSA, Development, Marketing, and more.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {dsaSheets.map((sheet) => {
                    const Icon = getIcon(sheet.id);
                    return (
                        <Link key={sheet.id} href={`/dashboard/sheets/${sheet.id}`}>
                            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className={`p-2 rounded-lg ${sheet.id === 'blind-75' ? 'bg-yellow-100 text-yellow-600' :
                                            sheet.id === 'neetcode-150' ? 'bg-blue-100 text-blue-600' :
                                                sheet.id === 'striver-a-z' ? 'bg-purple-100 text-purple-600' :
                                                    'bg-green-100 text-green-600'
                                            }`}>
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <Badge variant="secondary">{sheet.totalProblems} Problems</Badge>
                                    </div>
                                    <CardTitle>{sheet.title}</CardTitle>
                                    <CardDescription>{sheet.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center text-sm font-medium text-primary hover:underline">
                                        View Problems <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
