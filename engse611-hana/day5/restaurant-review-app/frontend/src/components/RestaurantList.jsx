import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import { getRestaurants,getRandomRestaurant } from "../services/api";

function RestaurantList({ onSelectRestaurant }) {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    minRating: "",
    priceRange: "",
  });

  useEffect(() => {
    fetchRestaurants();
  }, [filters]); // เรียกใหม่เมื่อ filters เปลี่ยน

  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      setError(null);

      // TODO: เรียก API ด้วย getRestaurants(filters)
      const result = await getRestaurants(filters);
      setRestaurants(result.data);
    } catch (err) {
      setError("ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (searchTerm) => {
    setFilters({ ...filters, search: searchTerm });
    // await fetchRestaurants(); // เรียก API ใหม่เมื่อมีการเปลี่ยนแปลง search
  };

  const handleFilterChange = async (newFilters) => {
    await setFilters({ ...filters, ...newFilters });
    // await fetchRestaurants(); // เรียก API ใหม่เมื่อมีการเปลี่ยนแปลง filter
  };

  const getRandomRestaurant1 = async () => {
    setRestaurants([]);
    const ramdomRes = await getRandomRestaurant();
    setRestaurants([ramdomRes.data]);
  };

  if (loading) return <div className="loading">กำลังโหลด...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="restaurant-list-container">
      <SearchBar onSearch={handleSearch} />
      <button style={{backgroundColor: 'lightblue'}} onClick={getRandomRestaurant1}>🎲 สุ่มร้านอาหาร</button>
      <FilterPanel onFilterChange={handleFilterChange} filters={filters} />

      {restaurants.length === 0 ? (
        <p className="no-results">ไม่พบร้านอาหารที่ค้นหา</p>
      ) : (
        <div className="restaurant-grid">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onClick={onSelectRestaurant}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default RestaurantList;
