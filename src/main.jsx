import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { ProductsProvider } from "./contexts/ProductsProvider";
import AuthProvider from "./contexts/AuthProvider.jsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <App />
        <Toaster position="top-right" richColors />
      </ProductsProvider>
    </AuthProvider>
  </StrictMode>,
);
