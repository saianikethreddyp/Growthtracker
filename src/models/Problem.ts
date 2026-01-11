import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProblem extends Document {
    user: mongoose.Types.ObjectId;
    title: string;
    link: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    platform: 'LeetCode' | 'HackerRank' | 'CodeStudio' | 'Other';
    status: 'Solved' | 'Revision' | 'Failed' | 'Pending';
    tags: string[];
    notes?: string;
    revisionCount: number;
    lastPracticed?: Date;
    nextReviewDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}

const ProblemSchema: Schema<IProblem> = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: [true, 'Please provide a title'],
            trim: true,
        },
        link: {
            type: String,
            required: [true, 'Please provide a link'],
            trim: true,
        },
        difficulty: {
            type: String,
            enum: ['Easy', 'Medium', 'Hard'],
            required: true,
        },
        platform: {
            type: String,
            enum: ['LeetCode', 'HackerRank', 'CodeStudio', 'Other'],
            default: 'LeetCode',
        },
        status: {
            type: String,
            enum: ['Solved', 'Revision', 'Failed', 'Pending'],
            default: 'Pending',
        },
        tags: {
            type: [String],
            default: [],
        },
        notes: {
            type: String,
        },
        revisionCount: {
            type: Number,
            default: 0,
        },
        lastPracticed: {
            type: Date,
        },
        nextReviewDate: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

// Indexes for better query performance
ProblemSchema.index({ user: 1, status: 1 });
ProblemSchema.index({ user: 1, difficulty: 1 });

const Problem: Model<IProblem> =
    (mongoose.models.Problem as Model<IProblem>) ||
    mongoose.model<IProblem>('Problem', ProblemSchema);

export default Problem;
