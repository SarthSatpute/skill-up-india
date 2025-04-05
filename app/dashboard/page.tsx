import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChatbotButton } from "@/components/chatbot-button"
import DashboardHeader from "@/components/dashboard-header"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { BarChart, BookOpen, Calendar, CheckCircle, Clock, List, PlayCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />

      <div className="flex-1 container grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 py-8">
        <DashboardSidebar />

        <main className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Welcome, Rahul!</h1>
              <p className="text-muted-foreground">Your personalized learning journey to become a Web Developer</p>
            </div>
            <Link href="/onboarding">
              <Button variant="outline" size="sm">
                Retake Quiz
              </Button>
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">35%</div>
                <Progress value={35} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed Courses</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2/6</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hours Spent</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Session</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Today</div>
                <p className="text-xs text-muted-foreground">HTML Basics</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="roadmap">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="roadmap">
                  <List className="h-4 w-4 mr-2" />
                  Roadmap
                </TabsTrigger>
                <TabsTrigger value="timeline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Timeline
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="roadmap" className="space-y-4 mt-6">
              <h2 className="text-xl font-semibold">Your Learning Roadmap</h2>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">HTML & CSS Basics</CardTitle>
                    <CardDescription>Foundation of web development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video rounded-md overflow-hidden mb-2">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="HTML & CSS"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="h-12 w-12 text-white opacity-80" />
                      </div>
                    </div>
                    <Progress value={100} className="h-2" />
                    <p className="text-xs text-right mt-1 text-muted-foreground">Completed</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" disabled>
                      <CheckCircle className="mr-2 h-4 w-4" /> Completed
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">JavaScript Fundamentals</CardTitle>
                    <CardDescription>Programming basics for the web</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video rounded-md overflow-hidden mb-2">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="JavaScript"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="h-12 w-12 text-white opacity-80" />
                      </div>
                    </div>
                    <Progress value={70} className="h-2" />
                    <p className="text-xs text-right mt-1 text-muted-foreground">70% Complete</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Continue Learning</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">React Basics</CardTitle>
                    <CardDescription>Modern frontend development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video rounded-md overflow-hidden mb-2">
                      <Image src="/placeholder.svg?height=200&width=300" alt="React" fill className="object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="h-12 w-12 text-white opacity-80" />
                      </div>
                    </div>
                    <Progress value={0} className="h-2" />
                    <p className="text-xs text-right mt-1 text-muted-foreground">Not Started</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" disabled>
                      Locked
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="timeline" className="mt-6">
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div className="w-px h-full bg-border"></div>
                  </div>
                  <div className="pb-8">
                    <p className="text-sm text-muted-foreground">Completed on April 2, 2025</p>
                    <h3 className="text-lg font-semibold mt-1">HTML & CSS Basics</h3>
                    <p className="text-muted-foreground">Learned the fundamentals of web structure and styling</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="w-px h-full bg-border"></div>
                  </div>
                  <div className="pb-8">
                    <p className="text-sm text-muted-foreground">In Progress</p>
                    <h3 className="text-lg font-semibold mt-1">JavaScript Fundamentals</h3>
                    <p className="text-muted-foreground">Learning programming basics for interactive websites</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground">
                      <BookOpen className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Coming Next</p>
                    <h3 className="text-lg font-semibold mt-1">React Basics</h3>
                    <p className="text-muted-foreground">Building modern user interfaces with React</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>

      <ChatbotButton />
      <Footer />
    </div>
  )
}

