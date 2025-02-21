// src/pages/Home.js
import { Container } from "@mui/material";
import WelcomeSection from '../components/dashboard/WelcomeSection';

const Home = () => {
  return (
    <Container maxWidth="xl">
      <WelcomeSection />
      {/* Add more sections here as needed */}
    </Container>
  );
};

export default Home;