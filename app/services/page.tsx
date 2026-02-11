import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import HeaderTitle from "@/components/HeaderTitle"
import { servicesData } from "@/data/servicesData"

const Services = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-start justify-center gap-16 pt-32  px-4 lg:px-12 '>
      <HeaderTitle
        introduction='SKONTAKTUJ SIĘ Z NAMI'
        title='Nasze Usługi'
        text='Odkryj naszą kompleksową ofertę profesjonalnych zabiegów pielęgnacyjnych, opracowanych z myślą o wszystkich potrzebach Twojej skóry i spełnieniu Twoich celów.'
      />

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center'>
        {servicesData.map((service) => (
          <Card key={service.id} className='flex flex-col justify-between'>
            <CardHeader>
              <div className='relative w-full h-64 overflow-hidden'>
                <Image
                  src={service.image}
                  alt='Services'
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-cover rounded-md hover:scale-110 transition-all duration-500'
                />
              </div>
            </CardHeader>
            <CardTitle className='text-center'>{service.title}</CardTitle>
            <CardContent>
              <CardDescription className='text-center'>
                {service.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className='w-full'>
                <Link href={`/services/${service.id}`}>Rezerwuj</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Services
