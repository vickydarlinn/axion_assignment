import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/homePage";
import SingleProductPage from "./screens/singleProductPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/:id" element={<SingleProductPage />} />
    </Routes>
  );
};

export default App;
