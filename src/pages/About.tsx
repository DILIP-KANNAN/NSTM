
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <section className="py-16 bg-muted/30 animate-fade-in">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About Us</h1>
              <p className="text-lg text-muted-foreground">
                We are passionate about serving delicious snacks that bring joy to every bite.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  From sitting through AIML classes, bored and uninspired, to searching for light in food—our journey began. We, the people of NSTM, decided to shake things up, embracing the unknown to create something truly our own.
                </p>
                <p className="text-muted-foreground mb-4">
                But this journey isn’t just about food—it’s about learning, adapting, and mastering the art of handling pressure with ease. And guess what? We made it look like a cakewalk.
                </p>
                <p className="text-muted-foreground">
                  Today, we continue to uphold our commitment to quality and taste, while expanding our menu to include more delicious options for our valued customers.
                </p>
                <br/>
                <h3 className="text-center text-lg">See you at Recharge 2025! 🚀🔥</h3>
              </div>
              
              <div className="bg-muted rounded-lg overflow-hidden h-[400px] animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <img 
                  src="/nstm group.webp" 
                  alt="Our restaurant" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border animate-slide-up">
                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  We never compromise on the quality of our ingredients. Every item on our menu is made with fresh, premium ingredients.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg border border-border animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our top priority. We strive to exceed your expectations with every order.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg border border-border animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously improve our recipes and explore new flavors to bring you exciting culinary experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The passionate people behind your favorite snacks
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[
                { name: "Dilip Kannan K", role: "Executive Chef & Culinary Strategist" },
                { name: "Giridhar U", role: "Head Chef & Business Operations Lead" },
                { name: "Ezhil Adhithya P", role: "Food Aesthetic Curator & Presentation Expert" },
                { name: "Amirtha", role: "Gastronomy Designer & Flavor Stylist" },
                { name: "Adharsh S", role: "Billing Maestro & Order Flow Coordinator" },
                { name: "Ishana S", role: "Finance & Customer Experience Architect" },
                { name: "Meenakshi G", role: "Cash Flow Specialist & Guest Engagement" },
                { name: "Aravind s", role: "Plating Perfectionist & Dining Experience Specialist" },
                { name: "Lokesh Raj J", role: "Food Aesthetic Curator & Presentation Expert" },
                { name: "Ragul", role: "Video Editor | Turning Vision into Motion" },
              ].map((member, i) => (
                <div
                  key={i}
                  className="bg-card p-6 rounded-lg border border-border text-center animate-slide-up transition-transform duration-300 ease-in-out hover:scale-105"
                  style={{ animationDelay: `${i * 0.1}s`, transformStyle: "preserve-3d", }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "perspective(500px) rotateY(2deg) scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "perspective(500px) rotateY(0deg) scale(1)")}
                >
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold mb-1">{member.name}</h2>
                  <h5 className="text-accent mb-3">{member.role}</h5>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default About;
