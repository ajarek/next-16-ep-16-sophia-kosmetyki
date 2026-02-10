import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BrickWallShield, ShieldCheck, Truck, Undo2 } from "lucide-react"

const AdvertisingPanel = () => {
  const data = [
    {
      id: 1,
      title: "Zwroty i wymiany",
      description: "Bezproblemowe zwroty w ciągu 15 dni",
      image: <Undo2 className='w-12 h-12' />,
    },
    {
      id: 2,
      title: "Darmowa szybka wysyłka",
      description: "Dla zamówień powyżej 500 zł",
      image: <Truck className='w-12 h-12' />,
    },
    {
      id: 3,
      title: "Produkty wysokiej jakości",
      description: "Marki kosmetyków premium",
      image: <ShieldCheck className='w-12 h-12' />,
    },
    {
      id: 4,
      title: "Bezpieczne płatności",
      description: "Zaufane platformy płatnicze",
      image: <BrickWallShield className='w-12 h-12' />,
    },
  ]
  return (
    <div className='w-full '>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#ff2056] p-4'>
        {data.map((item) => (
          <Card
            key={item.id}
            className={` h-24 flex items-center  gap-4 py-4 `}
          >
            <CardHeader className='w-full flex items-center justify-start   gap-4'>
              {item.image}
              <div className='flex flex-col gap-2'>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>
                  {item.description}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className='min-h-24 w-full relative '>
        {/* Dark Grid with White Dots Background */}
        <div
          className='absolute inset-0 z-0'
          style={{
            background: "#ff2056",
            backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(255,255,255,0.6) 2px, transparent 2px)
      `,
            backgroundSize: "20px 20px, 20px 20px, 20px 20px",
            backgroundPosition: "0 0, 0 0, 0 0",
          }}
        />
        {/* Your Content/Components */}
      </div>
    </div>
  )
}

export default AdvertisingPanel
