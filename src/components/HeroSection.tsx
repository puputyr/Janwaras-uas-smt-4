import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import jamuHerbs from "@/assets/jamu-herbs.jpg"
import jamuPreparation from "@/assets/jamu-preparation.jpg"
import jamuDrink from "@/assets/jamu-drink.jpg"

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero min-h-[70vh] relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <div className="w-3 h-3 bg-jamu-green rounded-full mr-2"></div>
              <span className="text-sm font-medium">100% Natural & Traditional</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-jamu-green-dark leading-tight">
              Jalan Menuju Sehat,{" "}
              <span className="text-jamu-green">Alami, dan Tradisional</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              JamWaras adalah platform digital jamu modern yang menghadirkan kearifan lokal dengan 
              teknologi Artificial Intelligence
            </p>
            
            <Button variant="jamu" size="lg" className="mb-8">
              Temukan Jamu
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-jamu-green-dark">100+</div>
                <div className="text-sm text-muted-foreground">Jenis Jamu</div>
              </div>
              <div className="text-center">
                <div className="bg-jamu-green text-white px-3 py-1 rounded-full text-sm font-medium mb-1">
                  100% Alami
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-jamu-green-dark">10,000+</div>
                <div className="text-sm text-muted-foreground">Pelanggan</div>
              </div>
            </div>
          </div>

          {/* Right content - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-0 overflow-hidden shadow-card">
                <img 
                  src={jamuHerbs} 
                  alt="Traditional herbs"
                  className="w-full h-48 object-cover"
                />
              </Card>
              <Card className="p-0 overflow-hidden shadow-card mt-8">
                <img 
                  src={jamuPreparation} 
                  alt="Jamu preparation"
                  className="w-full h-48 object-cover"
                />
              </Card>
              <Card className="p-0 overflow-hidden shadow-card -mt-8">
                <img 
                  src={jamuDrink} 
                  alt="Person drinking jamu"
                  className="w-full h-48 object-cover"
                />
              </Card>
              <Card className="p-0 overflow-hidden shadow-card">
                <img 
                  src={jamuHerbs} 
                  alt="Traditional medicine"
                  className="w-full h-48 object-cover"
                />
              </Card>
            </div>
            
            {/* Floating icons */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-jamu-green rounded-full opacity-60"></div>
            <div className="absolute top-16 -right-4 w-6 h-6 bg-jamu-brown rounded-full opacity-40"></div>
            <div className="absolute -bottom-4 left-8 w-4 h-4 bg-jamu-green-light rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection