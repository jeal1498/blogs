import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const TDAHNinos = lazy(() => import("./pages/TDAHNinos"));
const TDAHAdultos = lazy(() => import("./pages/TDAHAdultos"));
const AutismoCancun = lazy(() => import("./pages/AutismoCancun"));
const BlogCostTDAH = lazy(() => import("./pages/blog/CuantoCuestaValoracionTDAH"));
const BlogTDAHNinas = lazy(() => import("./pages/blog/TDAHNinas"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-soft-gradient" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/evaluacion-tdah-ninos" element={<TDAHNinos />} />
            <Route path="/evaluacion-tdah-adultos" element={<TDAHAdultos />} />
            <Route path="/evaluacion-autismo-cancun" element={<AutismoCancun />} />
            <Route path="/blog/cuanto-cuesta-valoracion-tdah-cancun" element={<BlogCostTDAH />} />
            <Route path="/blog/tdah-en-ninas-sintomas" element={<BlogTDAHNinas />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
