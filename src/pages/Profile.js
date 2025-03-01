// src/pages/Profile.js
import { Container } from "@mui/material";
import ProfileComponent from "../components/dashboard/ProfileComponent";

const Profile = () => {
  return (
    <Container maxWidth="xl">
      <ProfileComponent />
      {/* Add more sections here as needed */}
    </Container>
  );
};

export default Profile;