"use client"
import React from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { toast } from 'sonner'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Bus, SquareParking } from 'lucide-react'
const FormMessage = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success   ('Wiadomość wysłana pomyślnie')
    e.currentTarget.reset()
  }
  return (
    <div className='w-full flex flex-col items-start justify-start gap-4'>
        <h1 className='text-2xl font-bold'>Wyślij wiadomość</h1>
        <form onSubmit={handleFormSubmit} className='w-full flex flex-col items-start justify-start gap-4'>
            <Input type="text" placeholder='Imię i nazwisko' className='w-full h-14 flex flex-col items-center justify-center gap-4' required />
            <Input type="email" placeholder='E-mail' className='w-full h-14 flex flex-col items-center justify-center gap-4' required />
            <Input type="tel" placeholder='Telefon' className='w-full h-14 flex flex-col items-center justify-center gap-4' required />
            <Textarea placeholder='Wiadomość' className='w-full h-14 flex flex-col items-center justify-center gap-4' required />
            <Button type='submit' className='w-full h-14 flex flex-col items-center justify-center gap-4'>Wyślij</Button>
        </form>
        <div className='w-full flex flex-col items-start justify-start gap-2 mt-12 '>
            <h2 className='text-2xl font-bold'>Inne ważne informacje</h2>
            <p className='text-base font-bold'>Znajdź najważniejsze informacje dotyczące parkowania, opcji transportu i wszystkiego, co powinni wiedzieć nowi pacjenci.</p>
             <Accordion
      type="single"
      collapsible
      defaultValue="parking"
      className="w-full"
    >
      <AccordionItem value="parking">
        <AccordionTrigger className='flex items-center gap-4'>
            <SquareParking className='w-12 h-12'/>
          <div className='flex flex-col items-start justify-start gap-2'>
            <p className='text-xl font-bold'>Parking</p>
            <p className=''>Szczegóły dotyczące parkingu: wszystko, co musisz wiedzieć</p>
          </div>
          </AccordionTrigger>
        <AccordionContent className='h-24'>
          Oferujemy wygodne opcje parkowania, aby wizyta przebiegła bezstresowo. Nasza klinika zapewnia bezpłatny parking na parkingu bezpośrednio przylegającym do budynku, do którego można dojechać głównym wejściem od strony Maple Street. Do dyspozycji jest około 25 miejsc parkingowych, w tym dwa wyznaczone miejsca parkingowe dla osób niepełnosprawnych w pobliżu wejścia.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger className='flex items-center gap-4'>
            <Bus className='w-12 h-12'/>
          <div className='flex flex-col items-start justify-start gap-2'>
            <p className='text-xl font-bold'>Transport publiczny</p>
            <p className=''>Informacje o transporcie publicznym: niezbędne informacje, które powinieneś znać</p>
          </div>
          </AccordionTrigger>
        <AccordionContent className='h-24'>
         Nasza klinika jest łatwo dostępna dzięki dogodnym opcjom transportu publicznego. Znajdujemy się w pobliżu przystanków autobusowych linii 12, 15 i 22, które kursują co 15 minut w godzinach szczytu. Najbliższy przystanek znajduje się zaledwie 5 minut spacerem od naszej kliniki. Dodatkowo, stacja metra Green Line jest oddalona o 10 minut spacerem, co zapewnia łatwy dostęp z innych części miasta.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger className='flex items-center gap-4'>
            <SquareParking className='w-12 h-12'/>
          <div className='flex flex-col items-start justify-start gap-2'>
            <p className='text-xl font-bold'>Informacje dla nowych klientów</p>
            <p className=''>Udzielamy odpowiedzi na najczęściej zadawane pytania</p>
          </div>
          </AccordionTrigger>
        <AccordionContent className='h-24'>
          Nasi pracownicy są gotowi odpowiedzieć na wszystkie Twoje pytania i pomóc Ci w każdej sytuacji. Skontaktuj się z nami telefonicznie, mailowo lub osobiście - jesteśmy tu dla Ciebie!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>
    </div>
  )
}

export default FormMessage