import Link from "next/link"
import {
  Clock,
  HelpCircle,
  Megaphone,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  type LucideIcon,
} from "lucide-react"

// TikTok icon component (since it might not be in the installed Lucide version or to ensure consistent style)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox='0 0 24 24'
    fill='currentColor'
    className={className}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z' />
  </svg>
)

interface SocialButtonProps {
  icon: LucideIcon | React.ComponentType<{ className?: string }>
  label: string
  href: string
}

const SocialButton = ({ icon: Icon, label, href }: SocialButtonProps) => (
  <Link
    href={href}
    className='inline-flex items-center gap-2  px-5 py-2.5 rounded-full text-sm font-medium transition-colors  hover:text-black'
  >
    <Icon className='w-4 h-4' />
    <span>{label}</span>
  </Link>
)

const ContactInfo = () => {
  const workingHours = [
    { day: "Poniedziałek", hours: "9:00 - 19:00" },
    { day: "Wtorek", hours: "9:00 - 19:00" },
    { day: "Środa", hours: "9:00 - 19:00" },
    { day: "Czwartek", hours: "9:00 - 19:00" },
    { day: "Piątek", hours: "9:00 - 19:00" },
    { day: "Sobota", hours: "9:00 - 17:00" },
    { day: "Niedziela", hours: "Zamknięte" },
  ]

  return (
    <div className='p-6 lg:p-12 space-y-12 lg:space-y-16 rounded-2xl'>
      {/* Sekcja 1: Godziny pracy */}
      <section>
        <div className='flex items-start gap-4 mb-6'>
          <Clock className='w-7 h-7 mt-1 ' strokeWidth={1.5} />
          <h2 className='text-3xl font-serif font-bold '>Godziny pracy</h2>
        </div>

        <div className='space-y-4 pl-0 md:pl-11'>
          {workingHours.map((item) => (
            <div
              key={item.day}
              className='flex justify-between items-center max-w-sm '
            >
              <span className='font-medium'>{item.day}</span>
              <span>{item.hours}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sekcja 2: FAQ */}
      <section>
        <div className='flex items-start gap-4 mb-4'>
          <HelpCircle className='w-7 h-7 mt-1 ' strokeWidth={1.5} />
          <h2 className='text-3xl font-serif font-bold '>
            Często zadawane pytania
          </h2>
        </div>
        <div className='pl-0 md:pl-11 max-w-md'>
          <p className='mb-6  leading-relaxed'>
            Zapoznaj się z odpowiedziami na najczęściej zadawane pytania, które
            regularnie otrzymujemy.
          </p>
          <Link
            href='/'
            className='inline-flex items-center text-[#C88D6F] hover:text-[#A67C52] font-medium border-b border-[#C88D6F] hover:border-[#A67C52] pb-0.5 transition-colors group'
          >
            Zobacz FAQ
            <ArrowRight className='ml-2 w-4 h-4 transition-transform group-hover:translate-x-1' />
          </Link>
        </div>
      </section>

      {/* Sekcja 3: Obserwuj nas */}
      <section>
        <div className='flex items-start gap-4 mb-4'>
          <Megaphone className='w-7 h-7 mt-1 ' strokeWidth={1.5} />
          <h2 className='text-3xl font-serif font-bold '>Obserwuj nas</h2>
        </div>
        <div className='pl-0 md:pl-11 max-w-md'>
          <p className='mb-8  leading-relaxed'>
            Bądź na bieżąco, aby otrzymywać porady dotyczące pielęgnacji skóry i
            oferty specjalne
          </p>
          <div className='flex flex-wrap gap-3'>
            <SocialButton icon={Facebook} label='Facebook' href='#' />
            <SocialButton icon={Twitter} label='Świergot' href='#' />
            <SocialButton icon={Instagram} label='Instagram' href='#' />
            <SocialButton icon={TikTokIcon} label='TikTok' href='#' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactInfo
