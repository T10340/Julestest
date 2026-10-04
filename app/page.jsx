import { Hero } from "@/components/agency/hero"
import { Services } from "@/components/agency/services"
import { Features } from "@/components/agency/features"
import { Cta } from "@/components/agency/cta"
import { Footer } from "@/components/agency/footer"

export default function HomePage() {
	return (
		<main className="min-h-screen bg-background flex flex-col items-center">
			<Hero />
			<Services />
			<Features />
			<Cta />
			<Footer />
		</main>
	)
}
