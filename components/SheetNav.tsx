import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, ShoppingCart } from "lucide-react"
import Link from "next/link"

export function SheetNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className='lg:hidden'>
        <Button
          variant='outline'
          className='text-xl cursor-pointer bg-transparent border-none'
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className=' lg:hidden opacity-75'>
        <SheetHeader>
          <SheetTitle>Menu Nawigacyjne</SheetTitle>
        </SheetHeader>
        <div className='flex flex-col items-start gap-4 text-xl italic font-semibold px-2'>
          <Link
            href='/products'
            className='hover:underline hover:text-primary transition-all duration-300'
          >
            Produkty
          </Link>
          <Link
            href='/services'
            className='hover:underline hover:text-primary transition-all duration-300'
          >
            Usługi
          </Link>
          <Link
            href='/about'
            className='hover:underline hover:text-primary transition-all duration-300'
          >
            O nas
          </Link>
          <Link
            href='/contact'
            className='hover:underline hover:text-primary transition-all duration-300'
          >
            Kontakt
          </Link>
          <Link href='/cart' className='relative flex items-center gap-2'>
            <ShoppingCart className=' w-6 h-6' />{" "}
            <span className='absolute bottom-3 left-4 w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center '>
             0
            </span>
          </Link>
          
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant='outline' className='text-xl cursor-pointer'>
              Zamknij
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
