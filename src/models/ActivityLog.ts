import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IActivityLog extends Document {
    user: mongoose.Types.ObjectId;
    action: 'ProblemSolved' | 'Login' | 'StudySession';
    date: Date; // Normalized to midnight for easy day grouping
    details?: string;
}

const ActivityLogSchema: Schema<IActivityLog> = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        action: {
            type: String,
            enum: ['ProblemSolved', 'Login', 'StudySession'],
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        details: String,
    },
    {
        timestamps: true,
    }
);

ActivityLogSchema.index({ user: 1, date: 1 });

const ActivityLog: Model<IActivityLog> =
    (mongoose.models.ActivityLog as Model<IActivityLog>) ||
    mongoose.model<IActivityLog>('ActivityLog', ActivityLogSchema);

export default ActivityLog;
