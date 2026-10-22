export function PageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="page-title">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  )
}

