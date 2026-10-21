import { getSettingsMap } from "@/lib/admin/settings";
import { SettingsForm } from "@/components/admin/settings-form";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const settings = await getSettingsMap();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Paramètres</h2>
        <p className="mt-1 text-sm text-[#5c8ca3]">
          Coordonnées et informations générales affichées sur le site.
        </p>
      </div>
      <SettingsForm initial={settings} />
    </div>
  );
}
