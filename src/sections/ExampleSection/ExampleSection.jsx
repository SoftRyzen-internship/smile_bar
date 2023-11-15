import { Title, Example } from '@/components';
import { ExampleForm } from '@/components/Example/ExampleForm';

export const ExampleSection = () => {
  return (
    <section>
      <div className="component container mx-auto">
        <Example />
        <ExampleForm />
      </div>
    </section>
  );
};
