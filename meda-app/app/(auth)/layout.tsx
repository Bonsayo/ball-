import { HeritageAccent } from "@/components/ui/HeritageAccent";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <HeritageAccent />
      </div>
      <div className="flex-1 flex flex-col pt-4">
        {children}
      </div>
    </div>
  );
}
