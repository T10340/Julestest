"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const features = [
  {
    title: "Performance ultra-rapide",
    description: "Nous optimisons chaque ligne de code pour garantir des temps de chargement instantanés, améliorant ainsi l'expérience utilisateur et le référencement.",
  },
  {
    title: "Design Responsive",
    description: "Votre site s'adaptera parfaitement à tous les écrans, du smartphone à l'ordinateur de bureau, pour ne perdre aucun client potentiel.",
  },
  {
    title: "Technologies modernes",
    description: "Nous utilisons des frameworks à la pointe comme React et Next.js pour vous offrir une application web pérenne et évolutive.",
  },
  {
    title: "Sécurité maximale",
    description: "La protection de vos données et de celles de vos utilisateurs est notre priorité, intégrée dès la conception.",
  },
]

export function Features() {
  return (
    <section className="w-full py-20 md:py-32 flex justify-center bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Pourquoi nous choisir ?</h2>
              <p className="text-lg text-muted-foreground mb-10">
                Nous ne nous contentons pas de créer des sites web, nous concevons des outils performants pour la croissance de votre entreprise. Notre approche allie esthétisme et excellence technique.
              </p>
            </motion.div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden bg-muted border border-border shadow-2xl"
          >
            {/* Placeholder for an image or illustration */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-background flex items-center justify-center p-8">
               <div className="w-full h-full border border-emerald-500/20 rounded-2xl bg-background/50 backdrop-blur-sm shadow-inner flex flex-col p-6 space-y-4">
                  <div className="w-3/4 h-8 bg-emerald-500/10 rounded-md animate-pulse"></div>
                  <div className="w-full h-32 bg-emerald-500/5 rounded-md animate-pulse"></div>
                  <div className="w-5/6 h-4 bg-emerald-500/5 rounded-md animate-pulse"></div>
                  <div className="w-4/6 h-4 bg-emerald-500/5 rounded-md animate-pulse"></div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
