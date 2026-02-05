import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
const AdvertisingPanel = () => {
  const data = [
    {
      id: 1,
      title: "Zwroty i wymiany",
      description: "Bezproblemowe zwroty w ciągu 15 dni",
      image: "/icon-5.svg",
    },
    {
      id: 2,
      title: "Zwroty i wymiany",
      description: "Bezproblemowe zwroty w ciągu 15 dni",
      image: "/icon-6.svg",
    },
    {
      id: 3,
      title: "Zwroty i wymiany",
      description: "Bezproblemowe zwroty w ciągu 15 dni",
      image: "/icon-2.svg",
    },
    {
      id: 4,
      title: "Zwroty i wymiany",
      description: "Bezproblemowe zwroty w ciągu 15 dni",
      image: "/icon-3.svg",
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
              <Image
                src={item.image}
                alt='Logo'
                width={50}
                height={50}
                className='rounded-full'
              />
              <div className='flex flex-col gap-2'>
                <CardTitle>Zwroty i wymiany</CardTitle>
                <CardDescription>
                  Bezproblemowe zwroty w ciągu 15 dni
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
