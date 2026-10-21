import { prisma } from "@/lib/db";

export const DEFAULT_SETTINGS: Record<string, string> = {
  contactEmail: "contact@tookyconsulting.com",
  contactPhone: "+221 77 000 00 00",
  whatsapp: "+221 77 000 00 00",
  address: "Dakar, Sénégal",
  companyName: "Tukki Consulting",
  replyHours: "48",
};

export async function getSettingsMap(): Promise<Record<string, string>> {
  try {
    const rows = await prisma.siteSetting.findMany();
    const map = { ...DEFAULT_SETTINGS };
    for (const row of rows) {
      map[row.key] = row.value;
    }
    return map;
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export async function upsertSetting(key: string, value: string) {
  return prisma.siteSetting.upsert({
    where: { key },
    create: { key, value },
    update: { value },
  });
}

export async function upsertSettings(values: Record<string, string>) {
  await Promise.all(
    Object.entries(values).map(([key, value]) => upsertSetting(key, value)),
  );
}
