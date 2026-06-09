export default function WorkerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-surface text-on-surface font-body-lg min-h-screen relative md:max-w-md md:mx-auto md:border-x md:border-outline-variant shadow-2xl overflow-x-hidden">
      {/* Heritage Accent */}
      <div className="h-1 w-full flex fixed top-0 z-50 md:max-w-md">
        <div className="flex-1 bg-[#ba1a1a]"></div>
        <div className="flex-1 bg-[#ff7a1b]"></div>
        <div className="flex-1 bg-[#006428]"></div>
      </div>
      {children}
    </div>
  );
}
