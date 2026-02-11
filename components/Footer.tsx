import Link from "next/link"
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react"

const SocialIcon = ({
  href,
  icon: Icon,
}: {
  href: string
  icon: LucideIcon
}) => (
  <Link
    href={href}
    className='bg-white p-2 rounded-full text-black hover:bg-primary hover:text-white transition-colors duration-300'
  >
    <Icon size={20} />
  </Link>
)

const Footer = () => {
  return (
    <footer className='bg-background text-primary py-16 px-4 md:px-16'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        <div className='space-y-6'>
          <h3 className='text-lg font-bold font-serif uppercase tracking-wider text-primary'>
            Szybkie Linki
          </h3>
          <ul className='space-y-3'>
            {[
              { label: "Dom", href: "/" },
              { label: "O Nas", href: "/about" },
              { label: "Galeria", href: "/gallery" },
              { label: "Wycena", href: "/pricing" },
              { label: "Sklep", href: "/products" },
              { label: "Blog", href: "/blog" },
              { label: "Kontakt", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className='hover:text-primary transition-colors duration-300'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='space-y-6'>
          <h3 className='text-lg font-bold font-serif uppercase tracking-wider text-primary'>
            Usługi Profesjonalne
          </h3>
          <ul className='space-y-3'>
            {[
              "Analiza Biznesowa",
              "Planowanie Strategiczne",
              "Doradztwo Procesowe",
              "Ocena Wyników",
              "Strategia Wzrostu",
              "Badania Rynku",
              "Rozwiązania Cyfrowe",
              "Wdrażanie Wyników",
            ].map((item) => (
              <li key={item}>
                <Link
                  href='#'
                  className='hover:text-primary transition-colors duration-300'
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='space-y-6'>
          <h3 className='text-lg font-bold font-serif uppercase tracking-wider text-primary'>
            Rozwiązania Biznesowe
          </h3>
          <ul className='space-y-3'>
            {[
              "Strategia Wzrostu",
              "Optymalizacja Procesów",
              "Ekspansja Rynku",
              "Planowanie Strategiczne",
              "Transformacja Cyfrowa",
              "Rozwój Zespołu",
              "Poprawa Wydajności",
              "Wzrost Przychodów",
            ].map((item) => (
              <li key={item}>
                <Link
                  href='#'
                  className='hover:text-primary transition-colors duration-300'
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='space-y-6'>
          <h3 className='text-lg font-bold font-serif uppercase tracking-wider text-primary'>
            Pozostań w Kontakcie
          </h3>

          <div className='flex gap-4 mb-6'>
            <SocialIcon href='#' icon={Facebook} />
            <SocialIcon href='#' icon={Instagram} />
          </div>

          <div className='space-y-4'>
            <div className='flex items-start gap-3'>
              <MapPin className='w-5 h-5 text-[#C88D6F] mt-1 shrink-0' />
              <p className='leading-relaxed'>
                Poziom 1, Apartament 11,
                <br />
                The Street Suburb,
                <br />
                Nowa Południowa Walia, Australia
              </p>
            </div>

            <div className='flex items-center gap-3'>
              <Phone className='w-5 h-5 text-[#C88D6F] shrink-0' />
              <p>02 1234 4456</p>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto mt-16 pt-8 border-t border-[#3E2D23] text-center text-sm opacity-60'>
        <p>
          &copy; {new Date().getFullYear()} Sophia Kosmetyki. Wszelkie prawa
          zastrzeżone.
        </p>
      </div>
    </footer>
  )
}

export default Footer
