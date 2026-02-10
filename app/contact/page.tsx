import AdvertisingPanel from "@/components/AdvertisingPanel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { BotMessageSquare, Mail, Phone, MapPin } from "lucide-react"
import FormMessage from "@/components/FormMessage"
import ContactInfo from "@/components/ContactInfo"
import HeaderTitle from "@/components/HeaderTitle"
const data = [
  {
    id: 1,
    image: <Phone className="w-12 h-12" />,
    title: "Telefon",
    description: "Zadzwoń do nas, aby uzyskać natychmiastową pomoc lub umówić się na wizytę",
    phone: "+48 123 456 789",
    hours: "Poniedziałek - Piątek: 9:00 - 18:00",
  },
  {
    id: 2,
    image: <Mail className="w-12 h-12" />,
    title: "E-mail",
    description: "Wyślij nam wiadomość, a odpowiemy w ciągu 24 godzin",
    phone: "sophia@kosmetyki.pl",
    hours: "rezerwacja@sophiatheme.com",
  },
  {
    id: 3,
    image: <BotMessageSquare className="w-12 h-12" />,
    title: "Czat na żywo",
    description: "Porozmawiaj z naszym zespołem obsługi klienta w czasie rzeczywistym",
    phone: "Dostępne od poniedziałku do piątku",
    hours: "Poniedziałek - Piątek: 9:00 - 18:00",
  },
  {
    id: 4,
    image: <MapPin className="w-12 h-12" />,
    title: "Lokalizacja",
    description: "Odwiedź nas w sercu dzielnicy wellness",
    phone: "78-100 Kołobrzeg, ",
    hours: "ul. Długa 12",
  },
]

const Contact = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-start justify-start pt-32  px-4 lg:px-12 '>
      <HeaderTitle introduction='SKONTAKTUJ SIĘ Z NAMI' title='Skontaktuj się z nami' text='Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania, pomóc Ci umówić się na wizytę i wspierać Cię na każdym etapie pielęgnacji skóry.' />
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#ff2056] p-4 mt-16'>
        {data.map((item) => (
          <Card
            key={item.id}
            className={` flex flex-col items-center  gap-4 py-4 `}
          >
            <CardHeader className='w-full flex flex-col items-center justify-start   gap-4'>
             {item.image}
              <div className='flex flex-col items-center gap-2'>
                <CardTitle className='text-2xl font-bold'>{item.title}</CardTitle>
                <CardDescription className='text-xl text-center'>
                  {item.description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className='flex flex-col items-center gap-2'>
              <p className='text-xl'>{item.phone}</p>
              <p className='text-xl text-center'>{item.hours}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className='min-h-24 w-full relative '>
        {/* Dark Grid with White Dots Background */}
        <div
          className='absolute inset-0 z-0'
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
        />
       
      </div>
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-8">
        <FormMessage />
        <ContactInfo />
      </div>
    </div>
  )
}

export default Contact
