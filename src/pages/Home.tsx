import { useState, useMemo } from "react"
import type { Page, PackageItem, DateRange, SearchFilters } from "../types"
import { Button, SelectField, DateRangePicker, CategorySvg } from "../components/common"
import { PackageCard } from "../components/cards/PackageCard"
import { PROVINCES_DATA } from "../data/provincesData"
import { packages as defaultPackages } from "../data/packagesData"
import { TRAVEL_CATEGORIES } from "../data/categoriesData"

export function Home({
  go,
  onSearch,
  onViewPackage,
  packagesList = defaultPackages,
}: {
  go: (page: Page) => void
  onSearch: (filters: SearchFilters) => void
  onViewPackage?: (item: PackageItem) => void
  packagesList?: PackageItem[]
}) {
  const [selectedProvince, setSelectedProvince] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [dateRange, setDateRange] = useState<DateRange | null>(null)

  const availableProvinces = useMemo(() => {
    return Array.from(new Set(packagesList.map((p) => p.province))).sort((a, b) =>
      a.localeCompare(b, "es")
    )
  }, [packagesList])

  const availableCities = useMemo(() => {
    if (!selectedProvince) {
      return Array.from(new Set(packagesList.map((p) => p.city))).sort((a, b) =>
        a.localeCompare(b, "es")
      )
    }
    return Array.from(
      new Set(
        packagesList
          .filter((p) => p.province === selectedProvince)
          .map((p) => p.city),
      ),
    ).sort((a, b) => a.localeCompare(b, "es"))
  }, [selectedProvince, packagesList])

  const handleProvinceChange = (province: string) => {
    setSelectedProvince(province)
    if (province) {
      const citiesInProv = packagesList
        .filter((p) => p.province === province)
        .map((p) => p.city)
      if (selectedCity && !citiesInProv.includes(selectedCity)) {
        setSelectedCity("")
      }
    }
  }

  const handleCityChange = (city: string) => {
    setSelectedCity(city)
  }

  const handleSearchSubmit = () => {
    onSearch({
      province: selectedProvince,
      city: selectedCity,
      dateRange,
    })
  }

  return (
    <>
      <section className="hero">
        <div className="hero__copy">
          <span className="eyebrow light">Paquetes nacionales</span>
          <h1>Descubre el Ecuador a tu ritmo</h1>
          <p>Elige una provincia y encuentra una salida para tu próximo viaje.</p>
        </div>
        <div className="search-panel" role="search">
          <SelectField
            label="Provincia"
            value={selectedProvince}
            onChange={handleProvinceChange}
          >
            <option value="">Provincias ({availableProvinces.length})</option>
            {availableProvinces.map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </SelectField>

          <SelectField
            label="Ciudad"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="">Ciudades ({availableCities.length})</option>
            {availableCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </SelectField>

          <DateRangePicker
            label="Fecha de viaje"
            value={dateRange}
            onChange={setDateRange}
          />

          <Button kind="primary" onClick={handleSearchSubmit}>
            Buscar paquetes
          </Button>
        </div>
      </section>

      {/* SECCIÓN 1: VUELOS Y SALIDAS POR REGIÓN GEOGRÁFICA */}
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Destinos del Ecuador</span>
            <h2>Viaja por región</h2>
          </div>
        </div>
        <div className="region-grid">
          {(
            [
              ["Costa", "Costa"],
              ["Sierra", "Sierra"],
              ["Amazonía", "Amazonía"],
              ["Galápagos", "Galápagos"],
            ] as const
          ).map(([regionName, regionValue], index) => (
            <button
              className="region-card"
              key={regionName}
              onClick={() => {
                onSearch({
                  region: regionValue,
                  category: "",
                  province: "",
                  city: "",
                  dateRange: null,
                })
              }}
            >
              <span className="region-icon" aria-hidden="true">
                {index + 1}
              </span>
              <strong>{regionName}</strong>
              <span>Ver paquetes</span>
            </button>
          ))}
        </div>
      </section>

      {/* SECCIÓN 2: CATEGORÍAS TEMÁTICAS DE VIAJE (ALINEADO CON TABLA CATEGORIAS) */}
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Experiencias y Estilos</span>
            <h2>Explora por estilo de viaje</h2>
          </div>
          <Button
            kind="quiet"
            onClick={() =>
              onSearch({ region: "", category: "", province: "", city: "", dateRange: null })
            }
          >
            Ver todos los estilos
          </Button>
        </div>
        <div className="category-grid">
          {TRAVEL_CATEGORIES.slice(0, 6).map((cat) => (
            <button
              key={cat.id}
              className="category-card"
              type="button"
              onClick={() => {
                onSearch({
                  category: cat.name,
                  region: "",
                  province: "",
                  city: "",
                  dateRange: null,
                })
              }}
              aria-label={`Ver paquetes de la categoría ${cat.name}`}
            >
              <div className="category-card__icon-wrapper">
                <CategorySvg icon={cat.icon} size={24} />
              </div>
              <strong>{cat.name}</strong>
              <p>{cat.description}</p>
              <span className="category-card__link">Explorar salidas →</span>
            </button>
          ))}
        </div>
      </section>

      {/* SECCIÓN 3: PAQUETES DESTACADOS */}
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Selección de la semana</span>
            <h2>Paquetes destacados</h2>
          </div>
          <Button
            kind="quiet"
            onClick={() =>
              onSearch({ region: "", category: "", province: "", city: "", dateRange: null })
            }
          >
            Ver todos los paquetes
          </Button>
        </div>
        <div className="package-grid">
          {packagesList.slice(0, 4).map((item) => (
            <PackageCard
              key={item.id}
              item={item}
              go={go}
              onSelect={onViewPackage}
            />
          ))}
        </div>
      </section>
    </>
  )
}


