import Image from "next/image"
import Link from "next/link"
import { SheetNav } from "./SheetNav"
import { ShoppingCart } from "lucide-react"
import { ModeToggle } from "./ModeToggle"
import LengthCart from "./LengthCart"

const Navbar = () => {
  return (
    <nav className='w-full mx-auto fixed h-16 top-0 left-0 right-0 z-50 flex items-center justify-between lg:px-16 px-4 bg-primary/90 text-white backdrop-blur-sm'>
      <Link href='/' className='flex items-center gap-4'>
        <Image
          src='/images/logo.webp'
          alt='Logo'
          width={50}
          height={50}
          className='rounded-full'
        />
        <h1 className='text-2xl font-bold font-serif italic '>
          Sophia Kosmetyki
        </h1>
      </Link>
      <div className='w-1/2 flex items-center justify-between gap-4 text-xl italic font-semibold max-lg:hidden '>
        <Link href='/products' className='w-full'>
          Produkty
        </Link>
        <Link href='/services' className='w-full'>
          Usługi
        </Link>
        <Link href='/pricing' className='w-full'>
          Cennik
        </Link>
        <Link href='/about' className='w-full'>
          O nas
        </Link>
        <Link href='/contact' className='w-full'>
          Kontakt
        </Link>
        <Link
          href='/cart'
          className='relative flex items-center justify-center'
        >
          <ShoppingCart className=' w-6 h-6' />
          <span className='absolute bottom-3 left-4 w-6 h-6 border-2 border-primary rounded-full  flex items-center justify-center '>
            <LengthCart />
          </span>
        </Link>
        <ModeToggle />
      </div>
      <SheetNav />
    </nav>
  )
}

export default Navbar
