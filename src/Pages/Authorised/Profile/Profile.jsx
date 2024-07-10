import React from "react";
import { useSelector } from "react-redux";
import { Typography, Container, Paper, Grid } from "@mui/material";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "80px",
        padding: "20px",
      }}
    >
      <Paper
        elevation={3}
        style={{ padding: "20px", width: "100%", backgroundColor: "#FFFFF0" }}
      >
        <Typography variant="h2" gutterBottom align="center">
          User Profile
        </Typography>
        {user && (
          <Grid>
            <Typography variant="h4">First Name: {user.first_name}</Typography>
            <Typography variant="h4">Last Name: {user.last_name}</Typography>
            <Typography variant="h4">Email: {user.email}</Typography>
          </Grid>
        )}
      </Paper>
    </Container>
  );
};

export default Profile;
