"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Send } from "lucide-react"

export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Hi there! I'm your AI learning assistant. How can I help you today?",
    },
  ])

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: message }])
    setMessage("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "I'm here to help with your learning journey. What specific topic or skill would you like assistance with?",
        },
      ])
    }, 1000)
  }

  return (
    <>
      <Button className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg" onClick={() => setIsOpen(true)}>
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Open AI Assistant</span>
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="sm:max-w-[400px] p-0 flex flex-col h-full">
          <SheetHeader className="p-4 border-b">
            <SheetTitle>AI Learning Assistant</SheetTitle>
            <SheetDescription>Ask questions about your courses or get help with your learning journey</SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  {msg.role === "bot" && (
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI Assistant" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg p-3 ${
                      msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SheetFooter className="p-4 border-t">
            <div className="flex w-full items-center space-x-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage()
                  }
                }}
              />
              <Button size="icon" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}

