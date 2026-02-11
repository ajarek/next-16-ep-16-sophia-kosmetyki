import Image from "next/image"
import Mission from "../../components/Mission"
import Experts from "@/components/Experts"
import HeaderTitle from "@/components/HeaderTitle"

const About = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-start justify-start gap-16 pt-32  px-4 lg:px-12 '>
      <HeaderTitle
        introduction='O NAS'
        title='Twój zaufany partner'
        text='Pomagamy Ci osiągnąć zdrową, promienną skórę dzięki spersonalizowanym zabiegom i profesjonalnej opiece. Naszą misją jest podkreślenie Twojego naturalnego piękna, jednocześnie stawiając na pierwszym miejscu Twój komfort i bezpieczeństwo.'
      />
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
