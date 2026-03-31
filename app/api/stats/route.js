import { NextResponse } from "next/server"

export async function GET() {
  const stats = [
    {
      title: "Total Balance",
      value: "$14,278.45",
      change: "+2.5%",
      trend: "up",
      iconName: "DollarSign",
      color: "from-emerald-500 to-teal-500",
      lightColor: "bg-emerald-50 dark:bg-emerald-950/30",
      strokeColor: "#10b981",
      fillColor: "#10b98120",
      decorationColor: "emerald",
      data: [
        { value: 4000 },
        { value: 3500 },
        { value: 4500 },
        { value: 4200 },
        { value: 5000 },
        { value: 4800 },
        { value: 5800 },
        { value: 5500 },
      ],
    },
    {
      title: "Monthly Income",
      value: "$3,100.00",
      change: "+5.1%",
      trend: "up",
      iconName: "TrendingUp",
      color: "from-blue-500 to-indigo-500",
      lightColor: "bg-blue-50 dark:bg-blue-950/30",
      strokeColor: "#3b82f6",
      fillColor: "#3b82f620",
      decorationColor: "blue",
      data: [
        { value: 3000 },
        { value: 4000 },
        { value: 3500 },
        { value: 4500 },
        { value: 4000 },
        { value: 5000 },
        { value: 5500 },
        { value: 6000 },
      ],
    },
    {
      title: "Monthly Expenses",
      value: "$1,823.75",
      change: "+12.3%",
      trend: "down",
      iconName: "CreditCard",
      color: "from-rose-500 to-pink-500",
      lightColor: "bg-rose-50 dark:bg-rose-950/30",
      strokeColor: "#f43f5e",
      fillColor: "#f43f5e20",
      decorationColor: "rose",
      data: [
        { value: 2500 },
        { value: 3000 },
        { value: 3500 },
        { value: 4000 },
        { value: 4500 },
        { value: 5000 },
        { value: 5500 },
        { value: 6000 },
      ],
    },
    {
      title: "Savings Rate",
      value: "41.2%",
      change: "+2.1%",
      trend: "up",
      iconName: "Activity",
      color: "from-violet-500 to-purple-500",
      lightColor: "bg-violet-50 dark:bg-violet-950/30",
      strokeColor: "#8b5cf6",
      fillColor: "#8b5cf620",
      decorationColor: "violet",
      data: [
        { value: 35 },
        { value: 40 },
        { value: 30 },
        { value: 35 },
        { value: 40 },
        { value: 35 },
        { value: 38 },
        { value: 40 },
      ],
    },
  ]

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  return NextResponse.json(stats)
}
