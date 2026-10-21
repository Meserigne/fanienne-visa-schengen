import { listManagedImages } from "@/lib/admin/images";
import { MediaManager } from "@/components/admin/media-manager";
import { IMAGE_CATALOG } from "@/lib/admin/image-catalog";

export const dynamic = "force-dynamic";

export default async function AdminMediaPage() {
  let images;
  try {
    images = await listManagedImages();
  } catch {
    images = IMAGE_CATALOG.map((item) => ({
      key: item.key,
      label: item.label,
      category: item.category,
      url: item.defaultUrl,
      defaultUrl: item.defaultUrl,
    }));
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Médias / Photos</h2>
        <p className="mt-1 text-sm text-[#5c8ca3]">
          Remplacez toutes les photos du site : hero, panneaux, pages, logos…
        </p>
      </div>
      <MediaManager initial={images} />
    </div>
  );
}
