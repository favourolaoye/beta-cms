"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", completed: 75, canceled: 25 },
  { month: "Feb", completed: 100, canceled: 20 },
  { month: "Mar", completed: 50, canceled: 10 },
  { month: "Apr", completed: 90, canceled: 15 },
  { month: "May", completed: 15, canceled: 35 },
  { month: "Jun", completed: 65, canceled: 12 },
  { month: "Jul", completed: 80, canceled: 45 },
  { month: "Aug", completed: 85, canceled: 15 },
  { month: "Sep", completed: 90, canceled: 12 },
  { month: "Oct", completed: 65, canceled: 25 },
  { month: "Nov", completed: 75, canceled: 15 },
  { month: "Dec", completed: 45, canceled: 20 },
]

export default function OverviewChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Bar dataKey="completed" fill="#2563eb" radius={[4, 4, 0, 0]} />
          <Bar dataKey="canceled" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

