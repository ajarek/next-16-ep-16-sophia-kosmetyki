"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, CreditCard, Wallet } from "lucide-react"
import Link from "next/link"
import { useCartStore } from "@/store/cartStore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { motion } from "framer-motion"

export default function PaymentPage() {
  const router = useRouter()
  const { total, removeAllFromCart } = useCartStore()
  const [paymentMethod, setPaymentMethod] = useState<"card" | "wallet">("card")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (total() === 0) {
      router.push("/products")
    }
  }, [router, total])

  const handlePayment = () => {
    setIsLoading(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      removeAllFromCart()
      toast.success("Płatność zakończona pomyślnie.")
      router.push("/")
    }, 2000)
  }

  return (
    <div className='w-full  flex flex-col items-center justify-start font-sans px-4 lg:px-16 pt-16'>
      <div className='w-full h-24 flex items-center justify-between gap-5  px-4 '>
        <Link href='/cart'>
          <ChevronLeft size={30} />
        </Link>
        <h1 className='text-xl font-bold'>Płatność</h1>

        <div className='w-[30px]' />
      </div>

      <div className='w-full flex-1 overflow-y-auto p-6 flex flex-col gap-6'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className='w-full h-48 rounded-2xl bg-linear-to-br from-primary to-primary/80 p-6 text-primary-foreground shadow-xl relative overflow-hidden'
        >
          <div className='absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl'></div>
          <div className='absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-2xl'></div>

          <div className='flex flex-col justify-between h-full relative z-10'>
            <div className='flex justify-between items-start'>
              <CreditCard className='w-8 h-8 opacity-80' />
              <span className='font-bold text-lg italic tracking-wider'>
                VISA
              </span>
            </div>
            <div className='space-y-4'>
              <div className='flex gap-4 text-xl tracking-widest font-mono select-none'>
                <span>••••</span>
                <span>••••</span>
                <span>••••</span>
                <span>4242</span>
              </div>
              <div className='flex justify-between text-xs uppercase opacity-80'>
                <div className='flex flex-col'>
                  <span>Card Holder</span>
                  <span className='font-semibold text-sm normal-case'>
                    Jan Kowalski
                  </span>
                </div>
                <div className='flex flex-col items-end'>
                  <span>Expires</span>
                  <span className='font-semibold text-sm'>12/28</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className='bg-primary p-2 rounded-xl flex items-center justify-between shadow-sm '>
          <button
            onClick={() => setPaymentMethod("card")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-l-lg text-sm font-semibold transition-all border-r border-primary-foreground ${
              paymentMethod === "card"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-gray-600"
            }`}
          >
            <CreditCard size={18} />
            Karta
          </button>
          <button
            onClick={() => setPaymentMethod("wallet")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-all ${
              paymentMethod === "wallet"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-gray-600"
            }`}
          >
            <Wallet size={18} />
            Portfel
          </button>
        </div>

        <div className='space-y-4'>
          <h3 className='text-lg font-bold '>Szczegóły płatności</h3>
          <div className='space-y-3'>
            <Input
              placeholder='Numer karty'
              className=' border-gray-200 h-12 rounded-xl focus:border-primary focus:ring-primary/20 transition-all font-mono'
              defaultValue={"4242 4242 4242 4242"}
            />
            <div className='flex gap-3'>
              <Input
                placeholder='MM/YY'
                className=' border-gray-200 h-12 rounded-xl focus:border-primary focus:ring-primary/20 transition-all font-mono'
                defaultValue={"12/28"}
              />
              <Input
                placeholder='CVC'
                type='password'
                className=' border-gray-200 h-12 rounded-xl focus:border-primary focus:ring-primary/20 transition-all font-mono'
                defaultValue={"123"}
              />
            </div>
          </div>
        </div>

        <div className='mt-auto pt-6 border-t border-dashed border-gray-200'>
          <div className='flex justify-between items-center mb-6'>
            <span className='text-gray-500 font-medium'>Suma</span>
            <span className='text-2xl font-bold ' suppressHydrationWarning>
              ${total().toFixed(2)}
            </span>
          </div>

          <Button
            className='w-full h-14 text-lg font-bold rounded-2xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-[0.98]'
            size='lg'
            onClick={handlePayment}
            disabled={isLoading}
          >
            {isLoading ? "Płatność w toku..." : "Zapłać teraz"}
          </Button>
        </div>
      </div>
    </div>
  )
}
