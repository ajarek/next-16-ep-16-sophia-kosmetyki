import HeaderTitle from '@/components/HeaderTitle'
import ServiceCategory from '@/components/ServiceCategory'
import Pricing from '@/components/Pricing'

const PricingPage = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-start justify-start gap-16 pt-32  px-4 lg:px-12 '>
      <HeaderTitle introduction='CO OFERUJEMY' title='Ceny i pakiety' text='Wybierz jeden z naszych starannie opracowanych pakietów zabiegów, dostosowanych do Twoich celów pielęgnacyjnych skóry i jednocześnie mieszczących się w Twoim budżecie na codzienne wydatki.' />
      <ServiceCategory />
      <Pricing />
    </div>
  )
}

export default PricingPage