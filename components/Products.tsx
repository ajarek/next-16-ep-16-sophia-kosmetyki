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

const Products = ({label, description}: {label: string, description: string}) => {
  return (
    <section className="w-full flex flex-col items-start justify-center py-4 px-4 lg:px-12 gap-4">
        <h1 className="text-3xl font-bold">{label}</h1>
        <p className="text-lg">{description}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.slice(0, 4).map((product) => (
            <Card key={product.id} className="flex flex-col justify-between">
                <CardHeader>
                      <div className="relative w-full h-64 overflow-hidden">
                        <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-auto object-cover hover:scale-110 transition-all duration-500"/>
                    </div>
                   
                </CardHeader>
                <CardContent>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                    <p className="text-lg">{product.price}</p>
                </CardContent>
                <CardFooter>
                    <Button className="cursor-pointer">Dodaj do koszyka</Button>
                </CardFooter>
            </Card>
        ))}
    </div>
    </section>
  )
}

export default Products