import SideBar from "@/components/SideBar"

export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="flex">
        <SideBar />
        {children}
        </section>
  }