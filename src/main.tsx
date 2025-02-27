import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Header } from "./components/Header.tsx";
import { Container } from "./components/Container.tsx";
import { Footer } from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>
      <Header />
      <App />
      <Footer/>
    </Container>
  </StrictMode>
);
