
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import MenuItemCard from '@/components/MenuItemCard';
import { getFeaturedItems } from '@/data/menuData';
import { categories } from '@/data/menuData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const featuredItems = getFeaturedItems();
  
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary to-background"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight md:leading-tight tracking-tight animate-slide-down">
                Delicious Snacks, <span className="text-accent">Quick at Service</span>
              </h2>
              
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance animate-slide-down" style={{ animationDelay: '0.1s' }}>
                From crispy fries to delectable momos, we've got all your favorite snacks covered. Order now so that you don't wait at the ever lasting queue.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-slide-down" style={{ animationDelay: '0.2s' }}>
                <Button asChild size="lg" className="font-medium text-base">
                  <Link to="/menu">
                    Browse Menu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="font-medium text-base">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 animate-fade-in">Our Categories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Explore our diverse range of delicious snacks
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category, index) => (
                <Link 
                  key={category.id} 
                  to={`/menu?category=${category.id}`}
                  className="bg-card hover:bg-accent/10 border border-border rounded-lg p-6 text-center transition-all hover:shadow-md hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-medium">{category.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Items Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 animate-fade-in">Customer Favorites</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Our most popular and loved snacks
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <MenuItemCard item={item} featured={true} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg">
                <Link to="/menu">View Full Menu</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 animate-fade-in">Why Choose Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
                We pride ourselves on quality, taste, and service
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg border border-border animate-slide-up">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-semibold mb-2">Freshly Made</h3>
                <p className="text-muted-foreground">All our items are freshly prepared when you place your order.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-semibold mb-2">Lovely Service</h3>
                <p className="text-muted-foreground">We provide one of the finest costumer service taking complete care.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl mb-4">💯</div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">We use only the finest ingredients for an exceptional taste experience.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-secondary/20"></div>
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to satisfy your cravings?</h2>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Order now and enjoy delicious snacks delivered straight to your doorstep.
              </p>
              <Button asChild size="lg" className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Link to="/menu">Order Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
