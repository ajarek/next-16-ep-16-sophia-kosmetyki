"use client"
import { useCartStore } from "@/store/cartStore";
import products from "@/data/products.json";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Products = ({label, description, number=4}: {label: string, description: string, number?: number}) => {

const router = useRouter()
const { addItemToCart, items } = useCartStore()
 const [quantities, setQuantities] = useState<{ [key: number]: number }>({})
  const getQuantity = (id: number) => quantities[id] || 1
    const handleIncrement = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: getQuantity(id) + 1,
    }))
  }

  const handleDecrement = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(getQuantity(id) - 1, 1),
    }))
  }

  return (
    <section className="w-full flex flex-col items-start justify-center p-4 lg:px-12 gap-4">
        <h1 className="text-3xl font-bold">{label}</h1>
        <p className="text-lg">{description}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.slice(0, number)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((product) => (
            <Card key={product.id} className="flex flex-col justify-between">
                <CardHeader>
                      <div className="relative w-full h-64 overflow-hidden">
                        <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-auto object-cover rounded-md hover:scale-110 transition-all duration-500"/>
                    </div>
                   
                </CardHeader>
                <CardContent>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                    <div className="flex items-center justify-between">
                    <p className="text-lg">{(product.price * getQuantity(product.id)).toFixed(2)} zł</p>
                    <div className="flex items-center gap-2">
                        <Button onClick={() => handleDecrement(product.id)} className="w-8 h-8 cursor-pointer"><Minus/></Button>
                        <span className="text-lg">{getQuantity(product.id)}</span>
                        <Button onClick={() => handleIncrement(product.id)} className="w-8 h-8 cursor-pointer"><Plus/></Button>
                    </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={() =>{ 
                       if (items.some((i) => i.id === product.id)) {
                      toast("Produkt jest już w koszyku")
                      router.push("/cart")
                      return
                    }
                      addItemToCart({...product, quantity: getQuantity(product.id)})
                      toast("Produkt dodany do koszyka")
                      } }className="cursor-pointer">Dodaj do koszyka</Button>
                </CardFooter>
            </Card>
        ))}
    </div>
    </section>
  )
}

export default Products