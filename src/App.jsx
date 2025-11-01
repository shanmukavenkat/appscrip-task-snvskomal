import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

export default function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [sort, setSort] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('RECOMMENDED');

  const sortOptions = [
    { label: 'RECOMMENDED', value: '' },
    { label: 'NEWEST FIRST', value: 'newest' },
    { label: 'POPULAR', value: 'popular' },
    { label: 'PRICE : HIGH TO LOW', value: 'price-desc' },
    { label: 'PRICE : LOW TO HIGH', value: 'price-asc' },
  ];

  // Fetch products
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        const maxPrice = Math.ceil(Math.max(...data.map((p) => p.price)));
        setPriceRange([0, maxPrice]);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // Apply filters
  useEffect(() => {
    let list = [...products];

    if (query.trim())
      list = list.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));

    if (selectedCategories.size > 0)
      list = list.filter((p) => selectedCategories.has(p.category));

    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'newest') list.sort((a, b) => b.id - a.id);

    setFiltered(list);
  }, [products, query, selectedCategories, sort, priceRange]);

  function toggleCategory(cat) {
    const next = new Set(selectedCategories);
    next.has(cat) ? next.delete(cat) : next.add(cat);
    setSelectedCategories(next);
  }

  const handleSortChange = (label, value) => {
    setSelectedSort(label);
    setSort(value);
    setSortOpen(false);
  };

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen flex flex-col">
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center px-4 py-3 border-b bg-white">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="text-sm font-medium flex items-center gap-2"
          >
            <i className="fa fa-sliders"></i> {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value="">Recommended</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        <main className="flex flex-1 flex-col md:flex-row container mx-auto px-4 md:px-8 gap-8 py-6">
          {/* Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block md:w-1/4`}>
            <Filters
              products={products}
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
              sort={sort}
              setSort={setSort}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>

          {/* Product Section */}
          <section className="flex-1">
            {/* Header with Sort Dropdown */}
            <div className="hidden md:flex items-center justify-between mb-6 py-4 px-4 bg-white border-b border-gray-200">
              <span className="text-sm font-bold text-gray-900">{filtered.length} ITEMS</span>
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="text-sm font-semibold text-gray-900 flex items-center gap-2 hover:text-black transition"
                >
                  {selectedSort}
                  <ChevronDown size={16} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-10 min-w-48">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSortChange(option.label, option.value)}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition flex items-center gap-2"
                      >
                        {selectedSort === option.label && <span className="text-gray-900">✓</span>}
                        <span className={selectedSort === option.label ? 'text-gray-900 font-medium' : 'text-gray-700'}>
                          {option.label}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-end mb-6">
              <div className="text-gray-600 text-sm mt-3 sm:mt-0">{filtered.length} Items</div>
            </div>

            <div
              className="
                grid 
                grid-cols-2 
                sm:grid-cols-1 
                lg:grid-cols-2
                xl:grid-cols-3
                gap-6
              "
            >
              {loading ? (
                <div className="col-span-full text-center text-gray-500">Loading products…</div>
              ) : filtered.length === 0 ? (
                <div className="col-span-full text-center text-gray-500">No products found.</div>
              ) : (
                filtered.map((p) => <ProductCard key={p.id} product={p} />)
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}