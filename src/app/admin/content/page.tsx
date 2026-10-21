import { prisma } from "@/lib/db";
import { ContentEditor } from "@/components/admin/content-editor";

export const dynamic = "force-dynamic";

export default async function AdminContentPage() {
  const blocks = await prisma.contentBlock.findMany({ orderBy: { key: "asc" } });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Contenus</h2>
        <p className="mt-1 text-sm text-[#5c8ca3]">
          Modifiez les textes affichés sur le site (FR / EN).
        </p>
      </div>
      <ContentEditor blocks={blocks} />
    </div>
  );
}
