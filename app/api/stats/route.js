import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET() {
  try {
    const stats = await prisma.stat.findMany({
      include: {
        dataPoints: true,
      },
    })

    // Format the response to match what the frontend expects
    const formattedStats = stats.map((stat) => ({
      ...stat,
      data: stat.dataPoints.map((dp) => ({ value: dp.value })),
    }))

    // Need to sort or ensure the order is correct to match the original layout if needed,
    // but the frontend renders them as they come. Let's make sure the array isn't random order.
    // Order: Total Balance, Monthly Income, Monthly Expenses, Savings Rate
    const order = ["Total Balance", "Monthly Income", "Monthly Expenses", "Savings Rate"]
    formattedStats.sort((a, b) => order.indexOf(a.title) - order.indexOf(b.title))

    return NextResponse.json(formattedStats)
  } catch (error) {
    console.error("Error fetching stats:", error)
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
