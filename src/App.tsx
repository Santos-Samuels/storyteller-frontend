import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "./context/AppContext";
import AppRoutes from "./routes/app.routes";
import theme from "./style/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <AppRoutes />
          <ToastContainer position="bottom-right" />
        </AppProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
