import { styled } from "@mui/material/styles";

export const ProductListBox = styled("div")({
  marginTop: "64px",
  backgroundColor: "#ffd700",
  display: "flex",


  ".loading": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  },

  ".pagination": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "16px",
    ".Mui-selected":{
      backgroundColor: "#800020"
    }
  } ,
});
