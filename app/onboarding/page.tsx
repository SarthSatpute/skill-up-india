"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ChatbotButton } from "@/components/chatbot-button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BookOpen, ArrowRight, ArrowLeft } from "lucide-react"
import Footer from "@/components/footer"

const questions = [
  {
    id: 1,
    question: "What is your primary career goal?",
    options: [
      { id: "a", text: "Get a job in the tech industry" },
      { id: "b", text: "Start my own business" },
      { id: "c", text: "Advance in my current career" },
      { id: "d", text: "Explore new career options" },
    ],
  },
  {
    id: 2,
    question: "What is your current skill level in programming?",
    options: [
      { id: "a", text: "Beginner - No experience" },
      { id: "b", text: "Novice - Some basic knowledge" },
      { id: "c", text: "Intermediate - Comfortable with basics" },
      { id: "d", text: "Advanced - Experienced programmer" },
    ],
  },
  {
    id: 3,
    question: "Which area are you most interested in learning?",
    options: [
      { id: "a", text: "Web Development" },
      { id: "b", text: "Mobile App Development" },
      { id: "c", text: "Data Science & AI" },
      { id: "d", text: "Digital Marketing" },
    ],
  },
  {
    id: 4,
    question: "How much time can you dedicate to learning each week?",
    options: [
      { id: "a", text: "Less than 5 hours" },
      { id: "b", text: "5-10 hours" },
      { id: "c", text: "10-20 hours" },
      { id: "d", text: "More than 20 hours" },
    ],
  },
  {
    id: 5,
    question: "What is your preferred learning style?",
    options: [
      { id: "a", text: "Video tutorials" },
      { id: "b", text: "Interactive coding exercises" },
      { id: "c", text: "Reading documentation and articles" },
      { id: "d", text: "Project-based learning" },
    ],
  },
]

export default function OnboardingPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const router = useRouter()

  const handleAnswer = (answerId: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: answerId })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // In a real app, you would save the answers and create a personalized roadmap
      router.push("/dashboard")
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SkillUp India</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Let&apos;s Personalize Your Experience</CardTitle>
            <CardDescription>
              Answer a few questions to help us create your personalized learning roadmap
            </CardDescription>
            <Progress value={progress} className="mt-2" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{questions[currentQuestion].question}</h3>
              <RadioGroup
                value={answers[questions[currentQuestion].id] || ""}
                onValueChange={handleAnswer}
                className="flex flex-col space-y-2"
              >
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button onClick={handleNext} disabled={!answers[questions[currentQuestion].id]}>
              {currentQuestion < questions.length - 1 ? (
                <>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                "Finish"
              )}
            </Button>
          </CardFooter>
        </Card>
      </main>

      <ChatbotButton />
      <Footer />
    </div>
  )
}

