import { CollaboratorDashboard } from "../../components/collaborator-dashboard";

type CollaboratorDashboardPageProps = {
  searchParams?: Promise<{
    id?: string;
    email?: string;
  }>;
};

export default async function CollaboratorDashboardPage({
  searchParams,
}: CollaboratorDashboardPageProps) {
  const params = (await searchParams) ?? {};
  const internalId = params.id ?? "Sin ID";
  const email = params.email ?? "colaborador@ozsfordsecurity.com";

  return <CollaboratorDashboard email={email} internalId={internalId} />;
}
