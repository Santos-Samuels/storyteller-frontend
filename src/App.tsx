import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "swiper/css";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import AppRoutes from "./routes/app.routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
