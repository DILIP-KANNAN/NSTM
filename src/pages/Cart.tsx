
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartList from '@/components/CartList';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CheckoutForm from '@/components/CheckoutForm';

const Cart = () => {
  const { cartItems } = useCart();
  const [activeTab, setActiveTab] = useState('cart');
  
  const isEmpty = cartItems.length === 0;
  
  const handleProceedToCheckout = () => {
    setActiveTab('checkout');
    window.scrollTo(0, 0);
  };
  
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8 animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-bold">Your Cart</h1>
            <Button asChild variant="ghost" size="sm">
              <Link to="/menu">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Link>
            </Button>
          </div>
          
          <Tabs defaultValue="cart" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="cart">Cart</TabsTrigger>
              <TabsTrigger value="checkout" disabled={isEmpty}>Checkout</TabsTrigger>
            </TabsList>
            
            <TabsContent value="cart" className="space-y-8">
              <CartList />
              
              {!isEmpty && (
                <div className="flex justify-end animate-fade-in">
                  <Button onClick={handleProceedToCheckout}>
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="checkout">
              <div className="space-y-8">
                <div className="bg-card border rounded-lg p-6 animate-fade-in">
                  <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>
                  <CheckoutForm />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
