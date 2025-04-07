import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ShoppingBag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UnavailableServices = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-16 flex items-center justify-center bg-background">
        <div className="container max-w-2xl">
          <div className="bg-card border border-primary/30 rounded-lg p-8 text-center animate-slide-up relative overflow-hidden">
            <div className="absolute top-5 right-5 opacity-30 pointer-events-none">
              <img 
                src="/lovable-uploads/258448d8-c0fb-47e6-818c-bd07111c77e2.png" 
                alt="" 
                className="w-24 h-24 object-contain"
              />
            </div>
            
            <div className="mb-8">
              <div className="inline-block text-5xl mb-6">🍟</div>
              <h1 className="text-3xl font-bold mb-4 text-primary">Service Currently Unavailable</h1>
              <div className="text-muted-foreground space-y-4">
                <p className="text-lg">
                  Thank you for spending time exploring our site! We're deeply grateful for your interest in NSTM.
                </p>
                <p>
                  We're working passionately behind the scenes to bring our delicious snacks to your doorstep. The warmth and excitement you've shown means the world to us.
                </p>
                <p>
                  Our team is putting their heart and soul into perfecting every recipe, ensuring when we officially launch, your taste buds will experience nothing short of extraordinary.
                </p>
                <p className="text-lg font-medium text-primary/90 mt-6">
                  We look forward to welcoming you at our next depot, where flavors and memories await creation!
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="flex-1 sm:flex-initial bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="flex-1 sm:flex-initial border-primary/50 text-primary hover:bg-primary/10">
                <Link to="/menu">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Explore Menu
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UnavailableServices;
