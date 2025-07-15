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
            Sejarah Jamu 
              <br />
              <span className="text-jamu-cream">di Indonesia</span>
            </h2>
            
            <p className="text-jamu-cream/90 mb-8 leading-relaxed">
            Jamu merupakan warisan budaya asli Indonesia yang telah digunakan sejak ribuan tahun lalu sebagai metode pengobatan tradisional berbasis bahan alami. Bukti tertua mengenai penggunaan jamu ditemukan dalam relief Candi Borobudur dan Prambanan yang menggambarkan praktik peracikan tanaman obat.

Pada masa kerajaan Hindu-Buddha seperti Mataram Kuno dan Majapahit, jamu telah menjadi bagian penting dalam kehidupan masyarakat, terutama di lingkungan keraton. Resep-resep jamu diwariskan secara turun-temurun dan diracik oleh para tabib atau dukun yang menggunakan bahan dari rempah-rempah, akar, daun, hingga kulit kayu.
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
     
    </section>
  )
}

export default PasarNguterSection