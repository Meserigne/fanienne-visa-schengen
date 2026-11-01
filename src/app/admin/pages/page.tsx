import { getAllCmsDocuments } from "@/lib/cms/store";
import { CmsPagesEditor } from "@/components/admin/cms-pages-editor";

export const dynamic = "force-dynamic";

export default async function AdminPagesPage() {
  const documents = await getAllCmsDocuments();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Pages du site</h2>
        <p className="mt-1 text-sm text-[#5c8ca3]">
          Modifiez tout le contenu visible : accueil, parcours, à propos,
          navigation, pied de page, formulaire… (FR / EN).
        </p>
      </div>
      <CmsPagesEditor
        documents={documents.map((d) => ({
          ...d,
          updatedAt: d.updatedAt ? d.updatedAt.toISOString() : null,
        }))}
      />
    </div>
  );
}
