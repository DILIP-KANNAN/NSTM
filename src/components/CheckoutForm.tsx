
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select'; 
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const CheckoutForm: React.FC = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const testFirestore = async () => {
    try {
      //await addDoc(collection(db, "testCollection"), { test: "Hello Firestore!" });
      console.log("Firestore is working!");
    } catch (error) {
      console.error("Error writing to Firestore:", error);
    }
  };
  
  testFirestore();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (field: "date" | "time", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      toast({
        title: 'Incomplete information',
        description: 'Please fill all the required fields',
        variant: 'destructive',
      });
      return;
    }

    handlePayment();
    // Simulate an order process
    setIsSubmitting(true);
    
      toast({
        title: 'Order Placed Successfully!',
        description: 'Your delicious food is on the way',
      });
      
      //clearCart();
      setIsSubmitting(false);
      
      // Navigate to success page
       navigate('/order-success', { 
         state: { 
           orderNumber: `FD${Math.floor(Math.random() * 10000)}`,
           total: cartTotal,
           date: formData.date,
           time: formData.time
         } 
        });
  };
  const handlePayment = () => {
    const options = {
      key: "rzp_live_jQtQ2WA25lyB4q", // Use your Razorpay test key
      amount: cartTotal * 100, // Convert total amount to paise
      currency: "INR",
      name: "NSTM Foods",
      description: "Payment for your order",
      prefill: {
        name: formData.name,
        contact: formData.phone,
      },
      handler: async function (response) {
        console.log("Payment Successful:", response);
  
        // Save order details to Firestore
        try {
          await addDoc(collection(db, "preorders"), {
            customerName: formData.name,
            phoneNumber: formData.phone,
            date: formData.date,
            time: formData.time,
            orderItems: cartItems.map(item => ({
              name: item.name,
              quantity: item.quantity
            })),
            totalAmount: cartTotal,
            paymentId: response.razorpay_payment_id,
            timestamp: new Date(),
          });navigate('/order-success', { 
            state: { 
              orderNumber: `FD${Math.floor(Math.random() * 10000)}`,
              total: cartTotal,
              date: formData.date,
              time: formData.time
            } 
           });

          const sheetUrl = "https://script.google.com/macros/s/AKfycbzil11Noo9zPd2JglK6E0bShm8HYGG8qkLl9nrV0RqSB0sO7OUAwWtPnOK90P8HYbXnnA/exec";
            fetch(sheetUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                name: formData.name,
                phone: formData.phone,
                date: formData.date,
                time: formData.time,
                items: cartItems.map(item => ({
                  name: item.name,
                  quantity: item.quantity
                })),
                total: cartTotal,
                paymentId: response.razorpay_payment_id
              })
            });
  
          toast({
            title: "Pre-Order Confirmed!",
            description: "Your order is successfully placed.",
          });
  
          // Clear cart after successful order
          clearCart();
          navigate("/order-success");
        } catch (error) {
          console.error("Error saving order:", error);
        }
      },
      theme: {
        color: "#F37254",
      },
    };
  
    if (typeof window !== "undefined" && window.Razorpay) {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      console.error("Razorpay SDK failed to load.");
    }    
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          type="tel"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="date">Select Date</Label>
        <Select onValueChange={(value) => handleSelectChange("date", value)} required>
          <SelectTrigger>{formData.date || "Choose a date"}</SelectTrigger>
          <SelectContent>
            <SelectItem value="13th March">13th March</SelectItem>
            <SelectItem value="14th March">14th March</SelectItem>
            <SelectItem value="15th March">15th March</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="time">Select Time Slot</Label>
        <Select onValueChange={(value) => handleSelectChange("time", value)} required>
    <SelectTrigger>{formData.time || "Choose a time slot"}</SelectTrigger>
    <SelectContent>
      {Array.from({ length: 12 }, (_, i) => {
        const hour = 9 + i;
        const period = hour < 12 ? "AM" : "PM";
        const displayHour = hour <= 12 ? hour : hour - 12;
        return (
          <SelectItem key={hour} value={`${displayHour}:00 - ${displayHour + 1}:00 ${period}`}>
            {displayHour}:00 - {displayHour + 1}:00 {period}
          </SelectItem>
        );
      })}
    </SelectContent>
  </Select>
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Place Order"}
      </Button>
    </form>
  );
};

export default CheckoutForm;
