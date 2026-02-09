import Calendar from '@/components/Calendar'
import Image from 'next/image'

const BookingDetails = () => {
  return (
     <div className='w-full min-h-screen flex flex-col items-start justify-start gap-16 pt-32  px-4 lg:px-12 '>
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
              <span className='text-center text-sm font-bold uppercase'>
               ⭐⭐⭐⭐⭐ Ponad 102 pięciogwiazdkowe oceny
              </span>
              <h1 className='text-5xl font-bold text-center'>
                Umów się na wizytę tutaj
              </h1>
              <p className='text-center text-xl'>
               Umów się na konsultację, aby uzyskać spersonalizowaną pielęgnację skóry, zaprojektowaną z myślą o osiągnięciu Twoich wyjątkowych celów.
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
          <Calendar />
        </div>
  )
}

export default BookingDetails