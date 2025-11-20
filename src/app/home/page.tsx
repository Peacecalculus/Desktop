import CTA from "@/components/home/sections/CTA"
import EverythingYouNeedToKnow from "@/components/home/sections/EverythingYouNeedToKnow"
import FAQ from "@/components/home/sections/FAQ"
import GetStarted from "@/components/home/sections/GetStarted"
import HomeHero from "@/components/home/sections/HomeHero"
import KeyMetrics from "@/components/home/sections/KeyMetrics"
import Testimonials from "@/components/home/sections/Testimonials"
import WhyStockKeeper from "@/components/home/sections/WhyStockKeeper"


const page = () => {
  return (
    
    <div>
      <p className="text-gray-500 text-sm">Loading...</p>
        <HomeHero />
        <KeyMetrics />
        <EverythingYouNeedToKnow />
        <GetStarted />
        <WhyStockKeeper />
        <Testimonials />
        <FAQ />
        <CTA />
    </div>
  )
}

export default page