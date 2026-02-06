"use client"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import TextType from "@/components/TextType"
import Link from "next/link"

const Header = () => {
  return (
    <div className='relative h-140 w-full overflow-hidden'>
      <Image
        src='/images/hero.avif'
        alt='Logo'
        fill
        loading='eager'
        className='object-cover'
      />
      <div className='absolute inset-0 bg-black opacity-25'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center gap-8 px-4 '>
        <div className="flex  items-center gap-4 ">
          <span>⭐⭐⭐⭐⭐</span>
          <span className="text-white uppercase">Ponad 102 pięciogwiazdkowe oceny</span>
        </div>
        <TextType
          text={["Zawsze wysokiej jakości przedmioty"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter='_'
          deletingSpeed={50}
          variableSpeedEnabled={false}
          variableSpeedMin={60}
          variableSpeedMax={120}
          cursorBlinkDuration={1}
          className='text-6xl text-center font-bold text-white'
        />
        <p className='text-center text-white text-xl'>
         Zabiegi pielęgnacyjne dostosowane do indywidualnych potrzeb, zapewniające najlepsze możliwe rezultaty.
        </p>
        <Link href='/products'>
          <Button className='h-16 px-8 text-xl cursor-pointer'>
            Poproś o bezpłatną konsultację
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Header
