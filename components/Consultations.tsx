import Image from "next/image"
import { Button } from "./ui/button"

const Consultations = () => {
  return (
    <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_3fr] items-center place-items-center p-4 md:p-16 gap-4 md:gap-0 ">
      <div className="relative w-full bg-sky-300 md:rounded-l-lg md:rounded-r-none rounded-lg ">
        <Image src='/images/consultations.png' alt='Consultations' width={350} height={350} />
      </div>
      <div className="h-[350px] flex flex-col justify-center gap-4 p-8 bg-primary text-primary-foreground md:rounded-r-lg md:rounded-l-none rounded-lg ">
        <h2 className="text-3xl font-bold">Bezpłatne konsultacje</h2>
        <p className="text-lg">
          Odkryj idealny dla siebie plan leczenia dzięki bezpłatnej,
          spersonalizowanej konsultacji. Poprowadzimy Cię przez nasze
          spersonalizowane usługi, zaprojektowane z myślą o Twoich konkretnych
          celach, od drobnych zmian po obecność cyfrową. Poczuj wzrost pewności
          siebie i osiągnij pożądane rezultaty.
        </p>
        <Button variant="secondary" className="h-12 w-fit px-4">Zarezerwuj bezpłatną konsultacje</Button>
      </div>
    </div>
  )
}

export default Consultations
