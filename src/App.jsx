import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { DogGallery } from "./pages/DogGallery";
import { CatGallery } from "./pages/CatGallery";

function App() {
  return (
    <Router>
      <Flex direction="column" minHeight="100vh">
        <Header />
        <Box flex="1">
          <Routes>
            <Route path="/dogs" element={<DogGallery />} />
            <Route path="/cats" element={<CatGallery />} />
            <Route path="*" element={<Navigate to="/dogs" />} />
          </Routes>
        </Box>
        <Footer />
      </Flex>
    </Router>
  );
}

export default App;
