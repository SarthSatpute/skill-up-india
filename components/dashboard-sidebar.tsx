"use client"

import { Button } from "@/components/ui/button"
import { BarChart, FileText, Settings, Home, Award } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function DashboardSidebar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Assessment", href: "/assessment", icon: FileText },
    { name: "Explore", href: "/explore", icon: BarChart },
    { name: "Achievements", href: "/achievements", icon: Award },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <aside className="hidden md:flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.name}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className="justify-start"
              asChild
            >
              <Link href={item.href}>
                <Icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            </Button>
          )
        })}
      </div>

      <div className="mt-auto">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 mt-4">
          <div className="flex flex-col space-y-1.5 pb-3">
            <h3 className="text-sm font-semibold leading-none tracking-tight">Need Help?</h3>
          </div>
          <div className="text-xs text-muted-foreground mb-3">
            Contact our support team or use the AI assistant for immediate help.
          </div>
          <Button variant="outline" size="sm" className="w-full">
            Contact Support
          </Button>
        </div>
      </div>
    </aside>
  )
}

