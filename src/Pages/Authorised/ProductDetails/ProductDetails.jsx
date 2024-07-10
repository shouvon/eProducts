import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProductDetails } from "../../../reducers/ProductSlice";
import {
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Rating,
  CardMedia,
  Slider,
  Chip,
  Grid,
  IconButton,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { ProductDetailsBox } from "./style";

function ProductDetails() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.products);
  console.log(product?.products?.rating);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.products.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.products.images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  return (
    <ProductDetailsBox>
      <CardContent>
        <Grid item key={product.id}>
          <Card
            style={{
              backgroundColor: "#FFFFF0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box style={{ position: "relative" }}>
              <Chip
                label={`${product.products.discountPercentage}% Off`}
                color="primary"
                size="small"
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  fontWeight: "bold",
                  backgroundColor: "#ffd700",
                  color: "#800020",
                }}
              />
              <CardMedia
                component="img"
                style={{ height: "400px" }}
                image={
                  product.products.images
                    ? product.products.images[currentImageIndex]
                    : ""
                }
                alt={product.products.name}
              />
              {product.products.images &&
                product.products.images.length > 1 && (
                  <>
                    <IconButton
                      onClick={handlePrevImage}
                      style={{ position: "absolute", top: "50%", left: 0, color: "#800020" }}
                    >
                      <ArrowBack />
                    </IconButton>
                    <IconButton
                      onClick={handleNextImage}
                      style={{ position: "absolute", top: "50%", right: 0, color: "#800020" }}
                    >
                      <ArrowForward />
                    </IconButton>
                  </>
                )}
            </Box>
            <CardContent>
              <Box display="flex" alignItems="center" mb={1}>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ marginRight: "8px" }}
                >
                  {product.products.title}
                </Typography>
                {product.products.rating && (
                  <Rating
                    name="product-rating"
                    value={product.products.rating}
                    readOnly
                  />
                )}
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                  ml={1}
                >
                  {product?.products?.rating}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="textSecondary"
                gutterBottom
                style={{ fontSize: "12px" }}
              >
                Price: ${product.products.price}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                gutterBottom
                style={{ fontSize: "12px" }}
              >
                Stock:{product.products.stock}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                gutterBottom
                style={{ fontSize: "12px" }}
              >
                Brand:{product.products.brand}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                gutterBottom
                style={{ fontSize: "12px" }}
              >
                Details: {product.products.description}
              </Typography>
              <Box
                style={{
                  marginTop: "8px",
                }}
              >
                <Link to={"/buynow"}>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ backgroundColor: "#800020" }}
                  >
                    Buy Now
                  </Button>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </CardContent>
    </ProductDetailsBox>
  );
}

export default ProductDetails;
