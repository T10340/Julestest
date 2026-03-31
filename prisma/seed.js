const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
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
      dataPoints: {
        create: [
          { value: 4000 },
          { value: 3500 },
          { value: 4500 },
          { value: 4200 },
          { value: 5000 },
          { value: 4800 },
          { value: 5800 },
          { value: 5500 },
        ]
      }
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
      dataPoints: {
        create: [
          { value: 3000 },
          { value: 4000 },
          { value: 3500 },
          { value: 4500 },
          { value: 4000 },
          { value: 5000 },
          { value: 5500 },
          { value: 6000 },
        ]
      }
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
      dataPoints: {
        create: [
          { value: 2500 },
          { value: 3000 },
          { value: 3500 },
          { value: 4000 },
          { value: 4500 },
          { value: 5000 },
          { value: 5500 },
          { value: 6000 },
        ]
      }
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
      dataPoints: {
        create: [
          { value: 35 },
          { value: 40 },
          { value: 30 },
          { value: 35 },
          { value: 40 },
          { value: 35 },
          { value: 38 },
          { value: 40 },
        ]
      }
    },
  ]

  for (const statData of stats) {
    await prisma.stat.upsert({
      where: { title: statData.title },
      update: {},
      create: statData,
    })
  }

  // Create some sample transactions
  await prisma.transaction.createMany({
    data: [
      {
        amount: 3000.00,
        type: "income",
        category: "Salary",
        description: "Monthly salary",
        date: new Date(new Date().setMonth(new Date().getMonth() - 1))
      },
      {
        amount: 120.50,
        type: "expense",
        category: "Groceries",
        description: "Supermarket run",
        date: new Date(new Date().setDate(new Date().getDate() - 5))
      },
      {
        amount: 50.00,
        type: "expense",
        category: "Entertainment",
        description: "Movie tickets",
        date: new Date(new Date().setDate(new Date().getDate() - 2))
      }
    ]
  })

  console.log("Database seeded successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })