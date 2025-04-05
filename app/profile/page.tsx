"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChatbotButton } from "@/components/chatbot-button"
import DashboardHeader from "@/components/dashboard-header"
import { Award, Edit2, Save, User } from "lucide-react"
import Footer from "@/components/footer"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Rahul Singh",
    email: "rahul.singh@example.com",
    region: "Delhi NCR",
    careerGoal: "Web Developer",
    language: "English",
  })

  const handleSave = () => {
    setIsEditing(false)
    // In a real app, you would save the profile data to the server
  }

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />

      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Your Profile</h1>
              <p className="text-muted-foreground">Manage your personal information and preferences</p>
            </div>
            {!isEditing ? (
              <Button onClick={() => setIsEditing(true)}>
                <Edit2 className="mr-2 h-4 w-4" /> Edit Profile
              </Button>
            ) : (
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" /> Save Changes
              </Button>
            )}
          </div>

          <Tabs defaultValue="profile">
            <TabsList className="mb-6">
              <TabsTrigger value="profile">
                <User className="mr-2 h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="achievements">
                <Award className="mr-2 h-4 w-4" />
                Achievements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <div className="grid gap-6 md:grid-cols-[250px_1fr]">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt={profile.name} />
                      <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold">{profile.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{profile.email}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge variant="outline">{profile.region}</Badge>
                      <Badge variant="outline">{profile.careerGoal}</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details and preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="region">Region</Label>
                      <Select
                        disabled={!isEditing}
                        value={profile.region}
                        onValueChange={(value) => setProfile({ ...profile, region: value })}
                      >
                        <SelectTrigger id="region">
                          <SelectValue placeholder="Select your region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Bangalore">Bangalore</SelectItem>
                          <SelectItem value="Delhi NCR">Delhi NCR</SelectItem>
                          <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                          <SelectItem value="Mumbai">Mumbai</SelectItem>
                          <SelectItem value="Pune">Pune</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="career-goal">Career Goal</Label>
                      <Select
                        disabled={!isEditing}
                        value={profile.careerGoal}
                        onValueChange={(value) => setProfile({ ...profile, careerGoal: value })}
                      >
                        <SelectTrigger id="career-goal">
                          <SelectValue placeholder="Select your career goal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Web Developer">Web Developer</SelectItem>
                          <SelectItem value="Mobile App Developer">Mobile App Developer</SelectItem>
                          <SelectItem value="Data Scientist">Data Scientist</SelectItem>
                          <SelectItem value="UI/UX Designer">UI/UX Designer</SelectItem>
                          <SelectItem value="DevOps Engineer">DevOps Engineer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="language">Preferred Language</Label>
                      <Select
                        disabled={!isEditing}
                        value={profile.language}
                        onValueChange={(value) => setProfile({ ...profile, language: value })}
                      >
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Select your language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="English">English</SelectItem>
                          <SelectItem value="Hindi">Hindi</SelectItem>
                          <SelectItem value="Tamil">Tamil</SelectItem>
                          <SelectItem value="Telugu">Telugu</SelectItem>
                          <SelectItem value="Bengali">Bengali</SelectItem>
                          <SelectItem value="Marathi">Marathi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="achievements">
              <Card>
                <CardHeader>
                  <CardTitle>Your Achievements</CardTitle>
                  <CardDescription>Badges and certifications you&apos;ve earned</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <div className="p-2 bg-primary/10 rounded-full mb-3">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-center">HTML & CSS Fundamentals</h3>
                      <p className="text-sm text-muted-foreground text-center mt-1">Completed on April 2, 2025</p>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg bg-muted/50">
                      <div className="p-2 bg-muted rounded-full mb-3">
                        <Award className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="font-semibold text-center">JavaScript Basics</h3>
                      <p className="text-sm text-muted-foreground text-center mt-1">In progress - 70% complete</p>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg border-dashed">
                      <div className="p-2 bg-muted rounded-full mb-3">
                        <Award className="h-8 w-8 text-muted-foreground opacity-30" />
                      </div>
                      <h3 className="font-semibold text-center text-muted-foreground">React Fundamentals</h3>
                      <p className="text-sm text-muted-foreground text-center mt-1">
                        Locked - Complete JavaScript first
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Achievements
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Peer Sharing</CardTitle>
              <CardDescription>Share your learning materials with peers offline</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">Offline Content Sharing</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Share your downloaded courses with peers nearby without using internet
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">View Offline Content</Button>
                  <Button>Send to Peer Device</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <ChatbotButton />
      <Footer />
    </div>
  )
}

