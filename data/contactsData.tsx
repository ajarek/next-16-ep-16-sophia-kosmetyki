import { BotMessageSquare, Mail, Phone, MapPin } from "lucide-react"

export const data = [
  {
    id: 1,
    image: <Phone className='w-12 h-12' />,
    title: "Telefon",
    description:
      "Zadzwoń do nas, aby uzyskać natychmiastową pomoc lub umówić się na wizytę",
    phone: "+48 123 456 789",
    hours: "Poniedziałek - Piątek: 9:00 - 18:00",
  },
  {
    id: 2,
    image: <Mail className='w-12 h-12' />,
    title: "E-mail",
    description: "Wyślij nam wiadomość, a odpowiemy w ciągu 24 godzin",
    phone: "sophia@kosmetyki.pl",
    hours: "rezerwacja@sophiatheme.com",
  },
  {
    id: 3,
    image: <BotMessageSquare className='w-12 h-12' />,
    title: "Czat na żywo",
    description:
      "Porozmawiaj z naszym zespołem obsługi klienta w czasie rzeczywistym",
    phone: "Dostępne od poniedziałku do piątku",
    hours: "Poniedziałek - Piątek: 9:00 - 18:00",
  },
  {
    id: 4,
    image: <MapPin className='w-12 h-12' />,
    title: "Lokalizacja",
    description: "Odwiedź nas w sercu dzielnicy wellness",
    phone: "78-100 Kołobrzeg, ",
    hours: "ul. Długa 12",
  },
]