import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="order" element={<Order />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
