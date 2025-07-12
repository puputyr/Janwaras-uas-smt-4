import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import pasarNguter from "@/assets/pasar-nguter.jpg"

const PasarNguterSection = () => {
  return (
    <section className="py-16 bg-jamu-green text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              PASAR NGUTER
              <br />
              <span className="text-jamu-cream">Sukoharjo</span>
            </h2>
            
            <p className="text-jamu-cream/90 mb-8 leading-relaxed">
              Kami bangga menjadi mitra resmi Pasar Nguter yang telah diakui sebagai pasar jamu 
              terbesar. Kami juga menjadikan saram Nguter dan Unikae Ngak dipyukan para penjual 
              jamu dan ramuan tradisional terpercaya di Indonesia. Lebih dari itu, kami berkomitmen 
              untuk tetap mempertahankan kualitas dan keaslian produk jamu yang telah menjadi 
              kearifan lokal Indonesia. Dalam kolaborasi dengan pedagang di Pasar Nguter Sukoharjo jamu, 
              kami berharap dapat membantu dalam membangun untuk masa jamu lokal.
            </p>
            
            <Button variant="secondary" size="lg">
              Selengkapnya →
            </Button>
          </div>

          {/* Right content - Image/Video placeholder */}
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={pasarNguter} 
                  alt="Pasar Nguter Sukoharjo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-jamu-green/60 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">PASAR JAMU NGUTER</h3>
                    <p className="text-sm">SUKOHARJO</p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 border-4 border-white/30 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-jamu-cream rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-jamu-green-dark/20 rounded-full translate-y-48 -translate-x-48"></div>
    </section>
  )
}

export default PasarNguterSection