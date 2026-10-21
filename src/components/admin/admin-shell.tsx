"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FileText,
  LayoutDashboard,
  LogOut,
  Package,
  Settings,
  Users,
} from "lucide-react";

const NAV = [
  { href: "/admin", label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/admin/leads", label: "Demandes", icon: Users },
  { href: "/admin/packs", label: "Formules", icon: Package },
  { href: "/admin/content", label: "Contenus", icon: FileText },
  { href: "/admin/settings", label: "Paramètres", icon: Settings },
];

export function AdminShell({
  children,
  userName,
}: {
  children: React.ReactNode;
  userName: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#f3f8fa] text-[#0a2b3e]">
      <div className="mx-auto flex min-h-screen max-w-[1400px]">
        <aside className="hidden w-64 shrink-0 border-r border-[#d5e4eb] bg-white p-5 md:block">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e84e1b]">
              Tukki
            </p>
            <h1 className="mt-1 text-lg font-semibold">Back-office</h1>
            <p className="mt-1 text-sm text-[#5c8ca3]">{userName}</p>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => {
              const active =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-[#0a2b3e] text-white"
                      : "text-[#17455c] hover:bg-[#e8f1f5]"
                  }`}
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            onClick={logout}
            className="mt-8 flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-[#5c8ca3] hover:bg-[#e8f1f5]"
          >
            <LogOut className="size-4" />
            Déconnexion
          </button>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex items-center justify-between gap-3 border-b border-[#d5e4eb] bg-white px-4 py-3 md:hidden">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e84e1b]">
                Tukki Admin
              </p>
              <p className="text-sm text-[#5c8ca3]">{userName}</p>
            </div>
            <button
              type="button"
              onClick={logout}
              className="rounded-lg border border-[#d5e4eb] px-3 py-1.5 text-sm"
            >
              Sortir
            </button>
          </header>
          <nav className="flex gap-1 overflow-x-auto border-b border-[#d5e4eb] bg-white px-2 py-2 md:hidden">
            {NAV.map((item) => {
              const active =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-sm ${
                    active ? "bg-[#0a2b3e] text-white" : "text-[#17455c]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
