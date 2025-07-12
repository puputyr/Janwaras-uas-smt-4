import { Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-jamu-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <span className="text-xl font-bold text-jamu-green">JamWaras</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beranda" className="text-foreground hover:text-jamu-green transition-colors">
              Beranda
            </a>
            <a href="#rekomendasi" className="text-foreground hover:text-jamu-green transition-colors">
              Rekomendasi
            </a>
            <a href="#marketplace" className="text-foreground hover:text-jamu-green transition-colors">
              Marketplace
            </a>
            <a href="#racik-sendiri" className="text-foreground hover:text-jamu-green transition-colors">
              Racik Sendiri
            </a>
            <a href="#about" className="text-foreground hover:text-jamu-green transition-colors">
              About Us
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header