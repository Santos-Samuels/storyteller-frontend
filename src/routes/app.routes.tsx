import HomeScreen from "@/pages/HomeScreen/HomeScreen";
import LoginScreen from "@/pages/LoginScreen/LoginScreen";
import NotFoundScreen from "@/pages/NotFoundScreen/NotFoundScreen";
import ReadStoryScreen from "@/pages/ReadStoryScreen/ReadStoryScreen";
import RegisterScreen from "@/pages/RegisterScreen/RegisterScreen";
import StoryCreationScreen from "@/pages/StoryCreationScreen/StoryCreationScreen";
import StoryListScreen from "@/pages/StoryListScreen/StoryListScreen";
import UnauthorizedScreen from "@/pages/UnauthorizedScreen/UnauthorizedScreen";
import UserProfileScreen from "@/pages/UserProfileScreen/UserProfileScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<LoginScreen />} />
        <Route path="/auth/register" element={<RegisterScreen />} />

        <Route path="/" element={<HomeScreen />} />
        <Route path="/story/create" element={<StoryCreationScreen />} />
        <Route path="/story/list" element={<StoryListScreen />} />
        <Route path="/story/:id/read" element={<ReadStoryScreen />} />
        <Route path="/story/:id/read/shared" element={<ReadStoryScreen isShared={true} />} />

        <Route path="/user/profile" element={<UserProfileScreen />} />

        <Route path="*" element={<NotFoundScreen />} />
        <Route path="/unauthorized" element={<UnauthorizedScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
