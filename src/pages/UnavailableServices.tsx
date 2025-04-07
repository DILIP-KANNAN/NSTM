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
                  Owning a brand with zero experience and no real-world exposure, sounda crazy, right? From casually joking about launching our own food stall at RECHARGE'25 to hustling for stock, every step was a thrilling ride. Bunking classes didn't feel as cool as brainstorming at the front bench, turning our ideas into reality.
                </p>
                <p>
                  But none of this would have been possible without you, the amazing people of REC who stopped by, grabbed a bite and made our stall come alive. We never had a dull moment and special shoutout to those who kept coming back for more.
                </p>
                <p className="text-lg font-medium text-primary/90 mt-6">
                  It's time to say a huge, heartfelt thank you for making this journey unforgettable. Until next time, it's NSTM here, signing off...
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
