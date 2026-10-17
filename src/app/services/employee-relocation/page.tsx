import type { Metadata } from 'next';
import TopicGuide from '@/components/sections/TopicGuide';
import { employeeRelocationGuide } from '@/lib/relocation-guides';
import { withPageImageSeo } from '@/lib/schema';

export const metadata: Metadata = withPageImageSeo('employeeRelocation', {
  title: { absolute: 'Employee Relocation Las Vegas | Dr. Jan Duffy' },
  description:
    'Home search for employees and executives transferring to Las Vegas and Henderson. Dr. Jan Duffy is the realtor. Call (702) 707-7273.',
  alternates: { canonical: '/services/employee-relocation' },
});

export default function EmployeeRelocationPage() {
  return <TopicGuide {...employeeRelocationGuide} />;
}
