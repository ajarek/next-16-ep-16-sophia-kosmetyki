"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    text: "Naprawdę dbają o swoich klientów i osiągają znakomite rezultaty. Jestem bardzo zadowolony z otrzymanej usługi. Nie mogę się doczekać kontynuacji.",
    author: "Krystyna Nowak",
    rating: 5,
  },
  {
    text: "Gorąco polecam wszystkim rozważającym zabiegi laserowe. Profesjonalny personel, nowoczesny sprzęt i spersonalizowana opieka naprawdę ich wyróżniają.",
    author: "Anna Kowalska",
    rating: 5,
  },
  {
    text: "Jestem pod wrażeniem profesjonalizmu i podejścia do klienta. Zabiegi są wykonywane na najwyższym poziomie, a efekty widać już po pierwszej wizycie.",
    author: "Jolanta Tomaszewska",
    rating: 5,
  },
]

const Testimonial = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center p-8'>
      <div className='flex justify-center  '>
        <Image
          src='/images/testimonial-1.webp'
          alt='Testimonial 1'
          width={280}
          height={280}
          className='rounded-xl w-full max-w-[280px] h-auto object-cover hover:scale-105 transition-all duration-500 shadow-lg'
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className='text-2xl font-bold mb-4'>
          Posłuchaj, co nasi zadowoleni klienci mają do powiedzenia na temat
          swoich doświadczeń.
        </h2>

        <p className='text-gray-600'>
          Przeczytaj szczere recenzje, które odzwierciedlają nasze zaangażowanie
          na rzecz zadowolenia klienta i opieki nad nim.
        </p>
        <div className="grid grid-cols-[1fr_18fr] ">
            <div className="pt-1">

          <Image src='/google-icon.svg' alt='Google' width={20} height={20} />
            </div>

          <div className='flex flex-col gap-1'>
            <span className="text-gray-600">Recenzje Google*</span>
            <span className="text-xl font-bold text-yellow-500">5.0 ★★★★★</span>
            <span className="text-gray-600">Na podstawie 104 opinii w serwisie Google.</span>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Carousel
          orientation='vertical'
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className='w-full max-w-xs relative'
        >
          <CarouselContent className='-mt-1 h-[270px]'>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className='pt-1 md:basis-1/2'>
                <div className='p-4 border rounded-lg bg-white shadow-sm h-full flex flex-col justify-between'>
                  <p className='italic text-sm text-gray-700 mb-2'>
                    „{testimonial.text}”
                  </p>
                  <div>
                    <div className='flex text-yellow-500 mb-1'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className='font-semibold text-right text-sm'>
                      - {testimonial.author}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='hidden md:flex absolute -top-4 left-1/2 -translate-x-1/2 rotate-90' />
          <CarouselNext className='hidden md:flex absolute -bottom-4 left-1/2 -translate-x-1/2 rotate-90' />
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonial
