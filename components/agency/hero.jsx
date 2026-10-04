"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 flex justify-center items-center overflow-hidden relative bg-gradient-to-br from-background via-background to-emerald-900/10">
      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Création de sites web d'exception
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Nous concevons des expériences digitales modernes, performantes et centrées sur l'utilisateur pour propulser votre entreprise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="h-12 px-8 text-base bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">
            Démarrer un projet
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full">
            Voir nos réalisations
          </Button>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  )
}
