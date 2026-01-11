# DevTracker (Growthtracker)

DevTracker is a comprehensive productivity and learning management dashboard tailored for developers and students. It combines Data Structures & Algorithms (DSA) tracking, academic performance monitoring, and focused study tools into a single, unified platform.

## Features

### Dashboard Application
- **Overview**: Real-time statistics including total problems solved, study streaks, and activity heatmaps.
- **Quick Goals**: Daily targets to keep users motivated and consistent.

### DSA & Learning Sheets
- **Curated Sheets**: Includes standard industry sheets like Blind 75, NeetCode 150, and Striver's A-Z DSA Sheet.
- **Performance Marketing**: Specialized learning path for performance marketing with tracked modules and video resources.
- **Progress Tracking**: individual tracking for every problem with status updates (Todo, Revising, Done).

### Productivity Tools
- **Pomodoro Timer**: A persistent, floating timer with customizable durations for Focus sessions, Short Breaks, and Long Breaks.
- **Resource Vault**: Integrated note-taking capabilities for every problem and video. Notes are saved to the database and can be reviewed anytime.
- **Study Calendar**: A monthly planner to set and track daily learning goals.

### Academic Performance
- **CGPA Calculator**: Dynamic calculation of Cumulative Grade Point Average based on completed courses.
- **Course Management**: Add, edit, and delete courses across semesters. Tracks credits and achieved grades.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI
- **Database**: MongoDB (via Mongoose)
- **Authentication**: Custom JWT-based authentication
- **Icons**: Lucide React
- **Notifications**: Sonner

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Database URI

### Installation

1. Clone the repository:
   git clone https://github.com/saianikethreddyp/Growthtracker.git

2. Navigate to the project directory:
   cd Growthtracker

3. Install dependencies:
   npm install

4. Create a .env.local file in the root directory and add the following environment variables:
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key

5. Run the development server:
   npm run dev

6. Open http://localhost:3000 in your browser.

## Deployment

This project is optimized for deployment on Vercel.

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Add the MONGODB_URI and JWT_SECRET environment variables in the Vercel project settings.
4. Deploy.

## License

This project is for personal and educational use.
