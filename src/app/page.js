import { CallbackForm } from '@/components/CallbackForm';
import { HeroSection } from '@/sections/HeroSection';
import { Benefits } from '@/sections/Benefits';
import { PhotoGallery } from '@/sections/PhotoGallery';
import { TeethPhoto } from '@/sections/TeethPhoto';
import { Questions } from '@/sections/Questions';
import { ProcedureSection } from '@/sections/ProcedureSection';
import { ContactsSection } from '@/sections/ContactsSection';
import { NewTabListSection } from '@/sections/NewTabListSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Benefits />
      <ProcedureSection />
      <PhotoGallery />
      <Questions />
      <TeethPhoto />
      <ContactsSection />
      <NewTabListSection />
    </>
  );
}
