 import { BrickWallShield, ShieldCheck, Truck, Undo2 } from "lucide-react"
 export const data = [
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