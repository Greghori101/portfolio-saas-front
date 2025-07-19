import type { Metadata } from 'next';
import { rootDomain } from '@/lib/utils';
import { Dashboard } from '@/components/admin/dashboard'

export const metadata: Metadata = {
  title: `Admin Dashboard | ${rootDomain}`,
  description: `Manage subdomains for ${rootDomain}`
};

export default async function AdminPage() {
  // TODO: You can add authentication here with your preferred auth provider

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <Dashboard tenants={[]} />
    </div>
  );
}
