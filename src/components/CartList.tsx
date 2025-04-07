
import React from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';
// import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const CartList: React.FC = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
    clearCart,
  } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20 animate-fade-in">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-8">Add some delicious items from our menu!</p>
        <Button asChild className="animate-float">
          <a href="/menu">Browse Menu</a>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Your Order</h2>
        <Button variant="ghost" size="sm" onClick={clearCart} className="text-muted-foreground">
          <Trash2 className="h-4 w-4 mr-2" />
          Clear Cart
        </Button>
      </div>
      
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "p-4 rounded-lg border border-border bg-card/50 animate-slide-up",
              { "animate-delay-100": index % 3 === 1 },
              { "animate-delay-200": index % 3 === 2 }
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between">
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground">₹{item.price} × {item.quantity}</p>
              </div>
              <div className="text-right font-semibold">
                ₹{item.price * item.quantity}
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => removeFromCart(item.id)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                
                <Button
                  variant="outline"
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => increaseQuantity(item.id)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-muted/50 p-4 rounded-lg border border-border">
        
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{cartTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default CartList;
