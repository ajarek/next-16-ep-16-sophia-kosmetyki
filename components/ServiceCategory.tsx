"use client"
import { ScrollText } from "lucide-react"
import { Button } from "@/components/ui/button"
import serviceCategory from "@/data/services.json"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const ServiceCategory = () => {
  const uniqueCategories = [
    ...new Set(serviceCategory.map((category) => category.category)),
  ]
  const [selectedCategory, setSelectedCategory] = useState(uniqueCategories[0])
  return (
    <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4'>
      <div className='flex flex-col gap-4'>
        <h2 className='flex items-center gap-2 text-2xl font-semibold'>
          <ScrollText />
          Kategoria usługi
        </h2>

        {uniqueCategories.map((category) => (
          <Button
            variant={selectedCategory === category ? "default" : "outline"}
            key={category}
            className='w-full text-xl h-10'
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {serviceCategory
          .filter((service) => service.category === selectedCategory)
          .map((service) => (
            <Card key={service.id} className='flex flex-col gap-2'>
              <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>{service.title}</CardTitle>
                    <p className="text-xl font-semibold text-primary">{Number(service.price).toFixed(2)} PLN</p>
                </div>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )
}

export default ServiceCategory
