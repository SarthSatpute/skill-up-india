import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChatbotButton } from "@/components/chatbot-button"
import DashboardHeader from "@/components/dashboard-header"
import { BarChart, Briefcase, Search, TrendingUp } from "lucide-react"
import Footer from "@/components/footer"

const jobTrends = [
  {
    title: "Frontend Developer",
    skills: ["React", "JavaScript", "HTML/CSS"],
    demand: "High",
    level: "Entry-Level",
    region: "Bangalore",
    growth: "+24%",
  },
  {
    title: "Data Scientist",
    skills: ["Python", "Machine Learning", "SQL"],
    demand: "High",
    level: "Mid-Level",
    region: "Hyderabad",
    growth: "+32%",
  },
  {
    title: "Mobile App Developer",
    skills: ["React Native", "Flutter", "Swift"],
    demand: "Medium",
    level: "Entry-Level",
    region: "Mumbai",
    growth: "+18%",
  },
  {
    title: "DevOps Engineer",
    skills: ["Docker", "Kubernetes", "AWS"],
    demand: "High",
    level: "Mid-Level",
    region: "Delhi NCR",
    growth: "+29%",
  },
  {
    title: "UI/UX Designer",
    skills: ["Figma", "User Research", "Prototyping"],
    demand: "Medium",
    level: "Entry-Level",
    region: "Pune",
    growth: "+15%",
  },
  {
    title: "Blockchain Developer",
    skills: ["Solidity", "Web3.js", "Smart Contracts"],
    demand: "Low",
    level: "Senior",
    region: "Bangalore",
    growth: "+10%",
  },
]

export default function ExplorePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />

      <main className="flex-1 container py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Job Trends & Skills Explorer</h1>
            <p className="text-muted-foreground">Discover in-demand skills and job opportunities</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Growing Field</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Data Science</div>
              <p className="text-xs text-muted-foreground">+32% YoY Growth</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Most In-Demand Skill</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">React</div>
              <p className="text-xs text-muted-foreground">Featured in 40% of job listings</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Hiring Region</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Bangalore</div>
              <p className="text-xs text-muted-foreground">28% of tech job openings</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search jobs or skills..." className="pl-8" />
          </div>
          <Select defaultValue="all-regions">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-regions">All Regions</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
              <SelectItem value="delhi-ncr">Delhi NCR</SelectItem>
              <SelectItem value="hyderabad">Hyderabad</SelectItem>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="pune">Pune</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-levels">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-levels">All Levels</SelectItem>
              <SelectItem value="entry-level">Entry Level</SelectItem>
              <SelectItem value="mid-level">Mid Level</SelectItem>
              <SelectItem value="senior">Senior</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jobTrends.map((job, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                  <Badge
                    variant={job.demand === "High" ? "default" : job.demand === "Medium" ? "secondary" : "outline"}
                  >
                    {job.demand} Demand
                  </Badge>
                </div>
                <CardDescription>{job.region}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-1 mb-3">
                  {job.skills.map((skill, i) => (
                    <Badge key={i} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Badge variant="outline">{job.level}</Badge>
                  <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-medium">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    {job.growth}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <ChatbotButton />
      <Footer />
    </div>
  )
}

