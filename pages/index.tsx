// my-portfolio/pages/index.tsx
import HeroCard from '@/components/HeroCard';
import AboutSection from '@/components/AboutSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="max-w-5xl mx-auto px-4 py-12">
            <HeroCard />
            <div id="about">
                <AboutSection />
            </div>
            <div>
                <FeaturedProjects />
            </div>
            <ContactForm />
            
        </div>
    </main>
  );
}
