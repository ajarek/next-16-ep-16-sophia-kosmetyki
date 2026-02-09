
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'

const expertsData = [
    {
        image: "/images/expert-1.jpg",
        name: "Dr. Jan Michalski",
        description: "Założycielka i główny kosmetolog",
    },
    {
        image: "/images/expert-2.jpg",
        name: "Dr. Anna Kowalska",
        description: "Założycielka i główny kosmetolog",
    },
    {
        image: "/images/expert-3.jpg",
        name: "Dr. Katarzyna Nowak",
        description: "Starszy kosmetolog",
    },
    {
        image: "/images/expert-4.jpg",
        name: "Dr. Ewa Wiśniewska",
        description: "Specjalista ds. pielęgnacji skóry",
    },
]

const Experts = () => {
  return (
    <div className='w-full flex flex-col items-center gap-8'>
        <h1 className='text-5xl font-bold text-center'>Poznaj naszych ekspertów</h1>
        <p className='text-center text-xl'>Nasi certyfikowani specjaliści łączą w sobie wieloletnie doświadczenie i pasję do doskonałej pielęgnacji skóry.
</p>
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center '>
        {expertsData.map((expert, index) => (
            <Card key={index} className='bg-primary/20'>
                <CardHeader>
                    <div className='relative overflow-hidden rounded-xl'>
                        <Image src={expert.image} alt="Experts" width={420} height={572} className='w-full h-auto rounded-xl hover:scale-105 transition-all duration-300' />
                    </div>
                </CardHeader>
                <CardContent>
                    <CardTitle>{expert.name}</CardTitle>
                    <CardDescription>{expert.description}</CardDescription>
                </CardContent>
            </Card>
        ))}
    </div>
    </div>
  )
}

export default Experts