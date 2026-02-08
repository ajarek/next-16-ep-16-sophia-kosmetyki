import Image from "next/image"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const servicesData = [
    {
        id: 1,
        title: "Organiczne zabiegi na twarz",
        description: "Powszechna technika kosmetyczna, w której skoncentrowane wiązki laserowe niszczą mieszki włosowe.",
        image: "/images/treatments-1.avif",
    },
    {
        id: 2,
        title: "Zabiegi na skórę",
        description: "Szeroko uznana metoda kosmetyczna wykorzystująca technologię laserową w celu precyzyjnego ukierunkowania.",
        image: "/images/treatments-2.avif",
    },
    {
        id: 3,
        title: "Problemy skórne",
        description: "Popularna technika kosmetyczna polegająca na wykorzystaniu ukierunkowanej energii laserowej w celu skutecznego usuwania cebulek włosów.",
        image: "/images/treatments-3.webp",
    },
    {
        id: 4,
        title: "Intensywna odnowa",
        description: "Innowacyjny zabieg kosmetyczny wykorzystujący precyzyjną technologię laserową w celu usunięcia niechcianych.",
        image: "/images/treatments-4.webp",
    },
    {
        id: 5,
        title: "Terapia światłem",
        description: "Rewolucyjny zabieg wykorzystujący delikatne kwasy, które złuszczają, nawilżają i odmładzają skórę.",
        image: "/images/treatments-5.avif",
    },
    {
        id: 6,
        title: "Spersonalizowany zabieg na twarz",
        description: "Znany zabieg kosmetyczny polegający na wykorzystaniu skoncentrowanej energii laserowej w celu oddziaływania na cebulki włosów.",
        image: "/images/treatments-6.avif",
    },
    {
        id: 7,
        title: "Hydrofacial",
        description: "Powszechna procedura estetyczna polegająca na wykorzystaniu skoncentrowanej energii laserowej w celu usunięcia cebulek włosów.",
        image: "/images/treatments-7.avif",
    },
    {
        id: 8,
        title: "Medifacial",
        description: "Popularna strategia kosmetyczna wykorzystująca technologię laserową w celu zniszczenia cebulek włosów.",
        image: "/images/treatments-8.avif",
    },

]

const Services = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-start justify-center gap-16 pt-32  px-4 lg:px-12 '>
      <div className='w-full grid grid-cols-1 sm:grid-cols-[1fr_3fr_1fr] gap-4 items-center'>
        <div
          className='flex justify-center rounded-2xl overflow-hidden py-2'
          style={{
            background: "#ff2056",
            backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(255,255,255,0.6) 2px, transparent 2px)
      `,
            backgroundSize: "20px 20px, 20px 20px, 20px 20px",
            backgroundPosition: "0 0, 0 0, 0 0",
          }}
        >
          <Image
            src='/images/services-1.webp'
            alt='Services'
            width={200}
            height={200}
            className='bg-gray-400 rounded-full'
          />
        </div>
        <div className='flex flex-col items-center gap-6'>
          <span className='text-center text-sm font-bold text-gray-500'>
            SKONTAKTUJ SIĘ Z NAMI
          </span>
          <h1 className='text-5xl font-bold text-center'>Nasze Usługi</h1>
          <p className='text-center text-xl'>
            Odkryj naszą kompleksową ofertę profesjonalnych zabiegów
            pielęgnacyjnych, <br /> opracowanych z myślą o wszystkich potrzebach
            Twojej skóry i spełnieniu Twoich celów.
          </p>
        </div>
        <div
          className='flex justify-center rounded-2xl overflow-hidden py-2'
          style={{
            background: "#ff2056",
            backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
            radial-gradient(circle, rgba(255,255,255,0.6) 2px, transparent 2px)
            `,
            backgroundSize: "20px 20px, 20px 20px, 20px 20px",
            backgroundPosition: "0 0, 0 0, 0 0",
          }}
        >
          <Image
            src='/images/services-2.webp'
            alt='Services'
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center'>
        {servicesData.map((service) => (
          <Card key={service.id} className="flex flex-col justify-between">
            <CardHeader>
              <div className='relative w-full h-64 overflow-hidden'>
              <Image
                src={service.image}
                alt='Services'
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover rounded-md hover:scale-110 transition-all duration-500'
              />
              </div>
            </CardHeader>
              <CardTitle className='text-center'>{service.title}</CardTitle>
            <CardContent>
              <CardDescription className='text-center'>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Services
