"use client"

import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Activity, ArrowDown, ArrowUp, CreditCard, DollarSign, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts"

const iconMap = {
	DollarSign: DollarSign,
	TrendingUp: TrendingUp,
	CreditCard: CreditCard,
	Activity: Activity,
}

export function StatsCards() {
	const [stats, setStats] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		async function fetchStats() {
			try {
				const response = await fetch("/api/stats")
				if (!response.ok) {
					throw new Error("Failed to fetch stats")
				}
				const data = await response.json()
				// Map icon names back to Lucide components
				const statsWithIcons = data.map((stat) => ({
					...stat,
					icon: iconMap[stat.iconName] || DollarSign,
				}))
				setStats(statsWithIcons)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		fetchStats()
	}, [])

	if (loading) {
		return (
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
				{[...Array(4)].map((_, i) => (
					<Card key={i} className="p-6">
						<div className="flex justify-between items-start mb-4">
							<Skeleton className="h-12 w-12 rounded-xl" />
							<Skeleton className="h-12 w-40" />
						</div>
						<div className="space-y-2 mt-4">
							<Skeleton className="h-8 w-1/2" />
							<Skeleton className="h-4 w-1/3" />
						</div>
					</Card>
				))}
			</div>
		)
	}

	if (error) {
		return (
			<div className="p-4 text-sm text-red-500 bg-red-50 dark:bg-red-950/30 rounded-lg">
				Error loading statistics: {error}
			</div>
		)
	}

	return (
		<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
			{stats.map((stat, index) => (
				<StatCard key={stat.title} stat={stat} index={index} />
			))}
		</div>
	)
}

function StatCard({ stat, index }) {
	const Icon = stat.icon

	// Custom tooltip that matches our design
	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="bg-background border border-border/40 rounded-lg shadow-sm p-2 text-xs">
					<p className="font-medium">{`Value: ${payload[0].value}`}</p>
				</div>
			)
		}
		return null
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, delay: index * 0.1 }}
		>
			<Card
				className={cn(
					"overflow-hidden border-border/40 hover:shadow-md transition-all duration-300 group",
					"decoration-card decoration-" + stat.decorationColor,
				)}
			>
				<div className="relative p-6">
					{/* Background accent */}
					<div
						className={cn("absolute top-0 right-0 w-24 h-24 rounded-full -mt-8 -mr-8 opacity-10", stat.lightColor)}
					/>

					{/* Top row with icon and chart */}
					<div className="flex justify-between items-start mb-4">
						{/* Icon with gradient background */}
						<div className={cn("flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br", stat.color)}>
							<Icon className="h-6 w-6 text-white" />
						</div>

						{/* Recharts line chart in top right */}
						<div className="w-40 h-12 relative z-10">
							<ResponsiveContainer width="100%" height="100%">
								<AreaChart data={stat.data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
									<defs>
										<linearGradient id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
											<stop offset="5%" stopColor={stat.strokeColor} stopOpacity={0.3} />
											<stop offset="95%" stopColor={stat.strokeColor} stopOpacity={0} />
										</linearGradient>
									</defs>
									<Tooltip content={<CustomTooltip />} cursor={false} />
									<Area
										type="monotone"
										dataKey="value"
										stroke={stat.strokeColor}
										strokeWidth={2}
										fillOpacity={1}
										fill={`url(#gradient-${index})`}
										animationDuration={1000}
										animationEasing="ease-out"
									/>
								</AreaChart>
							</ResponsiveContainer>
						</div>
					</div>

					{/* Value and title */}
					<div className="flex justify-between items-center">
						<div className="space-y-1 relative z-10">
							<h3 className="text-3xl font-semibold tracking-tight">{stat.value}</h3>
							<p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
						</div>

						{/* Change indicator */}
						<div className="mt-4 flex items-center relative z-10">
							<div
								className={cn(
									"flex items-center justify-center rounded-full p-1 mr-2",
									stat.trend === "up"
										? "text-emerald-500 bg-emerald-100 dark:bg-emerald-950/30"
										: "text-rose-500 bg-rose-100 dark:bg-rose-950/30",
								)}
							>
								{stat.trend === "up" ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
							</div>
							<p className={cn("text-xs font-medium", stat.trend === "up" ? "text-emerald-500" : "text-rose-500")}>
								{stat.change} from last month
							</p>
						</div>

					</div>
				</div>
			</Card>
		</motion.div>
	)
}
