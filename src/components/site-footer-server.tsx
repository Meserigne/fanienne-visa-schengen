import { getPublicSettings } from "@/lib/admin/public-data";
import { SiteFooter } from "@/components/site-footer";

export async function SiteFooterServer({
  variant = "compact",
}: {
  variant?: "full" | "compact";
}) {
  const settings = await getPublicSettings();
  return (
    <SiteFooter
      variant={variant}
      settings={{
        contactEmail: settings.contactEmail,
        whatsapp: settings.whatsapp,
        address: settings.address,
      }}
    />
  );
}
