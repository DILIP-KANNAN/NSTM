
import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryMenuProps {
  categories: { id: string; name: string; icon?: string }[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide mb-8">
      <div className="flex space-x-2 pb-2 px-1 min-w-min">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
              activeCategory === category.id
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-primary/20"
            )}
          >
            <span className="flex items-center space-x-2">
              {category.icon && <span className="text-lg">{category.icon}</span>}
              <span>{category.name}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
