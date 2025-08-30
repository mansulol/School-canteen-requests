// Contexts
import { ThemeProvider } from "./contexts/ThemeContext";
import OrdersContextProvider from "./contexts/OrderContextProvider.jsx";
import WebSocketsContextProvider from "./contexts/WebSocketsContextProvider.jsx";

import RoutesConfig from "./RoutesConfig.jsx";

function App() {
  return (
    <OrdersContextProvider>
      <WebSocketsContextProvider>
        <ThemeProvider>
          <RoutesConfig />
        </ThemeProvider>
      </WebSocketsContextProvider>
    </OrdersContextProvider>
  );
}

export default App;
