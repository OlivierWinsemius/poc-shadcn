import { Button } from '@/components/ui/button';
import { ComboboxDemo } from '@/components/ui/dropdown';
import { DatePickerDemo } from '@/components/ui/datepicker';
import { X } from 'lucide-react';

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className='text-2xl font-semibold mb-5 pb-4 border-b text-gray-600'>
        {title}
      </h3>
      <div className='grid items-center'>
        <div className='flex gap-2'>{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className='max-w-6xl mx-auto py-10'>
      <h1 className='text-4xl font-semibold mb-10'>POC Shadcn</h1>
      <div className='grid grid-cols-3 gap-x-12 gap-y-24'>
        <Section title='Default'>
          <Button>Button</Button>
        </Section>
        <Section title='Outline'>
          <Button variant='outline'>Button</Button>
        </Section>
        <Section title='Icon Button'>
          <Button>
            <X />
            Button
          </Button>
          <Button variant='outline'>
            <X />
            Button
          </Button>
        </Section>
        <Section title='Dropdown'>
          <ComboboxDemo />
        </Section>
        <Section title='Datepicker'>
          <DatePickerDemo />
        </Section>
      </div>
    </main>
  );
}
