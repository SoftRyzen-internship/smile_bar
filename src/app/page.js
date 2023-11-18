import { CallbackForm } from '@/components/CallbackForm';
import { HeroSection } from '@/sections/HeroSection';
import { Benefits } from '@/sections/Benefits';
import { PhotoGallery } from '@/sections/PhotoGallery';
import { TeethPhoto } from '@/sections/TeethPhoto';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Benefits />
      <PhotoGallery />
      <TeethPhoto />
      <CallbackForm />
    </>
  );
}
