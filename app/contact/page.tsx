import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import FormMessage from "@/components/FormMessage"
import ContactInfo from "@/components/ContactInfo"
import HeaderTitle from "@/components/HeaderTitle"
import { data } from "@/data/contactsData"

const Contact = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-start justify-start pt-32  px-4 lg:px-12 '>
      <HeaderTitle
        introduction='SKONTAKTUJ SIĘ Z NAMI'
        title='Skontaktuj się z nami'
        text='Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania, pomóc Ci umówić się na wizytę i wspierać Cię na każdym etapie pielęgnacji skóry.'
      />
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#ff2056] p-4 mt-16'>
        {data.map((item) => (
          <Card
            key={item.id}
            className={` flex flex-col items-center  gap-4 py-4 `}
          >
            <CardHeader className='w-full flex flex-col items-center justify-start   gap-4'>
              {item.image}
              <div className='flex flex-col items-center gap-2'>
                <CardTitle className='text-2xl font-bold'>
                  {item.title}
                </CardTitle>
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
      <div className='w-full  grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-8'>
        <FormMessage />
        <ContactInfo />
      </div>
    </div>
  )
}

export default Contact
