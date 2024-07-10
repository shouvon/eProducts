import { styled } from "@mui/material/styles";

export const FooterBox = styled("div")({
  backgroundColor: "#191970",
  color: "white",
  padding: "50px 0",
  position: "relative",
  bottom: "0",
  top: "auto",
  width: "100%",

  ".contentWrapper": {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  ".menuItems": {
    listStyleType: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
    "@media (min-width: 768px)": {
      marginBottom: "30px",
      gap: "30px",
    },
    ".menuItem": {
      transition: "all ease 0.3s",
      cursor: "pointer",
      fontSize: "12px",
      "@media (min-width: 768px)": {
        fontSize: "16px",
      },
      "&:hover": {
        color: "#ffd700",
      },
    },
  },
  ".infoText": {
    fontSize: "12px",
    lineHeight: "20px",
    opacity: "0.5",
    textAlign: "center",
    maxWidth: "800px",
    marginBottom: "20px",
    "@media (min-width: 768px)": {
      fontSize: "14px",
      marginBottom: "30px",
    },
  },
  ".socialIcons": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    ".icon": {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "#800020",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all ease 0.3s",
      "&:hover": {
        boxShadow:  "0 0 0.625em #da2f68",
        color: "#ffd700",
      },
    },
  },
});
