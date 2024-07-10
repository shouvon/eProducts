import { styled } from "@mui/material/styles";

export const BuyNowBox = styled("div")({
  marginTop: "64px",
  height: "100vh",
  backgroundColor: "#ffd700",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: "24px",
  ".button": {
    fontWeight: "bold",
    fontSize: "24px",
    backgroundColor: "#800020",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  },
});
