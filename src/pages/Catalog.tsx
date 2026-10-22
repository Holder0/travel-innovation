import { useState, useMemo } from "react"
import type { Page, PackageItem, CatalogFilterState } from "../types"
import { ECUADOR_REGIONS } from "../types"
import { Button, SelectField, DateRangePicker, PageTitle } from "../components/common"
import { PackageCard } from "../components/cards/PackageCard"
import { PROVINCES_DATA } from "../data/provincesData"
import { packages } from "../data/packagesData"

export function Catalog({
  go,
  filters,
  onUpdateFilters,
  onResetFilters,
  onViewPackage,
}: {
  go: (page: Page) => void
  filters: CatalogFilterState
  onUpdateFilters: (
    updater:
      | Partial<CatalogFilterState>
      | ((prev: CatalogFilterState) => CatalogFilterState),
  ) => void
  onResetFilters: () => void
  onViewPackage?: (item: PackageItem) => void
}) {
  const {
    region: selectedRegion,
    province: selectedProvince,
    city: selectedCity,
    dateRange,
    dateActive,
    minPrice,
    maxPrice,
    sortBy,
    currentPage,
  } = filters

  const update = (partial: Partial<CatalogFilterState>) => {
    onUpdateFilters((prev) => ({
      ...prev,
      ...partial,
    }))
  }

  const ITEMS_PER_PAGE = 6

  const availableProvinces = useMemo(() => {
    let list = packages
    if (selectedRegion) {
      list = list.filter((p) => p.region === selectedRegion)
    }
    return Array.from(new Set(list.map((p) => p.province))).sort((a, b) =>
      a.localeCompare(b, "es")
    )
  }, [selectedRegion])

  const availableCities = useMemo(() => {
    let list = packages
    if (selectedRegion) {
      list = list.filter((p) => p.region === selectedRegion)
    }
    if (selectedProvince) {
      list = list.filter((p) => p.province === selectedProvince)
    }
    return Array.from(new Set(list.map((p) => p.city))).sort((a, b) =>
      a.localeCompare(b, "es")
    )
  }, [selectedRegion, selectedProvince])

  const matchingPackages = useMemo(() => {
    return packages.filter((item) => {
      if (selectedRegion && item.region !== selectedRegion) {
        return false
      }
      if (selectedProvince && item.province !== selectedProvince) {
        return false
      }
      if (selectedCity && item.city !== selectedCity) {
        return false
      }
      if (item.price < minPrice || item.price > maxPrice) {
        return false
      }
      if (dateActive && dateRange) {
        if (item.dates.month !== dateRange.month) {
          return false
        }
        if (item.dates.year && dateRange.year && item.dates.year !== dateRange.year) {
          return false
        }
        const hasOverlap = !(
          dateRange.endDay < item.dates.startDay ||
          dateRange.startDay > item.dates.endDay
        )
        if (!hasOverlap) {
          return false
        }
      }
      return true
    })
  }, [
    selectedRegion,
    selectedProvince,
    selectedCity,
    minPrice,
    maxPrice,
    dateActive,
    dateRange,
  ])

  const sortedPackages = useMemo(() => {
    const list = [...matchingPackages]
    if (
      sortBy === "Alfabético: A a Z (Ascendente)" ||
      sortBy === "Nombre: A a Z" ||
      sortBy === "Alfabético ascendente"
    ) {
      list.sort((a, b) => a.name.localeCompare(b.name, "es"))
    } else if (
      sortBy === "Alfabético: Z a A (Descendente)" ||
      sortBy === "Nombre: Z a A" ||
      sortBy === "Alfabético descendente"
    ) {
      list.sort((a, b) => b.name.localeCompare(a.name, "es"))
    } else if (sortBy === "Precio: menor a mayor") {
      list.sort((a, b) => a.price - b.price)
    } else if (sortBy === "Precio: mayor a menor") {
      list.sort((a, b) => b.price - a.price)
    } else if (sortBy === "Duración") {
      list.sort((a, b) => {
        const daysA = parseInt(a.days) || 0
        const daysB = parseInt(b.days) || 0
        return daysB - daysA
      })
    } else {
      list.sort((a, b) => a.name.localeCompare(b.name, "es"))
    }
    return list
  }, [matchingPackages, sortBy])

  const totalPages = Math.max(1, Math.ceil(sortedPackages.length / ITEMS_PER_PAGE))
  const paginatedPackages = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return sortedPackages.slice(start, start + ITEMS_PER_PAGE)
  }, [sortedPackages, currentPage])

  const clearFilters = () => {
    onResetFilters()
  }

  const catalogTitle = useMemo(() => {
    if (selectedProvince) {
      return `Paquetes en ${selectedProvince}`
    }
    if (selectedRegion) {
      return `Paquetes en ${selectedRegion === "Sierra" ? "la Sierra" : selectedRegion === "Amazonía" ? "la Amazonía" : selectedRegion === "Costa" ? "la Costa" : selectedRegion}`
    }
    return "Paquetes turísticos"
  }, [selectedProvince, selectedRegion])

  return (
    <>
      <PageTitle
        title={catalogTitle}
        subtitle="Encuentra una salida que se ajuste a tu tiempo y presupuesto."
      />
      <div className="catalog-layout section">
        <aside className="filters">
          <div className="filter-heading">
            <h2>Filtros</h2>
          </div>

          <div className="filter-section">
            <span className="filter-section-title">Destino</span>
            <SelectField
              label="Región"
              value={selectedRegion}
              onChange={(reg) => {
                update({
                  region: reg,
                  province: "",
                  city: "",
                  currentPage: 1,
                })
              }}
            >
              <option value="">Regiones ({ECUADOR_REGIONS.length})</option>
              {ECUADOR_REGIONS.map((reg) => (
                <option key={reg} value={reg}>
                  {reg}
                </option>
              ))}
            </SelectField>

            <SelectField
              label="Provincia"
              value={selectedProvince}
              onChange={(prov) => {
                const citiesInProv = prov
                  ? packages.filter((p) => p.province === prov).map((p) => p.city)
                  : []
                const newCity =
                  selectedCity && !citiesInProv.includes(selectedCity)
                    ? ""
                    : selectedCity
                update({
                  province: prov,
                  city: newCity,
                  currentPage: 1,
                })
              }}
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
              onChange={(city) => update({ city, currentPage: 1 })}
            >
              <option value="">Ciudades ({availableCities.length})</option>
              {availableCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </SelectField>
          </div>

          <div className="filter-section date-filter">
            <span className="filter-section-title">Fechas del viaje</span>
            <DateRangePicker
              label="Intervalo de fechas"
              value={dateRange}
              onChange={(range) => {
                update({
                  dateRange: range,
                  dateActive: Boolean(range),
                  currentPage: 1,
                })
              }}
            />
          </div>

          <div className="filter-section">
            <span className="filter-section-title">Rango de precio</span>
            <div className="price-values">
              <span>Desde <strong>${minPrice}</strong></span>
              <span>Hasta <strong>${maxPrice}</strong></span>
            </div>
            <div className="range-slider">
              <div className="range-track" />
              <input
                aria-label="Precio mínimo"
                max="850"
                min="100"
                step="25"
                type="range"
                value={minPrice}
                onChange={(event) =>
                  update({
                    minPrice: Math.min(Number(event.target.value), maxPrice - 50),
                    currentPage: 1,
                  })
                }
              />
              <input
                aria-label="Precio máximo"
                max="900"
                min="150"
                step="25"
                type="range"
                value={maxPrice}
                onChange={(event) =>
                  update({
                    maxPrice: Math.max(Number(event.target.value), minPrice + 50),
                    currentPage: 1,
                  })
                }
              />
            </div>
            <div className="range-limits"><span>$100</span><span>$900</span></div>
          </div>

          <button
            type="button"
            className="button--clear-filters"
            onClick={clearFilters}
          >
            Limpiar filtros
          </button>
        </aside>

        <div className="catalog-results">
          <div className="results-toolbar">
            <div>
              <strong>
                {matchingPackages.length === 1
                  ? "1 paquete encontrado"
                  : `${matchingPackages.length} paquetes encontrados`}
              </strong>
              <div
                style={{
                  display: "inline-flex",
                  gap: "6px",
                  flexWrap: "wrap",
                  marginLeft: "10px",
                }}
              >
                {selectedRegion && (
                  <span className="active-filter">
                    Región: {selectedRegion}
                    <button
                      aria-label="Quitar filtro de región"
                      onClick={() => update({ region: "", currentPage: 1 })}
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedProvince && (
                  <span className="active-filter">
                    Provincia: {selectedProvince}
                    <button
                      aria-label="Quitar filtro de provincia"
                      onClick={() =>
                        update({ province: "", city: "", currentPage: 1 })
                      }
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedCity && (
                  <span className="active-filter">
                    Ciudad: {selectedCity}
                    <button
                      aria-label="Quitar filtro de ciudad"
                      onClick={() => update({ city: "", currentPage: 1 })}
                    >
                      ×
                    </button>
                  </span>
                )}
                {dateActive && dateRange && (
                  <span className="active-filter">
                    ✓ {dateRange.startDay}–{dateRange.endDay} {dateRange.month}{" "}
                    {dateRange.year}
                    <button
                      aria-label="Quitar filtro de fechas"
                      onClick={() =>
                        update({
                          dateActive: false,
                          dateRange: null,
                          currentPage: 1,
                        })
                      }
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>
            <SelectField
              label="Ordenar por"
              value={sortBy}
              onChange={(sb) => update({ sortBy: sb, currentPage: 1 })}
            >
              {[
                "Recomendados",
                "Precio: menor a mayor",
                "Precio: mayor a menor",
                "Duración",
                "Alfabético: Z a A (Descendente)",
                "Alfabético: A a Z (Ascendente)",
              ]
                .sort((a, b) => a.localeCompare(b, "es"))
                .map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
            </SelectField>
          </div>

          {matchingPackages.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon" aria-hidden="true">
                !
              </span>
              <h2>No encontramos paquetes</h2>
              <p>
                No encontramos paquetes con los filtros seleccionados
                {selectedProvince ? ` en ${selectedProvince}` : ""}{selectedCity ? ` (${selectedCity})` : ""}.
                Prueba quitando uno o más filtros para ver otras opciones.
              </p>
              <Button kind="primary" onClick={clearFilters}>
                Limpiar filtros
              </Button>
            </div>
          ) : (
            <>
              <div className="package-grid package-grid--catalog">
                {paginatedPackages.map((item, index) => (
                  <PackageCard
                    key={`${item.id}-${index}`}
                    item={item}
                    go={go}
                    onSelect={onViewPackage}
                  />
                ))}
              </div>
              {totalPages > 1 && (
                <nav className="pagination" aria-label="Paginación del catálogo">
                  <button
                    className="pagination-button"
                    disabled={currentPage <= 1}
                    onClick={() => {
                      update({ currentPage: Math.max(1, currentPage - 1) })
                      window.scrollTo({ top: 200, behavior: "smooth" })
                    }}
                  >
                    Anterior
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      className={`pagination-button ${currentPage === pageNum ? "is-active" : ""}`}
                      aria-current={currentPage === pageNum ? "page" : undefined}
                      onClick={() => {
                        update({ currentPage: pageNum })
                        window.scrollTo({ top: 200, behavior: "smooth" })
                      }}
                    >
                      {pageNum}
                    </button>
                  ))}
                  <button
                    className="pagination-button"
                    disabled={currentPage >= totalPages}
                    onClick={() => {
                      update({ currentPage: Math.min(totalPages, currentPage + 1) })
                      window.scrollTo({ top: 200, behavior: "smooth" })
                    }}
                  >
                    Siguiente
                  </button>
                </nav>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}

