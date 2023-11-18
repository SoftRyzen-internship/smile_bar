import { CallbackForm } from '@/components/CallbackForm';
import { HeroSection } from '@/sections/HeroSection';
import { Benefits } from '@/sections/Benefits';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Benefits />
      <CallbackForm />
    </>
  );
}
