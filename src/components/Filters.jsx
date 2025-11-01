import { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Filters({
  products = [],
  selectedFilters = {},
  setSelectedFilters = () => {},
  selectedCategories = new Set(),
  toggleCategory = () => {},
  sort = '',
  setSort = () => {},
}) {
  const [expandedSections, setExpandedSections] = useState({
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
  });

  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('RECOMMENDED');

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sortOptions = [
    { label: 'RECOMMENDED', value: '' },
    { label: 'NEWEST FIRST', value: 'newest' },
    { label: 'POPULAR', value: 'popular' },
    { label: 'PRICE : HIGH TO LOW', value: 'price-desc' },
    { label: 'PRICE : LOW TO HIGH', value: 'price-asc' },
  ];

  const handleSortChange = (label, value) => {
    setSelectedSort(label);
    setSort(value);
    setSortOpen(false);
  };

  const itemCount = products.length;

  // Extract unique categories from products
  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [products]
  );

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-4 border-b border-gray-200">
        <h2 className="text-sm font-bold text-gray-900">{itemCount.toLocaleString()} ITEMS</h2>
        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-500 hover:text-gray-700 transition flex items-center gap-1">
            <ChevronUp size={16} />
            HIDE FILTER
          </button>
          
        </div>
      </div>

   

      {/* Filters */}
      <div className="space-y-0">
        {/* Customizable */}
        <div className="border-b border-gray-200 py-4 px-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 border border-gray-300" />
            <span className="text-sm font-semibold text-gray-900">CUSTOMIZABLE</span>
          </label>
        </div>

        {/* Ideal For */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('idealFor')}
            className="w-full flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition"
          >
            <h3 className="text-sm font-semibold text-gray-900">IDEAL FOR</h3>
            {expandedSections.idealFor ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {expandedSections.idealFor && (
            <div className="px-4 pb-4 space-y-3 bg-gray-50">
              <div>
                <span className="text-xs font-medium text-gray-500">All</span>
                <button 
                  onClick={() => toggleCategory('')}
                  className="text-xs text-gray-400 hover:text-gray-600 ml-4"
                >
                  Unselect all
                </button>
              </div>
              {categories.map((cat) => (
                <label key={cat} className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={selectedCategories.has(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="w-4 h-4 border border-gray-300" 
                  />
                  <span className="text-sm text-gray-700 capitalize">{cat}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Occasion */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('occasion')}
            className="w-full flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition"
          >
            <h3 className="text-sm font-semibold text-gray-900">OCCASION</h3>
            {expandedSections.occasion ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {expandedSections.occasion && (
            <div className="px-4 pb-4 bg-gray-50">
              <span className="text-xs font-medium text-gray-700">All</span>
            </div>
          )}
        </div>

        {/* Work */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('work')}
            className="w-full flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition"
          >
            <h3 className="text-sm font-semibold text-gray-900">WORK</h3>
            {expandedSections.work ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {expandedSections.work && (
            <div className="px-4 pb-4 bg-gray-50">
              <span className="text-xs font-medium text-gray-700">All</span>
            </div>
          )}
        </div>

        {/* Fabric */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('fabric')}
            className="w-full flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition"
          >
            <h3 className="text-sm font-semibold text-gray-900">FABRIC</h3>
            {expandedSections.fabric ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {expandedSections.fabric && (
            <div className="px-4 pb-4 bg-gray-50">
              <span className="text-xs font-medium text-gray-700">All</span>
            </div>
          )}
        </div>

        {/* Segment */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('segment')}
            className="w-full flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition"
          >
            <h3 className="text-sm font-semibold text-gray-900">SEGMENT</h3>
            {expandedSections.segment ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {expandedSections.segment && (
            <div className="px-4 pb-4 bg-gray-50">
              <span className="text-xs font-medium text-gray-700">All</span>
            </div>
          )}
        </div>

        {/* Suitable For */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('suitableFor')}
            className="w-full flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition"
          >
            <h3 className="text-sm font-semibold text-gray-900">SUITABLE FOR</h3>
            {expandedSections.suitableFor ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {expandedSections.suitableFor && (
            <div className="px-4 pb-4 bg-gray-50">
              <span className="text-xs font-medium text-gray-700">All</span>
            </div>
          )}
        </div>

        {/* Raw Materials */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('rawMaterials')}
            className="w-full flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition"
          >
            <h3 className="text-sm font-semibold text-gray-900">RAW MATERIALS</h3>
            {expandedSections.rawMaterials ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {expandedSections.rawMaterials && (
            <div className="px-4 pb-4 bg-gray-50">
              <span className="text-xs font-medium text-gray-700">All</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}