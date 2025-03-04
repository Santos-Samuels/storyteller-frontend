import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/story/create");
  }, []);
  
  return null;
};

export default HomeScreen;
