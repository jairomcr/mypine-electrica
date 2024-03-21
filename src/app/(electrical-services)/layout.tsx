import TopMenu from "@/components/ui/top-menu/TopMenu";


export default function ElectricalServiceLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="">
      <TopMenu/>
      {children}
    </main>
  );
}