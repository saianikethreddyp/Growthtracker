import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAssessment {
    title: string;
    type: 'Exam' | 'Quiz' | 'Assignment' | 'Project' | 'Other';
    totalMarks: number;
    obtainedMarks?: number;
    weightage: number; // Percentage
    date?: Date;
}

export interface ICourse extends Document {
    user: mongoose.Types.ObjectId;
    semester: number;
    code: string;
    name: string;
    credits: number;
    assessments: IAssessment[];
    targetGrade?: string;
    achievedGrade?: string;
    status: 'Ongoing' | 'Completed' | 'Dropped';
    color?: string; // For UI labeling
    createdAt: Date;
    updatedAt: Date;
}

const AssessmentSchema = new Schema({
    title: { type: String, required: true },
    type: {
        type: String,
        enum: ['Exam', 'Quiz', 'Assignment', 'Project', 'Other'],
        default: 'Exam',
    },
    totalMarks: { type: Number, required: true },
    obtainedMarks: { type: Number },
    weightage: { type: Number, default: 0 },
    date: { type: Date },
});

const CourseSchema: Schema<ICourse> = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        semester: {
            type: Number,
            required: true,
        },
        code: {
            type: String,
            required: true,
            uppercase: true,
        },
        name: {
            type: String,
            required: true,
        },
        credits: {
            type: Number,
            required: true,
        },
        assessments: [AssessmentSchema],
        targetGrade: String,
        achievedGrade: String,
        status: {
            type: String,
            enum: ['Ongoing', 'Completed', 'Dropped'],
            default: 'Ongoing',
        },
        color: String,
    },
    {
        timestamps: true,
    }
);

CourseSchema.index({ user: 1, semester: 1 });

const Course: Model<ICourse> =
    (mongoose.models.Course as Model<ICourse>) ||
    mongoose.model<ICourse>('Course', CourseSchema);

export default Course;
