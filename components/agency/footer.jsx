"use client"

import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-muted/50 border-t border-border pt-16 pb-8 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="font-bold text-xl tracking-tight">WebCrafters</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Créateurs d'expériences digitales exceptionnelles. Nous concevons le web de demain.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-emerald-500 transition-colors">Design UI/UX</Link></li>
              <li><Link href="#" className="hover:text-emerald-500 transition-colors">Développement Web</Link></li>
              <li><Link href="#" className="hover:text-emerald-500 transition-colors">E-commerce</Link></li>
              <li><Link href="#" className="hover:text-emerald-500 transition-colors">Audit & SEO</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Entreprise</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-emerald-500 transition-colors">À propos</Link></li>
              <li><Link href="#" className="hover:text-emerald-500 transition-colors">Portfolio</Link></li>
              <li><Link href="#" className="hover:text-emerald-500 transition-colors">Carrières</Link></li>
              <li><Link href="#" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Légal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-emerald-500 transition-colors">Mentions légales</Link></li>
              <li><Link href="#" className="hover:text-emerald-500 transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="#" className="hover:text-emerald-500 transition-colors">CGV</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {currentYear} WebCrafters. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
