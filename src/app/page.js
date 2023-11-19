import { CallbackForm } from '@/components/CallbackForm';
import { HeroSection } from '@/sections/HeroSection';
import { Benefits } from '@/sections/Benefits';
import { PhotoGallery } from '@/sections/PhotoGallery';
import { TeethPhoto } from '@/sections/TeethPhoto';
import { Questions } from '@/sections/Questions';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Benefits />
      <PhotoGallery />
      <Questions />
      <TeethPhoto />
      <CallbackForm />
    </>
  );
}
