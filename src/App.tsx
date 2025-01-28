import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
        </AppProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
