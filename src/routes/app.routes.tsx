import HomeScreen from "@/pages/HomeScreen/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="/" element={<CreateStoryScreen />} /> */}

        <Route path="*" element={<h1>Not found page</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
