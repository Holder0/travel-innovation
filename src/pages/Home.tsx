import { useState } from "react"
import type { Page, PackageItem, DateRange, SearchFilters } from "../types"
import { Button, SelectField, DateRangePicker } from "../components/common"
import { PackageCard } from "../components/cards/PackageCard"
import { PROVINCES_DATA } from "../data/provincesData"
import { packages } from "../data/packagesData"

export function Home({
  go,
  onSearch,
  onViewPackage,
}: {
  go: (page: Page) => void
  onSearch: (filters: SearchFilters) => void
  onViewPackage?: (item: PackageItem) => void
}) {
  const [selectedProvince, setSelectedProvince] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [dateRange, setDateRange] = useState<DateRange | null>(null)

  const availableProvinces = useMemo(() => {
    return Array.from(new Set(packages.map((p) => p.province))).sort((a, b) =>
      a.localeCompare(b, "es")
    )
  }, [])

  const availableCities = useMemo(() => {
    if (!selectedProvince) {
      return Array.from(new Set(packages.map((p) => p.city))).sort((a, b) =>
        a.localeCompare(b, "es")
      )
    }
    return Array.from(
      new Set(
        packages
          .filter((p) => p.province === selectedProvince)
          .map((p) => p.city),
      ),
    ).sort((a, b) => a.localeCompare(b, "es"))
  }, [selectedProvince])

  const handleProvinceChange = (province: string) => {
    setSelectedProvince(province)
    if (province) {
      const citiesInProv = packages
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

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Explora</span>
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

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Selección de la semana</span>
            <h2>Paquetes destacados</h2>
          </div>
          <Button
            kind="quiet"
            onClick={() =>
              onSearch({ region: "", province: "", city: "", dateRange: null })
            }
          >
            Ver todos los paquetes
          </Button>
        </div>
        <div className="package-grid">
          {packages.slice(0, 4).map((item) => (
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

