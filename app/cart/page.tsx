"use client"

import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cartStore"
import Image from "next/image"
import Link from "next/link"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Minus, Plus, Trash } from "lucide-react"

const Cart = () => {
  const { items, total, increment, decrement, removeItemFromCart } =
    useCartStore()
  return (
    <div className='w-full min-h-screen flex flex-col items-start justify-start mt-16  px-4 lg:px-16'>
      <div className='flex justify-between items-center py-10'>
        <h1 className='text-4xl font-bold'>Koszyk({items.length})</h1>
      </div>
      {items.length === 0 ? (
        <div className='w-full flex flex-col justify-center items-center'>
          <p className='text-2xl text-red-500 font-bold'>
            Twój koszyk jest pusty
          </p>
          <Button asChild className='mt-4'>
            <Link href='/products'>Przejdź do produktów</Link>
          </Button>
        </div>
      ) : (
        <div className='w-full flex flex-col gap-4 '>
          <Table>
            <TableCaption className='w-full text-right text-2xl font-bold pr-4'>
              <div className='w-full flex flex-wrap justify-between items-center gap-4'>
                Suma: {total().toFixed(2)} PLN
                <Button asChild>
                  <Link href='/payment'>Przejdź do płatności</Link>
                </Button>
              </div>
            </TableCaption>
            <TableHeader>
              <TableRow className='border-b-2 border-gray-700'>
                <TableHead>Produkt</TableHead>
                <TableHead>Cena</TableHead>
                <TableHead>Ilość</TableHead>
                <TableHead>Suma</TableHead>
                <TableHead>Usuń</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id} className='border-b border-gray-400'>
                  <TableCell>
                    <div className='max-w-[500px] flex flex-wrap items-center gap-5'>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className='rounded-lg'
                      />
                      <div className='text-wrap'>
                        <p className='font-bold text-wrap'>{item.name}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    {" "}
                    <div className='flex flex-col items-center justify-center'>
                      <Button
                        variant='outline'
                        className='w-8 h-8 flex items-center justify-center rounded-lg border-2 border-primary cursor-pointer'
                        onClick={() => decrement(item.id)}
                      >
                        <Minus />
                      </Button>
                      <span className='w-6 h-8 flex items-center justify-center font-semibold cursor-pointer'>
                        {item.quantity}
                      </span>
                      <Button
                        variant='outline'
                        className='w-8 h-8 flex items-center justify-center rounded-lg border-2 border-primary cursor-pointer'
                        onClick={() => increment(item.id)}
                      >
                        <Plus />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    {(item.price * (item.quantity ?? 1)).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant='outline'
                      className='w-8 h-8 flex items-center justify-center rounded-lg border-2 border-red-500 cursor-pointer'
                      onClick={() => removeItemFromCart(item.id)}
                    >
                      <Trash />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}

export default Cart
