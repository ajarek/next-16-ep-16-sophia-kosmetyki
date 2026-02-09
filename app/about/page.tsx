import Image from "next/image"
import React from "react"
import Mission from "../../components/Mission"
import Experts from "@/components/Experts"

const About = () => {
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
          <span className='text-center text-sm font-bold text-gray-500'>
            O NAS
          </span>
          <h1 className='text-5xl font-bold text-center'>
            Twój zaufany partner
          </h1>
          <p className='text-center text-xl'>
            Pomagamy Ci osiągnąć zdrową, promienną skórę dzięki
            spersonalizowanym zabiegom i profesjonalnej opiece. Naszą misją jest
            podkreślenie Twojego naturalnego piękna, jednocześnie stawiając na
            pierwszym miejscu Twój komfort i bezpieczeństwo.
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
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8 items-center'>
        <div className='flex flex-col items-center gap-6'>
          <h1 className='text-5xl font-bold text-center'>Nasza historia</h1>
          <p className='text-center text-xl'>
            Sophie powstała w 2008 roku z prostą misją: oferować przystępne,
            profesjonalne zabiegi pielęgnacyjne, które przynoszą realne
            rezultaty. To, co zaczęło się jako mała klinika, przekształciło się
            w zaufane miejsce oferujące kompleksowe rozwiązania w zakresie
            pielęgnacji skóry. Nasza założycielka, Dr. Anna Kowalska, dostrzegła
            potrzebę spersonalizowanych zabiegów pielęgnacyjnych, które
            odpowiadają na indywidualne problemy skóry, a nie oferują...
            Wierzymy, że zdrowa skóra jest podstawą pewności siebie i staramy
            się pomóc każdemu klientowi osiągnąć jego indywidualne cele
            dotyczące pielęgnacji skóry, stosując bezpieczne, skuteczne i
            innowacyjne zabiegi.
          </p>
        </div>
        <div className='flex justify-center rounded-2xl overflow-hidden py-2'>
          <Image
            src='/images/aboutLogo.webp'
            alt='Services'
            width={600}
            height={600}
            className='bg-gray-400 rounded-xl'
          />
        </div>

        <Mission />
      </div>
        <Experts />
    </div>
  )
}

export default About
