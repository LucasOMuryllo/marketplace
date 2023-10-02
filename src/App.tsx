import React, { useEffect, useState } from "react";
import { NavbarSimple } from "./components/Navbar";
import { FooterWithSocialLinks } from "./components/FooterWithSocialLinks";
import ProductList from "./components/ProductList";
import data from "./data.json";
import SidebarWithSearch from "./components/SidebarWithSearch";

// Defina o tipo do produto
interface Product {
  name: string;
  image_url: string;
  type: string;
  price: number;
  seller: string;
  available_sizes: string[];
  details: string;
  sport: string;
}

// Defina a tipagem do estado
type FilterTypes = {
  Acessorio: boolean;
  Camiseta: boolean;
  Calcao: boolean;
  Regata: boolean;
};

function App() {
  const [, setOriginalProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [, setSearchTerm] = useState("");
  const [, setFilters] = useState<FilterTypes>({
    Acessorio: false,
    Camiseta: false,
    Calcao: false,
    Regata: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      setOriginalProducts(data);
      setProducts(data);
    };

    fetchData();
  }, []);

  const handleSearch = (term: string, filter: keyof FilterTypes) => {
    setSearchTerm(term);
    setFilters((prevFilters) => ({ ...prevFilters, [filter]: !prevFilters[filter] }));
  };

  return (
    <main className="App">
      <NavbarSimple />
      <div className="flex">
        <SidebarWithSearch onSearch={handleSearch} />
        <ProductList products={products} />
      </div>
      <FooterWithSocialLinks />
    </main>
  );
}

export default App;
