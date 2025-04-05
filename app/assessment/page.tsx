"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { ChatbotButton } from "@/components/chatbot-button"
import DashboardHeader from "@/components/dashboard-header"
import { ArrowRight, ArrowLeft, MessageSquare, CodeIcon } from "lucide-react"
import Footer from "@/components/footer"

const questions = [
  {
    id: 1,
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      { id: "a", text: "<link>" },
      { id: "b", text: "<a>" },
      { id: "c", text: "<href>" },
      { id: "d", text: "<url>" },
    ],
    answer: "b",
  },
  {
    id: 2,
    question: "Which CSS property is used to change the text color?",
    options: [
      { id: "a", text: "text-color" },
      { id: "b", text: "font-color" },
      { id: "c", text: "color" },
      { id: "d", text: "text-style" },
    ],
    answer: "c",
  },
  {
    id: 3,
    question: "What does the following JavaScript code do: console.log('Hello World');",
    options: [
      { id: "a", text: "Creates a popup with 'Hello World'" },
      { id: "b", text: "Prints 'Hello World' to the console" },
      { id: "c", text: "Creates a variable named 'Hello World'" },
      { id: "d", text: "Returns 'Hello World' from a function" },
    ],
    answer: "b",
  },
]

const codeQuestion = {
  id: 4,
  question: "Write a JavaScript function that returns the sum of two numbers.",
  initialCode: "function sum(a, b) {\n  // Your code here\n}",
  expectedOutput: "sum(2, 3) should return 5",
}

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [smsMode, setSmsMode] = useState(false)
  const [code, setCode] = useState(codeQuestion.initialCode)

  const handleAnswer = (answerId: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: answerId })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let score = 0
    questions.forEach((question) => {
      if (answers[question.id] === question.answer) {
        score++
      }
    })
    return (score / questions.length) * 100
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />

      <main className="flex-1 container py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">JavaScript Fundamentals Assessment</h1>
              <p className="text-muted-foreground">Test your knowledge of JavaScript basics</p>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="sms-mode" checked={smsMode} onCheckedChange={setSmsMode} />
              <Label htmlFor="sms-mode">SMS Mode</Label>
            </div>
          </div>

          {!showResults ? (
            <Card className={smsMode ? "bg-muted border-2" : ""}>
              <CardHeader>
                <CardTitle className="text-xl">
                  Question {currentQuestion + 1} of {questions.length}
                </CardTitle>
                <Progress value={progress} className="mt-2" />
              </CardHeader>
              <CardContent className="space-y-4">
                {smsMode ? (
                  <div className="space-y-4 text-sm">
                    <p className="font-medium">
                      Q{currentQuestion + 1}: {questions[currentQuestion].question}
                    </p>
                    {questions[currentQuestion].options.map((option) => (
                      <div key={option.id} className="flex gap-2">
                        <div>{option.id.toUpperCase()})</div>
                        <div>{option.text}</div>
                      </div>
                    ))}
                    <p className="text-muted-foreground italic">Reply with A, B, C, or D to answer</p>
                  </div>
                ) : (
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
                )}
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
          ) : (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Assessment Results</CardTitle>
                  <CardDescription>You scored {calculateScore().toFixed(0)}% on this assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {questions.map((question, index) => (
                      <div key={question.id} className="border rounded-md p-4">
                        <p className="font-medium">
                          Question {index + 1}: {question.question}
                        </p>
                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {question.options.map((option) => (
                            <div
                              key={option.id}
                              className={`p-2 rounded-md ${
                                option.id === question.answer
                                  ? "bg-green-100 dark:bg-green-900/20 border-green-500 border"
                                  : answers[question.id] === option.id && answers[question.id] !== question.answer
                                    ? "bg-red-100 dark:bg-red-900/20 border-red-500 border"
                                    : "bg-muted"
                              }`}
                            >
                              {option.text}
                              {option.id === question.answer && (
                                <span className="ml-2 text-green-600 dark:text-green-400">✓ Correct</span>
                              )}
                              {answers[question.id] === option.id && answers[question.id] !== question.answer && (
                                <span className="ml-2 text-red-600 dark:text-red-400">✗ Your answer</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => (window.location.href = "/dashboard")} className="w-full">
                    Return to Dashboard
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Coding Challenge</CardTitle>
                  <CardDescription>
                    Complete the following coding challenge to test your JavaScript skills
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="code">
                    <TabsList className="mb-4">
                      <TabsTrigger value="code">
                        <CodeIcon className="h-4 w-4 mr-2" />
                        Code
                      </TabsTrigger>
                      <TabsTrigger value="instructions">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Instructions
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="code">
                      <div className="space-y-4">
                        <div className="font-mono bg-muted p-4 rounded-md overflow-x-auto">
                          <textarea
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full min-h-[200px] bg-transparent border-none focus:outline-none resize-none"
                          />
                        </div>
                        <Button className="w-full">Run Code</Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="instructions">
                      <div className="space-y-4">
                        <p>{codeQuestion.question}</p>
                        <div className="bg-muted p-4 rounded-md">
                          <p className="font-mono text-sm">{codeQuestion.expectedOutput}</p>
                        </div>
                        <div className="bg-muted p-4 rounded-md">
                          <p className="font-medium">Hints:</p>
                          <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>Use the + operator to add numbers in JavaScript</li>
                            <li>Make sure to return the result from your function</li>
                            <li>Test your function with different inputs</li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>

      <ChatbotButton />
      <Footer />
    </div>
  )
}

