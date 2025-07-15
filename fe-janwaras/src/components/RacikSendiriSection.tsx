import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChefHat, Leaf, Users } from "lucide-react"

const RacikSendiriSection = () => {
  return (
    <section className="py-16 bg-jamu-green text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content - Image */}
          <div className="relative">
            <Card className="bg-jamu-cream overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-orange-200 to-yellow-200 flex items-center justify-center relative">
                {/* Kitchen scene illustration */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-100 to-orange-200"></div>
                <div className="relative z-10 text-center text-jamu-brown">
                  <ChefHat className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-sm font-medium">Racik Jamu Sendiri</p>
                </div>
                
                {/* Decorative kitchen elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-jamu-brown/20 rounded-full"></div>
                <div className="absolute top-8 right-8 w-6 h-6 bg-jamu-green/30 rounded-full"></div>
                <div className="absolute bottom-4 left-8 w-4 h-4 bg-orange-400/40 rounded-full"></div>
                <div className="absolute bottom-8 right-4 w-10 h-10 bg-yellow-300/30 rounded-full"></div>
              </div>
            </Card>
          </div>

          {/* Right content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-jamu-cream">Racik sendiri</span>
            </h2>
            
            <p className="text-jamu-cream/90 mb-8 leading-relaxed">
              Buat ramuan terapatik sendiri yang alami dan berkualitas. Mulai meracik dengan 
              merasakan kualitas bahan-bahan herbal yang berstandar internasional dengan paket yang berguna.
            </p>
            
            <div className="grid gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-jamu-cream/20 rounded-full flex items-center justify-center">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="text-jamu-cream">Bahan-bahan herbal berkualitas premium</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-jamu-cream/20 rounded-full flex items-center justify-center">
                  <ChefHat className="w-4 h-4" />
                </div>
                <span className="text-jamu-cream">Panduan lengkap cara meracik yang tepat</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-jamu-cream/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-jamu-cream">Konsultasi dengan ahli jamu berpengalaman</span>
              </div>
            </div>
            
            <Button variant="secondary" size="lg">
              Racik Jamu
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-jamu-green-dark/20 rounded-full -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 translate-x-32"></div>
    </section>
  )
}

export default RacikSendiriSection