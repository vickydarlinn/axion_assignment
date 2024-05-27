import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/homePage";
import SingleProductPage from "./screens/singleProductPage";
import Layout from "./layout";
import ComingSoon from "./screens/comingSoon";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products/:id" element={<SingleProductPage />} />
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
};

export default App;
