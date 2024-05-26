import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/homePage";
import SingleProductPage from "./screens/singleProductPage";
import Layout from "./layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products/:id" element={<SingleProductPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
