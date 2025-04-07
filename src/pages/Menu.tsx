
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryMenu from '@/components/CategoryMenu';
import MenuItemCard from '@/components/MenuItemCard';
import { getItemsByCategory, categories } from '@/data/menuData';

const Menu = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'fries');
  const [items, setItems] = useState(getItemsByCategory(activeCategory));
  
  // Update active category when URL parameter changes
  useEffect(() => {
    if (categoryParam && categories.some(cat => cat.id === categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);
  
  // Update items when active category changes
  useEffect(() => {
    setItems(getItemsByCategory(activeCategory));
    // Update URL without reload
    const newUrl = `/menu${activeCategory ? `?category=${activeCategory}` : ''}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  }, [activeCategory]);

  // Get the active category name for display
  const activeCategoryName = categories.find(cat => cat.id === activeCategory)?.name || '';
  
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Menu</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our selection of delicious snacks
            </p>
          </div>
          
          <CategoryMenu 
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          <div className="mb-8">
            <h2 className="text-primary text-2xl font-bold uppercase inline-block relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-2 before:bg-primary before:rounded-full">
              {activeCategoryName}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <div 
                key={item.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <MenuItemCard item={item} featured={item.featured} />
              </div>
            ))}
          </div>
          
          {items.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Menu;
