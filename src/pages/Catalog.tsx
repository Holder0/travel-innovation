import { useState, useMemo } from "react"
import type { Page, PackageItem, CatalogFilterState } from "../types"
import { ECUADOR_REGIONS } from "../types"
import { Button, SelectField, DateRangePicker, PageTitle } from "../components/common"
import { CheckIcon, CloseXIcon } from "../components/common/SvgIcons"
import { PackageCard } from "../components/cards/PackageCard"
import { PROVINCES_DATA } from "../data/provincesData"
import { packages as defaultPackages } from "../data/packagesData"
import { TRAVEL_CATEGORIES } from "../data/categoriesData"

export function Catalog({
  go,
  filters,
  onUpdateFilters,
  onResetFilters,
  onViewPackage,
  packagesList = defaultPackages,
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
  packagesList?: PackageItem[]
}) {
  const {
    region: selectedRegion,
    category: selectedCategory,
    province: selectedProvince,
    city: selectedCity,
    dateRange,
    dateActive,
    minPrice,
    maxPrice,
    sortBy,
    currentPage,
  } = filters

  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)

  const activeFiltersCount = useMemo(() => {
    let count = 0
    if (selectedCategory) count++
    if (selectedRegion) count++
    if (selectedProvince) count++
    if (selectedCity) count++
    if (dateActive && dateRange) count++
    if (minPrice > 100 || maxPrice < 900) count++
    return count
  }, [
    selectedCategory,
    selectedRegion,
    selectedProvince,
    selectedCity,
    dateActive,
    dateRange,
    minPrice,
    maxPrice,
  ])

  const update = (partial: Partial<CatalogFilterState>) => {
    onUpdateFilters((prev) => ({
      ...prev,
      ...partial,
    }))
  }

  const ITEMS_PER_PAGE = 6

  const availableProvinces = useMemo(() => {
    let list = packagesList
    if (selectedRegion) {
      list = list.filter((p) => p.region === selectedRegion)
    }
    return Array.from(new Set(list.map((p) => p.province))).sort((a, b) =>
      a.localeCompare(b, "es")
    )
  }, [selectedRegion, packagesList])

  const availableCities = useMemo(() => {
    let list = packagesList
    if (selectedRegion) {
      list = list.filter((p) => p.region === selectedRegion)
    }
    if (selectedProvince) {
      list = list.filter((p) => p.province === selectedProvince)
    }
    return Array.from(new Set(list.map((p) => p.city))).sort((a, b) =>
      a.localeCompare(b, "es")
    )
  }, [selectedRegion, selectedProvince, packagesList])

  const matchingPackages = useMemo(() => {
    return packagesList.filter((item) => {
      if (selectedRegion && item.region !== selectedRegion) {
        return false
      }
      if (selectedCategory) {
        const selNorm = selectedCategory.toLowerCase().trim()
        const catNorm = (item.category || "").toLowerCase().trim()
        const slugNorm = (item.categorySlug || "").toLowerCase().trim()
        const matches =
          catNorm === selNorm ||
          slugNorm === selNorm ||
          catNorm.includes(selNorm) ||
          selNorm.includes(catNorm)
        if (!matches) {
          return false
        }
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
    packagesList,
    selectedRegion,
    selectedCategory,
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

  const renderFilterFields = () => (
    <>
      <div className="filter-section">
        <span className="filter-section-title">Estilo de viaje</span>
        <SelectField
          label="Categoría temática"
          value={selectedCategory}
          onChange={(cat) => update({ category: cat, currentPage: 1 })}
        >
          <option value="">Todos los estilos ({TRAVEL_CATEGORIES.length})</option>
          {TRAVEL_CATEGORIES.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </SelectField>
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
              ? packagesList.filter((p) => p.province === prov).map((p) => p.city)
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
    </>
  )

  return (
    <>
      <PageTitle
        title={catalogTitle}
        subtitle="Encuentra una salida que se ajuste a tu tiempo y presupuesto."
      />

      <div className="catalog-layout section">
        <aside className="filters desktop-filters">
          <div className="filter-heading">
            <h2>Filtros</h2>
          </div>

          {renderFilterFields()}

          <button
            type="button"
            className="button--clear-filters"
            onClick={clearFilters}
          >
            Limpiar filtros
          </button>
        </aside>

        <div className="catalog-results">
          {/* Mobile Catalog Filter Bar */}
          <div className="mobile-catalog-bar">
            <div className="mobile-filter-actions">
              <button
                type="button"
                className="mobile-filter-trigger-btn"
                onClick={() => setIsFilterDrawerOpen(true)}
                aria-label="Abrir filtros de búsqueda"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="21" x2="4" y2="14" />
                  <line x1="4" y1="10" x2="4" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12" y2="3" />
                  <line x1="20" y1="21" x2="20" y2="16" />
                  <line x1="20" y1="12" x2="20" y2="3" />
                  <line x1="1" y1="14" x2="7" y2="14" />
                  <line x1="9" y1="8" x2="15" y2="8" />
                  <line x1="17" y1="16" x2="23" y2="16" />
                </svg>
                <span>Filtros</span>
                {activeFiltersCount > 0 && (
                  <span className="mobile-filter-count-badge">{activeFiltersCount}</span>
                )}
              </button>

              <div className="mobile-sort-select">
                <SelectField
                  label=""
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
            </div>

            {/* Quick horizontal style pills */}
            <div className="mobile-quick-pills" role="tablist" aria-label="Estilos rápidos">
              <button
                type="button"
                className={`mobile-quick-pill ${!selectedCategory ? "is-active" : ""}`}
                onClick={() => update({ category: "", currentPage: 1 })}
              >
                Todos
              </button>
              {TRAVEL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`mobile-quick-pill ${selectedCategory === cat.name ? "is-active" : ""}`}
                  onClick={() => update({ category: cat.name, currentPage: 1 })}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

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
                {selectedCategory && (
                  <span className="active-filter">
                    Estilo: {selectedCategory}
                    <button
                      aria-label="Quitar filtro de estilo de viaje"
                      onClick={() => update({ category: "", currentPage: 1 })}
                    >
                      ×
                    </button>
                  </span>
                )}
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
                  <span className="active-filter" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                    <CheckIcon size={12} color="currentColor" /> {dateRange.startDay}–{dateRange.endDay} {dateRange.month}{" "}
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
                      style={{ display: "inline-grid", placeItems: "center" }}
                    >
                      <CloseXIcon size={11} />
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
                  {(() => {
                    const getPaginationItems = (current: number, total: number): (number | string)[] => {
                      if (total <= 7) {
                        return Array.from({ length: total }, (_, i) => i + 1)
                      }
                      if (current <= 4) {
                        return [1, 2, 3, 4, 5, "...", total]
                      }
                      if (current >= total - 3) {
                        return [1, "...", total - 4, total - 3, total - 2, total - 1, total]
                      }
                      return [1, "...", current - 1, current, current + 1, "...", total]
                    }

                    return getPaginationItems(currentPage, totalPages).map((item, idx) => {
                      if (item === "...") {
                        return (
                          <span key={`ellipsis-${idx}`} className="pagination-ellipsis" aria-hidden="true">
                            …
                          </span>
                        )
                      }
                      const pageNum = Number(item)
                      return (
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
                      )
                    })
                  })()}
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

      {/* Mobile Filter Bottom Sheet Modal */}
      <div
        className={`mobile-filter-backdrop ${isFilterDrawerOpen ? "is-open" : ""}`}
        onClick={() => setIsFilterDrawerOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`mobile-filter-drawer ${isFilterDrawerOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Filtros de búsqueda"
      >
        <div className="mobile-filter-drawer__header">
          <div className="mobile-filter-drawer__drag" aria-hidden="true" />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <h3 style={{ margin: 0, fontSize: "18px", color: "var(--abyss)", fontWeight: 700 }}>
              Filtros de búsqueda
            </h3>
            <button
              type="button"
              className="mobile-filter-drawer__close"
              onClick={() => setIsFilterDrawerOpen(false)}
              aria-label="Cerrar filtros"
            >
              <CloseXIcon size={18} />
            </button>
          </div>
        </div>

        <div className="mobile-filter-drawer__body">
          {renderFilterFields()}
        </div>

        <div className="mobile-filter-drawer__footer">
          <button
            type="button"
            className="mobile-filter-drawer__clear-btn"
            onClick={() => {
              clearFilters()
              setIsFilterDrawerOpen(false)
            }}
          >
            Limpiar todo
          </button>
          <button
            type="button"
            className="button button--primary mobile-filter-drawer__apply-btn"
            onClick={() => {
              setIsFilterDrawerOpen(false)
              window.scrollTo({ top: 200, behavior: "smooth" })
            }}
          >
            Ver {matchingPackages.length} paquetes
          </button>
        </div>
      </div>
    </>
  )
}

