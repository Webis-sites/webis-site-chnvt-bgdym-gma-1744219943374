'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';
import clsx from 'clsx';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
}

const DUMMY_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "חולצת טי קלאסית",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
    category: "חולצות",
    isNew: true
  },
  {
    id: 2,
    name: "ג'ינס סקיני",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    category: "מכנסיים"
  },
  {
    id: 3,
    name: "שמלת קיץ פרחונית",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
    category: "שמלות",
    isSale: true,
    discount: 15
  },
  {
    id: 4,
    name: "חולצת פולו אלגנטית",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99",
    category: "חולצות"
  },
  {
    id: 5,
    name: "מכנסי כותנה קלאסיים",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
    category: "מכנסיים",
    isNew: true
  },
  {
    id: 6,
    name: "שמלת ערב מהודרת",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
    category: "שמלות",
    isSale: true,
    discount: 20
  },
  {
    id: 7,
    name: "חולצת אוברסייז",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254",
    category: "חולצות"
  },
  {
    id: 8,
    name: "מכנסיים קצרים",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
    category: "מכנסיים",
    isNew: true
  }
];

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(DUMMY_PRODUCTS);
  const [activeFilter, setActiveFilter] = useState<string>("הכל");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const categories = ["הכל", ...Array.from(new Set(DUMMY_PRODUCTS.map(product => product.category)))];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    
    if (category === "הכל") {
      setProducts(DUMMY_PRODUCTS);
    } else {
      setProducts(DUMMY_PRODUCTS.filter(product => product.category === category));
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  if (isLoading) {
    return (
      <div className="rtl-direction featured-products-container py-16 px-4 md:px-8 text-right">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">מוצרים מובחרים</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <div 
                key={index}
                className="product-card-skeleton glassmorphism rounded-xl p-4 h-80"
              >
                <div className="animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                  <div className="bg-gray-200 h-4 rounded w-3/4 mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rtl-direction featured-products-container py-16 px-4 md:px-8 text-right" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">מוצרים מובחרים</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">גלו את הפריטים החדשים והמובילים בחנות בגדים גמא</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="filter-tabs flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={clsx(
                "neumorphic-button px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-inner"
                  : "text-gray-700 hover:shadow-md"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              className="product-card glassmorphism rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px]"
              variants={itemVariants}
            >
              <div className="relative product-image-container h-64 overflow-hidden">
                <img 
                  src={`${product.image}?w=500&h=500&fit=crop`} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                
                <div className="absolute top-0 right-0 p-2 space-y-2">
                  {product.isNew && (
                    <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-lg">חדש</span>
                  )}
                  {product.isSale && (
                    <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-lg">
                      {product.discount}% הנחה
                    </span>
                  )}
                </div>

                <div className="product-actions absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex items-center justify-center gap-3 hover:opacity-100">
                  <button className="action-button" aria-label="Quick view">
                    <FiEye />
                  </button>
                  <button className="action-button" aria-label="Add to cart">
                    <FiShoppingCart />
                  </button>
                  <button className="action-button" aria-label="Add to wishlist">
                    <FiHeart />
                  </button>
                </div>
              </div>

              <div className="product-info p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-1">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <div className="price-container">
                    {product.isSale ? (
                      <div className="flex flex-col">
                        <span className="text-red-500 font-bold">₪{(product.price * (1 - (product.discount || 0) / 100)).toFixed(2)}</span>
                        <span className="text-gray-500 text-sm line-through">₪{product.price.toFixed(2)}</span>
                      </div>
                    ) : (
                      <span className="text-gray-800 font-bold">₪{product.price.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="category-tag text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                    {product.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a 
            href="/products" 
            className="view-all-button inline-block px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg"
          >
            לכל המוצרים
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;