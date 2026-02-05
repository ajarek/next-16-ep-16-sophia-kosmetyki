import products from "@/data/products.json";
import Image from "next/image";

const Products = ({label, description}: {label: string, description: string}) => {
  return (
    <section className="w-full flex flex-col items-start justify-center py-4 px-4 lg:px-12 gap-4">
        <h1 className="text-3xl font-bold">{label}</h1>
        <p className="text-lg">{description}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.slice(0, 4).map((product) => (
            <div key={product.id} className="border-2 shadow-2xl p-4 rounded-lg ">
                <div className="relative w-full h-64 overflow-hidden">
                    <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-auto object-cover hover:scale-110 transition-all duration-500"/>
                </div>
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-lg">{product.price}</p>
                <p className="text-lg">{product.description}</p>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-all duration-300">Dodaj do koszyka</button>
            </div>
        ))}
    </div>
    </section>
  )
}

export default Products