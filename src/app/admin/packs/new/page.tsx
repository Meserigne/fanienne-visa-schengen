import Link from "next/link";
import { PackEditor } from "@/components/admin/pack-editor";

export default function AdminNewPackPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/packs" className="text-sm text-[#e84e1b] hover:underline">
          ← Retour aux formules
        </Link>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">Nouvelle formule</h2>
      </div>
      <PackEditor />
    </div>
  );
}
