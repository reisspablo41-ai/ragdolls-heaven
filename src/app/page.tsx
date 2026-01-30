import { HeroSection } from '@/components/home/HeroSection'
import { FeatureSection } from '@/components/home/FeatureSection'
import { FeaturedKittens } from '@/components/home/FeaturedKittens'
import { AboutSection } from '@/components/home/AboutSection'
import { MeetOurStars } from '@/components/home/MeetOurStars'
import { AdoptionProcess } from '@/components/home/AdoptionProcess'
import { Testimonials } from '@/components/home/Testimonials'
import { NewsletterSection } from '@/components/home/NewsletterSection'
import { FaqSection } from '@/components/home/FaqSection'
import { GallerySection } from '@/components/home/GallerySection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeatureSection />
      <FeaturedKittens />
      <AboutSection />
      <MeetOurStars />
      <AdoptionProcess />
      <Testimonials />
      <FaqSection />
      <GallerySection />
      <NewsletterSection />
    </div>
  )
}
