import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string
  change: number
  trend: "up" | "down"
}

export default function MetricCard({ title, value, change, trend }: MetricCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{value}</h2>
          <span className={`flex items-center text-sm ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
            {trend === "up" ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
            {change}%
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

