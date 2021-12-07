import Recipes from "./components/Recipes";
import Navbar from "./layout/Navbar";
import { Routes, Route } from 'react-router-dom'
import Recipe from "./components/Recipe";
import Footer from "./layout/Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState('')
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar setSearch={setSearch} />

      <Routes>
        <Route path='/' element={<Recipes search={search} />} />
        <Route path='/recipe/:id' element={<Recipe />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;