import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BarChart3, BookOpen, CheckCircle2, Clock, Code2, GraduationCap, LayoutDashboard, LineChart, Shield, Zap } from 'lucide-react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function LandingPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');

  if (token) {
    redirect('/dashboard');
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b dark:border-gray-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <LineChart className="h-5 w-5" />
            </div>
            DevTracker
          </div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-24 px-6 lg:px-8 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -z-10" />

          <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm rounded-full">
            🚀 New: Performance Marketing Sheets & Focus Mode
          </Badge>

          <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent mb-6 max-w-4xl">
            Elevate Your <br className="hidden sm:block" /> Learning Curve.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            The ultimate dashboard for high achievers. Track your **DSA progress**, master **Marketing courses**, and manage your **Academics** in one unified workspace.
          </p>
          <div className="flex gap-4">
            <Link href="/register">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all">
                Start Tracking Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Dashboard Mockup (CSS only representation) */}
          <div className="mt-20 relative w-full max-w-5xl mx-auto rounded-xl border bg-gray-900/5 shadow-2xl dark:bg-gray-900/50 p-2 backdrop-blur-sm lg:p-4">
            <div className="rounded-lg border bg-background overflow-hidden aspect-[16/9] shadow-inner relative group">
              {/* Placeholder for an actual screenshot - using a constructed UI representation for now */}
              <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 flex flex-col">
                <div className="h-12 border-b flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-4 h-6 w-64 bg-gray-200 dark:bg-gray-800 rounded-md" />
                </div>
                <div className="flex-1 flex p-6 gap-6">
                  <div className="w-64 space-y-4 hidden md:block">
                    <div className="h-8 w-full bg-blue-100 dark:bg-blue-900/20 rounded-md" />
                    <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded-md" />
                    <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded-md" />
                    <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded-md" />
                  </div>
                  <div className="flex-1 space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-100 dark:border-blue-900" />
                      <div className="h-24 rounded-xl bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-100 dark:border-green-900" />
                      <div className="h-24 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-100 dark:border-orange-900" />
                    </div>
                    <div className="h-64 rounded-xl border bg-white dark:bg-gray-950/50 flex items-center justify-center text-muted-foreground font-medium">
                      Interactive Activity Heatmap
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <span className="bg-black/75 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md">Interactive Dashboard Preview</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need to excel</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stop using scattered spreadsheets. DevTracker brings structure to your chaotic learning journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-950 border hover:shadow-lg transition-all group">
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">DSA & Coding Lists</h3>
                <p className="text-muted-foreground">
                  Pre-loaded sheets like **Striver's A-Z**, **Blind 75**, and **NeetCode 150**. Track problems, difficulty, and revision status.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-950 border hover:shadow-lg transition-all group">
                <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <LayoutDashboard className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Skill Tracks</h3>
                <p className="text-muted-foreground">
                  Structured paths for **Performance Marketing** (Google/FB Ads) and Development. Video-by-video tracking.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-950 border hover:shadow-lg transition-all group">
                <div className="h-12 w-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Visual Analytics</h3>
                <p className="text-muted-foreground">
                  Beautiful heatmaps, streak counters, and difficulty distribution charts to visualize your consistency.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-950 border hover:shadow-lg transition-all group">
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Academic Manager</h3>
                <p className="text-muted-foreground">
                  Track university courses, semesters, and CGPA. Keep your academic life as organized as your code.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-950 border hover:shadow-lg transition-all group">
                <div className="h-12 w-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center text-red-600 dark:text-red-400 mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Focus Mode (New)</h3>
                <p className="text-muted-foreground">
                  Built-in **Pomodoro timer** to keep you in the zone. Link focus sessions directly to your learning tasks.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-950 border hover:shadow-lg transition-all group">
                <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
                <p className="text-muted-foreground">
                  Your data is yours. Secure authentication and optional local-first features for maximum privacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600 dark:bg-blue-900 -z-20" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 -z-10" />

          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to stop procrastinating?</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              Join students and developers who are taking control of their learning journey today.
            </p>
            <Link href="/register">
              <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-2xl">
                Get Started Required <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="mt-6 text-sm text-blue-200 opacity-80">
              No credit card required • Free for students
            </p>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t bg-gray-50 dark:bg-gray-950 text-sm">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <div className="h-6 w-6 bg-blue-600 rounded flex items-center justify-center text-white">
                <LineChart className="h-3 w-3" />
              </div>
              DevTracker
            </div>
            <p className="text-muted-foreground max-w-xs">
              Building the best tools for the next generation of engineers and creators.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Learning Sheets</Link></li>
              <li><Link href="#">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Github</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 pt-8 border-t text-center text-muted-foreground">
          © 2026 DevTracker. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
