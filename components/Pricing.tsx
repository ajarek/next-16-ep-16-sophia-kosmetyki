import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check } from "lucide-react"
import SelectPackageButton from "./SelectPackageButton"

export default function Pricing() {
  return (
    <section className='w-full '>
      <div className='mx-auto px-6'>
        <div className='mx-auto max-w-2xl space-y-6 text-center'>
          <h1 className='text-center text-4xl font-semibold lg:text-5xl'>
            Pakiety zabiegowe
          </h1>
          <p>
            Elastyczne opcje cenowe dostosowane do Twoich celów pielęgnacyjnych
            i budżetu.
          </p>
        </div>

        <div className='mt-8 grid gap-6 md:mt-20 md:grid-cols-3'>
          <Card className='flex flex-col border-2 border-primary/50'>
            <CardHeader>
              <CardTitle className='font-medium'>Niezbędny</CardTitle>
              <span className='my-3 block text-2xl font-semibold'>
                499 PLN / na osobę
              </span>
              <CardDescription className='text-sm text-center'>
                Idealny do pielęgnacji skóry i podstawowych potrzeb dla osób,
                które po raz pierwszy sięgają po produkty niezbędne do jej
                pielęgnacji
              </CardDescription>
            </CardHeader>

            <CardContent className='space-y-4'>
              <hr className='border-dashed' />

              <ul className='list-outside space-y-3 text-sm'>
                {[
                  "Głęboko oczyszczający zabieg na twarz",
                  "Analiza skóry",
                  "Ekstrakcje podstawowe",
                  "Zabieg nawilżający",
                  "Aplikacja SPF",
                  "Po instrukcji pielęgnacji",
                ].map((item, index) => (
                  <li key={index} className='flex items-center gap-2'>
                    <Check className='size-3' />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className='mt-auto'>
              <SelectPackageButton selected={false} />
            </CardFooter>
          </Card>

          <Card className='relative flex flex-col border-2 border-primary'>
            <span className='bg-linear-to-br/increasing absolute inset-x-0 top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5'>
              Najpopularniejszy
            </span>

            <div className='flex flex-col '>
              <CardHeader>
                <CardTitle className='font-medium'>Profesjonalny</CardTitle>
                <span className='my-3 block text-2xl font-semibold'>
                  1199 PLN / na osobę
                </span>
                <CardDescription className='text-sm text-center'>
                  Kompleksowe leczenie zapewniające widoczną poprawę i
                  szczegółowość
                </CardDescription>
              </CardHeader>

              <CardContent className='space-y-4'>
                <hr className='border-dashed' />
                <ul className='list-outside space-y-3 text-sm'>
                  {[
                    "Wszystko zawarte w Niezbędny",
                    "Lekki peeling chemiczny",
                    "Terapia światłem LED",
                    "Zaawansowane ekstrakcje",
                    "Maska na zamówienie",
                    "Aplikacja serum",
                    "Zestaw próbek do zabrania do domu",
                    "Konsultacja kontrolna",
                    "Spersonalizowany program pielęgnacji skóry",
                  ].map((item, index) => (
                    <li key={index} className='flex items-center gap-2'>
                      <Check className='size-3' />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className='mt-12'>
                <SelectPackageButton selected={true} />
              </CardFooter>
            </div>
          </Card>

          <Card className='flex flex-col border-2 border-primary/50'>
            <CardHeader>
              <CardTitle className='font-medium'>Premium</CardTitle>
              <span className='my-3 block text-2xl font-semibold'>
                1999 PLN / na osobę
              </span>
              <CardDescription className='text-sm text-center'>
                Kompleksowy pakiet transformacji z zaawansowanymi zabiegami
              </CardDescription>
            </CardHeader>

            <CardContent className='space-y-4'>
              <hr className='border-dashed' />

              <ul className='list-outside space-y-3 text-sm'>
                {[
                  "Wszystko w wersji profesjonalnej",
                  "Leczenie mikronakłuwaniem",
                  "Terapia częstotliwością radiową",
                  "Intensywny peeling chemiczny",
                  "Infuzja tlenowa",
                  "Pakiet produktów premium",
                  "Zabieg dermaplaningu",
                  "Rezerwacja priorytetowa",
                  "Bezpłatna sesja poprawkowa",
                ].map((item, index) => (
                  <li key={index} className='flex items-center gap-2'>
                    <Check className='size-3' />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className='mt-auto'>
              <SelectPackageButton selected={false} />
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
