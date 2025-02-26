import React, { useState, useEffect, useRef } from 'react';
import './SearchBar.css';

const SearchBar = ({ menuItems = [
  { id: 1, name: "Classic Burger", category: "Burgers", price: "₹79" },
  { id: 2, name: "Crunchy Taco", category: "Taco", price: "₹49" },
  { id: 3, name: "Chocolate Shake", category: "Desserts", price: "₹68" },
  { id: 4, name: "Value Combo", category: "Value Meals", price: "₹145" },
  { id: 5, name: "Golden Fries", category: "Fries", price: "₹58" },
  { id: 6, name: "Iced Coffee", category: "Beverages", price: "₹88" }
] }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const filtered = menuItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, []);

  return (
    <div className="search-container" ref={searchRef}>
      <i 
        className="ri-search-line search-icon"
        onClick={() => setIsSearchOpen(true)}
      />
      
      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Search our menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              autoFocus
            />
            {searchQuery && (
              <i
                className="ri-close-line clear-icon"
                onClick={() => setSearchQuery('')}
              />
            )}
          </div>
          
          {searchQuery && (
            <div className="search-results">
              {searchResults.length > 0 ? (
                searchResults.map(item => (
                  <div key={item.id} className="search-result-item">
                    <div className="item-info">
                      <p className="item-name">{item.name}</p>
                      <p className="item-category">{item.category}</p>
                    </div>
                    <div className="item-price">{item.price}</div>
                  </div>
                ))
              ) : (
                <div className="no-results">
                  No items found
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;