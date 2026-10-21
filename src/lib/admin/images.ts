import { prisma } from "@/lib/db";
import {
  DEFAULT_IMAGE_MAP,
  IMAGE_CATALOG,
} from "@/lib/admin/image-catalog";

export async function getImageMap(): Promise<Record<string, string>> {
  const map = { ...DEFAULT_IMAGE_MAP };
  try {
    const rows = await prisma.siteImage.findMany();
    for (const row of rows) {
      if (row.url) map[row.key] = row.url;
    }
  } catch {
    // fallback defaults
  }
  return map;
}

export async function listManagedImages() {
  const map = await getImageMap();
  const rows = await prisma.siteImage.findMany().catch(() => []);
  const byKey = Object.fromEntries(rows.map((r) => [r.key, r]));

  return IMAGE_CATALOG.map((item) => ({
    id: byKey[item.key]?.id,
    key: item.key,
    label: item.label,
    category: item.category,
    url: map[item.key] || item.defaultUrl,
    defaultUrl: item.defaultUrl,
  }));
}

export async function upsertImage(key: string, url: string) {
  const catalog = IMAGE_CATALOG.find((i) => i.key === key);
  if (!catalog) {
    throw new Error(`Clé image inconnue: ${key}`);
  }

  return prisma.siteImage.upsert({
    where: { key },
    create: {
      key,
      label: catalog.label,
      category: catalog.category,
      url,
    },
    update: { url, label: catalog.label, category: catalog.category },
  });
}
