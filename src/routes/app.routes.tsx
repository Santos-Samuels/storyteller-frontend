import HomeScreen from "@/pages/HomeScreen/HomeScreen";
import LoginScreen from "@/pages/LoginScreen/LoginScreen";
import ReadStoryScreen from "@/pages/ReadStoryScreen/ReadStoryScreen";
import SignupScreen from "@/pages/RegisterScreen/RegisterScreen";
import StoryListScreen from "@/pages/StoryListScreen/StoryListScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<SignupScreen />} />

        <Route path="/story/create" element={<HomeScreen />} />
        <Route path="/story/list" element={<StoryListScreen />} />
        <Route path="/story/:id/read" element={<ReadStoryScreen />} />
        <Route path="/story/:id/read/shared" element={<ReadStoryScreen />} />
        {/* <Route path="/" element={<CreateStoryScreen />} /> */}

        <Route path="*" element={<h1>Not found page</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
