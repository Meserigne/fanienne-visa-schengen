export type LangPair = { fr: string; en: string };

export type CmsField =
  | { type: "text" | "textarea"; key: string; label: string; bilingual?: boolean }
  | { type: "list"; key: string; label: string; itemLabel?: string; itemFields: CmsField[] };

export type CmsDocDefinition = {
  key: string;
  label: string;
  group: string;
  fields: CmsField[];
  defaults: Record<string, unknown>;
};

export function pair(fr: string, en: string): LangPair {
  return { fr, en };
}
