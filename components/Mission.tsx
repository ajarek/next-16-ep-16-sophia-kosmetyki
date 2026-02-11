import { Heart, ShieldCheck, Sparkles, Users } from "lucide-react"

const missionData = [
  {
    icon: <Heart className='w-8 h-8' />,
    title: "Opieka skoncentrowana na kliencie",
    description:
      "Każdy zabieg jest dostosowany do Twojego unikalnego typu skóry i osobistych celów.",
  },
  {
    icon: <ShieldCheck className='w-8 h-8' />,
    title: "Bezpieczeństwo przede wszystkim",
    description:
      "Stosujemy wyłącznie sprawdzone metody leczenia i zachowujemy najwyższe standardy bezpieczeństwa.",
  },
  {
    icon: <Sparkles className='w-8 h-8' />,
    title: "Doskonałość",
    description:
      "Nasz zespół nieustannie szkoli się w zakresie najnowszych technik i technologii.",
  },
  {
    icon: <Users className='w-8 h-8' />,
    title: "Wspólnota",
    description:
      "Budujemy trwałe relacje z naszymi klientami i wspieramy ich w pielęgnacji skóry.",
  },
]

const Mission = () => {
  return (
    <div className='col-span-1 sm:col-span-2 w-full py-16 flex flex-col items-center gap-12'>
      <div className='text-center max-w-3xl mx-auto space-y-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-primary'>
          Nasza misja i wartości
        </h2>
        <p className='text-muted-foreground text-center text-sm md:text-base leading-relaxed'>
          Kierujemy się podstawowymi zasadami, które gwarantują każdemu
          klientowi wyjątkową opiekę i doskonale rezultaty.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full'>
        {missionData.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center text-center gap-4 p-4'
          >
            <div className='p-4 rounded-full border border-border bg-card shadow-sm relative'>
              {item.icon}
            </div>
            <h3 className='text-xl font-bold'>{item.title}</h3>
            <p className='text-sm text-muted-foreground leading-relaxed'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mission
