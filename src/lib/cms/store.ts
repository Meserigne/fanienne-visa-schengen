import { prisma } from "@/lib/db";
import { CMS_CATALOG, getCmsDefaults } from "./catalog";
import { deepMerge } from "./helpers";

export async function ensureCmsDocuments() {
  for (const doc of CMS_CATALOG) {
    await prisma.cmsDocument.upsert({
      where: { key: doc.key },
      create: {
        key: doc.key,
        label: doc.label,
        group: doc.group,
        data: JSON.stringify(doc.defaults),
      },
      update: {
        label: doc.label,
        group: doc.group,
      },
    });
  }
}

export async function getCmsDocument(key: string) {
  const defaults = getCmsDefaults(key);
  try {
    const row = await prisma.cmsDocument.findUnique({ where: { key } });
    if (!row) return { key, data: defaults, updatedAt: null as Date | null };
    const parsed = safeParse(row.data);
    return {
      key,
      label: row.label,
      group: row.group,
      data: deepMerge(defaults, parsed),
      updatedAt: row.updatedAt,
      id: row.id,
    };
  } catch {
    return { key, data: defaults, updatedAt: null as Date | null };
  }
}

export async function getAllCmsDocuments() {
  const defaultsMap = Object.fromEntries(
    CMS_CATALOG.map((d) => [d.key, d.defaults]),
  ) as Record<string, Record<string, unknown>>;

  try {
    await ensureCmsDocuments();
    const rows = await prisma.cmsDocument.findMany({
      orderBy: [{ group: "asc" }, { key: "asc" }],
    });
    return rows.map((row) => ({
      id: row.id,
      key: row.key,
      label: row.label,
      group: row.group,
      data: deepMerge(defaultsMap[row.key] ?? {}, safeParse(row.data)),
      updatedAt: row.updatedAt,
    }));
  } catch {
    return CMS_CATALOG.map((doc) => ({
      id: doc.key,
      key: doc.key,
      label: doc.label,
      group: doc.group,
      data: doc.defaults,
      updatedAt: null as Date | null,
    }));
  }
}

export async function getPublicCmsMap() {
  const docs = await getAllCmsDocuments();
  const map: Record<string, Record<string, unknown>> = {};
  for (const doc of docs) {
    map[doc.key] = doc.data;
  }
  // Always include catalog defaults for keys not yet in DB
  for (const doc of CMS_CATALOG) {
    if (!map[doc.key]) map[doc.key] = doc.defaults;
  }
  return map;
}

export async function saveCmsDocument(key: string, data: unknown) {
  const def = CMS_CATALOG.find((d) => d.key === key);
  if (!def) throw new Error(`Document CMS inconnu: ${key}`);
  const payload = JSON.stringify(data ?? {});
  return prisma.cmsDocument.upsert({
    where: { key },
    create: {
      key,
      label: def.label,
      group: def.group,
      data: payload,
    },
    update: { data: payload, label: def.label, group: def.group },
  });
}

function safeParse(raw: string): Record<string, unknown> {
  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return parsed as Record<string, unknown>;
    }
  } catch {
    /* ignore */
  }
  return {};
}
