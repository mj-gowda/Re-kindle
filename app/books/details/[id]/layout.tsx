import "@/globals.css"

export default function createLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="pt-10">
        {children}
    </div>
  )
}