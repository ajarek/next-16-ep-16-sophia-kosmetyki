import AdvertisingPanel from "@/components/AdvertisingPanel";
import Header from "@/components/Header";
import Products from "@/components/Products";
import Testimonial from "@/components/Testimonial";


export default function Home() {
return (
    <main className="min-h-screen flex flex-col items-center justify-center">
        < Header />
        <AdvertisingPanel />
        <Products label="Przeglądaj nasze najnowsze produkty" description="Uzupełnij swoją pielęgnację o słońce i pielęgnację ciała." />
       <Testimonial />
    </main>

)
}
