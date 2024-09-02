"use client";
import {
  IconButton,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

export default function ItemCart({
  itemname,
  itemPrice,
  image,
  handleIncremantal,
  handleIncremantaldel,
}: {
  itemname: string;
  itemPrice: number;
  image?: string;
  handleIncremantal: (price: number) => void;
  handleIncremantaldel: (price: number) => void;
}) {
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
    
  const handleAddItemClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    const newTotalPrice = newCount * itemPrice;
    setTotalPrice(newTotalPrice);
    handleIncremantal(itemPrice);
  };

  const handleRemoveItemClick = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      const newTotalPrice = newCount * itemPrice;
      setTotalPrice(newTotalPrice);
      handleIncremantaldel(itemPrice);
    }
  };

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={3} md={2}>
        {image && <img src={image} alt={itemname} style={{ width: "100%" }} />}
      </Grid>
      <Grid item xs={9} md={10}>
        <Typography variant="h6">{itemname}</Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton onClick={handleRemoveItemClick}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6">{count}</Typography>
          <IconButton onClick={handleAddItemClick}>
            <AddIcon />
          </IconButton>
          <Typography variant="h6">{totalPrice.toLocaleString()} THB</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
