import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "@/context/CartContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Index from "./pages/Index";
import SignatureScents from "./pages/SignatureScents";
import SeaOfPerfumes from "./pages/SeaOfPerfumes";
import OrientalOils from "./pages/OrientalOils";
import MakeYourOwnBrand from "./pages/MakeYourOwnBrand";
import Wholesale from "./pages/Wholesale";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/signature-scents" element={<SignatureScents />} />
                <Route path="/sea-of-perfumes" element={<SeaOfPerfumes />} />
                <Route path="/oriental-oils" element={<OrientalOils />} />
                <Route path="/make-your-own-brand" element={<MakeYourOwnBrand />} />
                <Route path="/wholesale" element={<Wholesale />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
