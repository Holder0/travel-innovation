export function Placeholder({
  label = "Imagen referencial del destino",
}: {
  label?: string
}) {
  return (
    <div className="placeholder" role="img" aria-label={label}>
      <span className="placeholder__icon" aria-hidden="true">
        □
      </span>
      <span>{label}</span>
    </div>
  )
}


