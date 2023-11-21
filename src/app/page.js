import { CallbackForm } from '@/components/CallbackForm';
import { HeroSection } from '@/sections/HeroSection';
import { Benefits } from '@/sections/Benefits';
import { PhotoGallery } from '@/sections/PhotoGallery';
import { TeethPhoto } from '@/sections/TeethPhoto';
import { Questions } from '@/sections/Questions';
import { ProcedureSection } from '@/sections/ProcedureSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Benefits />
      <ProcedureSection />
      <PhotoGallery />
      <Questions />
      <TeethPhoto />
      <CallbackForm />
    </>
  );
}
