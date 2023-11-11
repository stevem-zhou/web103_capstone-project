import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CoursePage from "./pages/CoursePage";

export default function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/course/:id" element={<CoursePage />} />
      </Routes>
    </ChakraProvider>
  );
}
