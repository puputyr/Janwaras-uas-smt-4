import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import jamuDrink from "@/assets/jamu-drink.jpg"
import jamuHerbs from "@/assets/jamu-herbs.jpg"

const jamuProducts = [
  {
    id: 1,
    name: "Wedang Uwuh",
    description: "Minuman tradisional untuk kesehatan tubuh",
    image: jamuDrink,
    rating: 4.8,
    price: "Rp25k",
    tags: ["Racik", "Jual"]
  },
  {
    id: 2,
    name: "Temulawak Serui",
    description: "Baik untuk pencernaan dan liver",
    image: jamuHerbs,
    rating: 4.9,
    price: "Rp30k",
    tags: ["Racik", "Jual"]
  },
  {
    id: 3,
    name: "Beras Kencur",
    description: "Membantu mengatasi masuk angin dan pegal-pegal",
    image: jamuDrink,
    rating: 4.7,
    price: "Rp20k",
    tags: ["Racik", "Jual"]
  }
]

const JamuRecommendations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-jamu-green-dark">
          Rekomendasi Jamu untuk Anda
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {jamuProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-jamu-green-dark">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-lg font-bold text-jamu-green">{product.price}</span>
                </div>
                
                <div className="flex space-x-2">
                  {product.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant={tag === "Racik" ? "default" : "secondary"}
                      className={tag === "Racik" ? "bg-jamu-green hover:bg-jamu-green-dark" : ""}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Assistant Section */}
        <div className="bg-jamu-green rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Hai Aku Mbak Gendong, Asisten dari JamWaras!
              </h3>
              <p className="text-jamu-cream/90 mb-6">
                Jangan ragu untuk bertanya pada saya tentang keluhan tubuh yang kamu alami, 
                aku akan memberikan saran jamu herbal yang sesuai dengan kebutuhanmu. 
                Aku akan membantu kamu menemukan solusi alami untuk kesehatan yang lebih baik!
              </p>
              <ul className="space-y-2 text-sm text-jamu-cream/90">
                <li>✓ Konsultasi 24/7 dengan AI yang pintar</li>
                <li>✓ Rekomendasi jamu yang sesuai kebutuhanmu</li>
                <li>✓ Tips penggunaan dan dosis yang tepat</li>
                <li>✓ Informasi tentang manfaat dan efek samping</li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="w-64 h-64 mx-auto bg-jamu-green-light/20 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-jamu-brown/30 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👩‍⚕️</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-jamu-green-dark/30 rounded-full translate-y-12 -translate-x-12"></div>
        </div>
      </div>
    </section>
  )
}

export default JamuRecommendations