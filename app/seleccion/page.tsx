import { SelectionPanel } from "../components/selection-panel";

type SelectionPageProps = {
  searchParams?: Promise<{
    email?: string;
  }>;
};

export default async function SelectionPage({
  searchParams,
}: SelectionPageProps) {
  const params = (await searchParams) ?? {};
  const email = params.email ?? "";

  return <SelectionPanel email={email} />;
}
