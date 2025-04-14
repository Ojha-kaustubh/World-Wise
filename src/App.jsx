import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./components/CityList";

export default function App() {
  const [cities , setCities] = useState({});
  const [isLoading , setIsLoading] = useState(false);

  useEffect( function() {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch('http://localhost:9000/cities');
        const data = await res.json();

        setCities(data);
      } catch (error) {
        console.error(error);
        alert('Error fetching cities');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  },[])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList cities={cities} isLoading={isLoading}/>} />
            <Route path="cities" element={<CityList /> } />
            <Route path="countries" element={<p>Countires</p>} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
