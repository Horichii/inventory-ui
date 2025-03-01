// src/pages/Home.js
import { Container } from "@mui/material";
import HomeContent from '../components/dashboard/HomeContent';

const Home = () => {
  return (
    <Container maxWidth="xl">
      <HomeContent />
      {/* Add more sections here as needed */}
    </Container>
  );
};

export default Home;