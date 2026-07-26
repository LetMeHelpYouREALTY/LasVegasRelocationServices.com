import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('contact', {
  title: 'Contact Dr. Jan Duffy | Las Vegas Relocation Services',
  description:
    'Contact Dr. Jan Duffy and the Berkshire Hathaway relocation team. Call (702) 707-7273 or request a free Las Vegas relocation consultation online.',
});

export default function ContactPage() {
  return (
    <div>
      <Contact />
    </div>
  );
}
