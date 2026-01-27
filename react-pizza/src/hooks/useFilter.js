import { useMemo, useState } from 'react';

const useFilter = (initialItems) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const filteredAndSortedItems = useMemo(() => {
    try {
      if (!initialItems || !Array.isArray(initialItems)) {
        console.warn('useFilter: initialItems должен быть массивом');
        return [];
      }

      const filtered = initialItems.filter(
        (item) => item && (activeCategory === 'all' || item.category === activeCategory),
      );

      return [...filtered].sort((a, b) => {
        if (sortBy === 'popular') return (b.rating || 0) - (a.rating || 0);
        if (sortBy === 'price') return (a.price || 0) - (b.price || 0);
        if (sortBy === 'name') return (a.name || '').localeCompare(b.name || '');
        return 0;
      });
    } catch (error) {
      console.error('Ошибка в useFilter:', error);
      return [];
    }
  }, [initialItems, activeCategory, sortBy]);

  return {
    activeCategory,
    setActiveCategory,
    sortBy,
    setSortBy,
    filteredItems: filteredAndSortedItems,
  };
};

export default useFilter;
