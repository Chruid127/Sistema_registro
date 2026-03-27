import { AdminDashboard } from "../../components/admin-dashboard";

type AdminDashboardPageProps = {
  searchParams?: Promise<{
    id?: string;
    email?: string;
  }>;
};

export default async function AdminDashboardPage({
  searchParams,
}: AdminDashboardPageProps) {
  const params = (await searchParams) ?? {};
  const internalId = params.id ?? "Sin ID";
  const email = params.email ?? "usuario@ozsfordsecurity.com";

  return <AdminDashboard email={email} internalId={internalId} />;
}
