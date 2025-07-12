import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

const symptoms = [
  { id: "nyeri-kaki", label: "Nyeri kaki" },
  { id: "sakit-pinggang", label: "Sakit pinggang" },
  { id: "asam-lambung", label: "Asam lambung" },
  { id: "demam-rematik", label: "Demam rematik" },
  { id: "sakit-kepala", label: "Sakit kepala" },
  { id: "batuk", label: "Batuk" },
  { id: "masuk-angin", label: "Masuk angin" },
  { id: "sulit-tidur", label: "Sulit tidur" },
  { id: "kulit-gatal", label: "Kulit gatal" },
  { id: "mood-jelek", label: "Mood jelek" },
  { id: "menurunkan-bb", label: "Menurunkan BB" },
  { id: "menstruasi", label: "Menstruasi" },
  { id: "kista-mioma", label: "Kista mioma" },
  { id: "diabetes", label: "Diabetes" },
  { id: "darah-tinggi", label: "Darah tinggi" },
  { id: "asam-urat", label: "Asam urat" },
  { id: "mag", label: "Mag" },
  { id: "vertigo", label: "Vertigo" }
]

const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])

  const handleSymptomChange = (symptomId: string, checked: boolean) => {
    if (checked) {
      setSelectedSymptoms([...selectedSymptoms, symptomId])
    } else {
      setSelectedSymptoms(selectedSymptoms.filter(id => id !== symptomId))
    }
  }

  return (
    <section className="py-16 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-jamu-green-dark">
            Ceritakan keluhanmu, temukan jamu yang tepat dalam sekejap!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dengan teknologi AI/Hens Intelligence (AI), kami menggunakan data jamu dari para ahli dan 
            mengkolaborasikan database kami untuk mengembangkan jamu yang tepat, berkualitas dan teruji dari nenek moyang tradisional.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-card">
          <CardHeader>
            <CardTitle className="text-center text-jamu-green">
              Pilih gejala yang Anda alami
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {symptoms.map((symptom) => (
                <div key={symptom.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={symptom.id}
                    checked={selectedSymptoms.includes(symptom.id)}
                    onCheckedChange={(checked) => 
                      handleSymptomChange(symptom.id, checked as boolean)
                    }
                    className="data-[state=checked]:bg-jamu-green data-[state=checked]:border-jamu-green"
                  />
                  <label 
                    htmlFor={symptom.id} 
                    className="text-sm cursor-pointer hover:text-jamu-green transition-colors"
                  >
                    {symptom.label}
                  </label>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                variant="jamu" 
                size="lg"
                disabled={selectedSymptoms.length === 0}
              >
                Temukan Rekomendasi Jamu
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default SymptomChecker