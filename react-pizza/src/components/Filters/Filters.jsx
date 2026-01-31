import { useState } from 'react';
import { CATEGORIES } from '../../constants/categories';

const Filters = ({ onCategoryChange, sortBy }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isValue, setIsValue] = useState('name');

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
  };
  const onSortChange = (value) => {
    setIsValue(value);
  };

  return (
    <section className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
      <div className="flex flex-wrap gap-3">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            className={`
              px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200
              ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }
              hover:scale-[1.02] active:scale-[0.98]
            `}
            onClick={() => handleCategoryClick(category.id)}>
            {category.name}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <span className="text-gray-600 text-sm font-medium whitespace-nowrap">Сортировать по:</span>
        <div className="relative">
          <select
            className="
              appearance-none bg-white border border-gray-300 rounded-lg
              px-4 py-2.5 pr-10 text-gray-700 text-sm font-medium
              focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
              cursor-pointer hover:border-gray-400 transition-colors
            "
            value={isValue}
            onChange={(e) => {
              onSortChange(e.target.value);
            }}>
            <option value="popular">популярности</option>
            <option value="price">цене</option>
            <option value="name">названию</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
