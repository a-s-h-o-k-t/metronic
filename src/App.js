import ThemeCustomization from "./themes";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { SidebarProvider } from "./contexts/SidebarContext";

function App() {
  return (
    <ThemeCustomization>
      <BrowserRouter>
        <SidebarProvider>
          <Routes />
        </SidebarProvider>
      </BrowserRouter>
    </ThemeCustomization>
  );
}

export default App;
