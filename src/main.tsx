import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Toaster} from '@/components/ui/toaster.tsx'
import "./index.css";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster/>
    </QueryClientProvider>
  </React.Fragment>
);
