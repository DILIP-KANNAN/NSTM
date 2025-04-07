
export type MenuItem = {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  category: 'fries' | 'nuggets' | 'samosa' | 'momos' | 'rolls' | 'nachos' | 'combo';
  featured?: boolean;
};

export type CartItem = MenuItem & {
  quantity: number;
};

export const menuItems: MenuItem[] = [
  // FRIES
  {
    id: 'fries-classic',
    name: 'Classic Salted Fries',
    price: 70,
    description: 'Perfectly crispy golden fries with a sprinkle of salt',
    category: 'fries',
    image: 'menu/classic salted fries.webp'
  },
  {
    id: 'fries-spicy',
    name: 'Spicy Fries',
    price: 80,
    description: 'Hot and spicy fries with our special seasoning',
    category: 'fries',
    image: 'menu/spicy fries.webp'
  },
  {
    id: 'fries-peri',
    name: 'Peri Peri Fries',
    price: 90,
    description: 'Crispy fries tossed in our signature peri peri spice mix',
    category: 'fries',
    featured: true,
    image: 'menu/peri peri fries.webp'
  },
  {
    id: 'fries-cheese',
    name: 'Cheese Fries',
    price: 100,
    description: 'Golden fries topped with melted premium cheese',
    category: 'fries',
    featured: true,
    image: 'menu/Cheese fries.webp'
  },
  {
    id: 'fries-loaded',
    name: 'Loaded Fries',
    price: 140,
    description: 'Hot fries loadedwith Cheese, Salsa and other Dips',
    category: 'fries',
    image: 'menu/loaded fries.webp'
  },
  // NUGGETS
  {
    id: 'nuggets-corn',
    name: 'Cheese-Corn Nuggets',
    price: 90,
    description: 'Crispy golden nuggets filled with sweet corn and cheese',
    category: 'nuggets',
    image: 'menu/nuggets.webp'
  },
  {
    id: 'nuggets-smilies',
    name: 'Smilies (5 pcs)',
    price: 90,
    description: 'Smile-shaped potato nuggets, a favorite with kids',
    category: 'nuggets',
    image: 'menu/smilies.webp'
  },
  {
    id: 'nuggets-cheeseball',
    name: 'Cheese Balls (6 pcs)',
    price: 80,
    description: 'Cheese filled crispy balls, topped with periperi flavor',
    category: 'nuggets',
    image: 'menu/cheese balls.webp'
  },
  
  // SAMOSA
  {
    id: 'samosa-veg',
    name: 'Veg Samosa (2 pcs)',
    price: 30,
    description: 'Crispy triangular pastry filled with spiced vegetables',
    category: 'samosa',
    featured: true,
    image: 'menu/veg samosa.webp'
  },
  {
    id: 'samosa-paneer',
    name: 'Paneer Samosa (2 pcs)',
    price: 40,
    description: 'Crispy pastry filled with spiced paneer stuffing',
    category: 'samosa',
    image: 'menu/panner samosa.webp'
  },
  
  // MOMOS
  {
    id: 'momos-classic',
    name: 'Classic Veg Momos (Steamed/Fried)',
    price: 90,
    description: 'Soft dumplings filled with spiced vegetables',
    category: 'momos',
    featured: true,
    image: 'menu/veg momos.webp'
  },
  {
    id: 'momos-paneer',
    name: 'Paneer Momos (Steamed/Fried)',
    price: 100,
    description: 'Soft dumplings filled with spiced paneer',
    category: 'momos',
    image: 'menu/panner momos.webp'
  },
  {
    id: 'momos-cheese',
    name: 'Corn and Cheese Momos (Steamed/Fried)',
    price: 110,
    description: 'Soft dumplings filled with corn and cheese',
    category: 'momos',
    featured: true,
    image: 'menu/cheese corn momos.webp'
  },
  {
    id: 'momos-mushroom',
    name: 'Mushroom Momos (Steamed/Fried)',
    price: 110,
    description: 'Soft dumplings filled with spiced mushrooms',
    category: 'momos',
    image: 'menu/mushroom momos.webp'
  },
  {
    id: 'sauted-mushroom',
    name: 'Pan Sauted Momos (Steamed/Fried)',
    price: 140,
    description: 'Hot Momos sauted with special sauses in a pan, with spicy and tangy flavors',
    category: 'momos',
    featured: true,
    image: 'menu/saute momo.webp'
  },
  // ROLLS
  {
    id: 'rolls-spring',
    name: 'Spring Roll (2 pcs)',
    price: 50,
    description: 'Crispy rolls filled with vegetables and noodles',
    category: 'rolls',
    image: 'menu/veg roll.webp'
  },
  {
    id: 'rolls-paneer',
    name: 'Paneer Roll (2 pcs)',
    price: 70,
    description: 'Crispy rolls filled with spiced paneer',
    category: 'rolls',
    image: 'menu/panner roll.webp'
  },
  {
    id: 'nachos',
    name: 'Nachos',
    price: 80,
    description: 'Crispy Nachos loaded with cheese dip, salsa and other',
    category: 'nachos',
    image: 'menu/nachos.webp'
  },
  {
    id: 'loaded chips',
    name: 'Loaded Chips',
    price: 50,
    description: 'Dont eat just old boring chips, enjoy our dipsand salsa with floating cheese.',
    category: 'nachos',
    image: 'menu/loaded chips.webp'
  },
    {
      "id": "spicy-cheesy-delight",
      "name": "Spicy & Cheesy Delight",
      "price": 180,
      "description": "A flavorful duo of Peri Peri Fries and Corn Cheese Momos.",
      "category": "combo",
      "featured": false,
      "image": "menu/spice and cheese.webp"
    },
    {
      "id": "paneer-fusion-feast",
      "name": "Paneer Fusion Feast",
      "price": 200,
      "description": "A fulfilling combo of a Paneer Roll and Pan Sautéed Momos.",
      "category": "combo",
      "featured": false,
      "image": "menu/panner fusion.webp"
    },
    {
      "id": "crispy-cheesy-feast",
      "name": "Crispy & Cheesy Feast",
      "price": 260,
      "description": "A delightful combo of Peri Peri Fries, Mushroom Momos, and Cheese Balls.",
      "category": "combo",
      "featured": true,
      "image": "menu/crispy and cheese.webp"
    },
    {
      "id": "street-food-special",
      "name": "Street Food Special",
      "price": 130,
      "description": "A delicious mix of Spring Rolls, Paneer Samosa, and Loaded Chips.",
      "category": "combo",
      "featured": true,
      "image": "menu/street food.webp"
    },
    {
      "id": "crispy-treat-combo",
      "name": "Crispy Treat Combo",
      "price": 180,
      "description": "A crunchy combination of Cheese Fries and Corn & Cheese Nuggets.",
      "category": "combo",
      "featured": true,
      "image": "menu/crispy treat.webp"
    }
];

export const categories = [  
  { id: 'fries', name: 'FRIES', icon: '🍟' },
  { id: 'nuggets', name: 'NUGGETS', icon: '🧆' },
  { id: 'samosa', name: 'SAMOSA', icon: '🔺' },
  { id: 'momos', name: 'MOMOS', icon: '🥟' },
  { id: 'rolls', name: 'ROLLS', icon: '🌯' },
  { id: 'nachos', name: 'NACHOS', icon: '🌮'},
  {id: 'combo' , name: 'COMBOS', icon: '📊'}
];

export function getItemsByCategory(category: string): MenuItem[] {
  return menuItems.filter(item => item.category === category);
}

export function getFeaturedItems(): MenuItem[] {
  return menuItems.filter(item => item.featured);
}

export function getItemById(id: string): MenuItem | undefined {
  return menuItems.find(item => item.id === id);
}
