import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ChatbotButton } from "@/components/chatbot-button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Briefcase, Users } from "lucide-react"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SkillUp India</span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Register</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Build Your Future with Skills That Matter
                  </h1>
                  <p className="text-muted-foreground md:text-xl">
                    Personalized learning paths to help you achieve your career goals and transform your future.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <Link href="/register">
                    <Button size="lg" className="w-full sm:w-auto">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/explore">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Explore Skills
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
              <Image
  src="/indian-youth-learning.jpg"
  alt="Indian youth learning together in a rural setting"
  width={500}
  height={333}
  className="rounded-lg object-cover shadow-lg"
  priority
/>

              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-12 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To empower Indian youth with the skills they need to succeed in the digital economy, regardless of their
              background or location. We believe everyone deserves access to quality education.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-8">Why Choose SkillUp India?</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Personalized Learning</h3>
                  <p className="text-muted-foreground">
                    Custom learning paths based on your goals, skills, and preferences.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Industry Relevant</h3>
                  <p className="text-muted-foreground">
                    Skills aligned with current job market demands and industry trends.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Community Support</h3>
                  <p className="text-muted-foreground">Learn with peers and get guidance from experienced mentors.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <ChatbotButton />
      <Footer />
    </div>
  )
}

