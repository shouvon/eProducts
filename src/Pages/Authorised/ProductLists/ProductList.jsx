import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../reducers/ProductSlice";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
  Rating,
  CircularProgress,
  Container,
  Pagination,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { ProductListBox } from "./style";
import { Link } from "react-router-dom";
import { addToCart } from "../../../reducers/CartSlice";

const itemPerPage = 8;

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const startIndex = (page - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  let currentData = [];

  if (Array.isArray(products)) {
    if (selectedCategory) {
      currentData = products
        .filter((product) => product.category === selectedCategory)
        .slice(startIndex, endIndex);
    } else {
      currentData = products.slice(startIndex, endIndex);
    }
  }

  const categories = [];

  if (Array.isArray(products)) {
    products.forEach((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    });
  }

  console.log(categories);

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPage(1);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    dispatch(addToCart(productToAdd));
  };

  return (
    <ProductListBox>
      <Box
        sx={{
          // backgroundColor: "#FFFFF0",
          width: 200,
        }}
      >
        <List>
          <ListItem button onClick={() => handleCategoryChange(null)}>
            <ListItemText>
              <Typography variant="h4" fontWeight="bold">
                All Categories
              </Typography>
            </ListItemText>
          </ListItem>
          {categories.map((category) => (
            <ListItem
              key={category}
              button
              onClick={() => handleCategoryChange(category)}
            >
              <ListItemText primary={category} sx={{ "span": {fontSize: "15px"} }} />

            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{width: "calc(100% - 200px)"}}>
        {loading ? (
          <Container className="loading">
            <CircularProgress />
          </Container>
        ) : (
          <Grid container spacing={3}>
            {currentData &&
              currentData.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Card style={{ backgroundColor: "#FFFFF0" }}>
                    <Box style={{ position: "relative" }}>
                      <Chip
                        label={`${product.discountPercentage.toFixed(0)}% Off`}
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
                        style={{ height: "190px" }}
                        image={product.thumbnail}
                        alt={product.name}
                      />
                    </Box>
                    <CardContent>
                      <Box display="flex" alignItems="center" mb={1}>
                        <Typography
                          variant="h5"
                          component="h2"
                          style={{ marginRight: "8px" }}
                        >
                          {product.title.slice(0, 20)}
                        </Typography>
                        <Rating
                          name="product-rating"
                          value={product.rating}
                          readOnly
                        />
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="span"
                          ml={1}
                        >
                          ({product.rating})
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        gutterBottom
                        style={{ fontSize: "12px" }}
                      >
                        Price: ${product.price}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        Details: {product.description.slice(0, 30)}
                        <Link
                          to={`/details/${product.id}`}
                          style={{ color: "#800020" }}
                        >
                          View Details
                        </Link>
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
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
                        <Button
                          onClick={() => handleAddToCart(product.id)}
                          variant="contained"
                          color="primary"
                          style={{ backgroundColor: "#191970" }}
                        >
                          Add to Cart
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            <Grid item xs={12}>
              <Pagination
                className="pagination"
                color="primary"
                onChange={handlePageChange}
                count={Math.ceil(products.length / itemPerPage)}
                page={page}
              />
            </Grid>
          </Grid>
        )}
      </Box>
    </ProductListBox>
  );
};

export default ProductList;
