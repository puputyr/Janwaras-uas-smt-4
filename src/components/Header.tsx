import { Search, ShoppingCart, User, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-jamu-green rounded-full flex items-center justify-center">
            <img 
                src="/publik/logo/Logo.png" 
                alt="Jamu preparation"
                className="w-6 h-6" 
              />
            </div>
            <span className="text-2xl font-bold text-jamu-green-dark">JanWaras</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beranda" className="text-foreground hover:text-jamu-green transition-colors font-medium">
              Beranda
            </a>
            <a href="#rekomendasi" className="text-foreground hover:text-jamu-green transition-colors font-medium">
              Rekomendasi
            </a>
            <a href="#jammarket" className="text-foreground hover:text-jamu-green transition-colors font-medium">
              JamMarket
            </a>
            <a href="#racik-dewe" className="text-foreground hover:text-jamu-green transition-colors font-medium">
              Racik Dewe
            </a>
            <a href="#about" className="text-foreground hover:text-jamu-green transition-colors font-medium">
              About Us
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
              <span className="text-xs">👤</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header