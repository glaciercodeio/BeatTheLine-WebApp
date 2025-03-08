import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Geist, Geist_Mono } from "next/font/google";
import { montserrat } from "@/app/components/ui/fonts";
import "../globals.css";
import { metadata } from "../layout"; // Reuse metadata
import { Toaster, toast } from "sonner";
import { getUserProfileById } from "@/lib/userProfile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function DashboardLayout({ children }) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  let user = null;

  if (error || !data?.user) {
    redirect("/login");
  }
  try {
    const profile = await getUserProfileById(data?.user.id);

    user = profile;
  } catch (error) {
    console.error("Error fetching profile:", error.message);
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden min-h-0 w-full">
        <AppSidebar user={user} />
        <main
          className={`flex-1 overflow-hidden ${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}
          style={{
            background: `radial-gradient(circle at top, rgba(114, 213, 60, 0.12) 0%, rgba(255, 255, 255, 0) 60%)`,
          }}
        >
          <SidebarTrigger />
          <Toaster position="top-center" richColors />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
