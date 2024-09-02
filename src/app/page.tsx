"use client";

import {
  IconButton,
  Stack,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import ItemCart from "./item-cart";

export default function Home() {
  const [total, setTotal] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleIncremental = (price: number) => {
    setTotal(prevTotal => prevTotal + 1);
    setTotalPrice(prevTotalPrice => prevTotalPrice + price);
  };

  const handleIncrementaldel = (price: number) => {
    setTotal(prevTotal => Math.max(prevTotal - 1, 0));
    setTotalPrice(prevTotalPrice => Math.max(prevTotalPrice - price, 0));
  };

  const myItems = [
    { itemname: "iPhone15 Pro", price: 41900, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UW1GeTRObi9UaVF4S3FUNERNMWVhZ2FRQXQ2R0JQTk5udUZxTkR3ZVlpSmxYQjVYZHNNY2VTR1JzeGdDU0p5NDBoUVhuTWlrY2hIK090ZGZZbk9HeE1xUVVnSHY5eU9CcGxDMkFhalkvT0NpaDU1ZGJEVWtLTUtjeDlDZWZmZ1lmbW94YnYxc1YvNXZ4emJGL0IxNFp3PT0=&traceId=1" },
    { itemname: "iPhone15", price: 32900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290559"},
    { itemname: "iPad pro", price: 39900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-pro-202405?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1713920820026"},
    { itemname: "iPad air", price: 23900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-air-202405?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1713920820139"},
    { itemname: "iPad", price: 13100, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-ipad-202405?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1714596612326"},
    { itemname: "iPad mini", price: 17900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-card-40-ipad-mini-202109?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1674662574477"},
    { itemname: "MacBook Air", price: 34900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbook-air-13-15-202306?wid=1200&hei=1000&fmt=jpeg&qlt=90&.v=1684262493564"},
    { itemname: "MacBook Pro", price: 56200, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202310?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1699558878477"},
    { itemname: "iMac", price: 48000, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-imac-24-202310?wid=1200&hei=1000&fmt=jpeg&qlt=90&.v=1697229623322"},
    { itemname: "Mac mini", price: 17400, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-mini-202301?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1670549737872"},
    { itemname: "Mac Studio", price: 67400, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-mac-studio-202306?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1683842370512"},
  ];

  return (
    <div>
      <h1>Shopping Cart</h1>
      {/* loop all array object */}
      {myItems &&
        myItems.map((item) => (
          <ItemCart
            key={item.itemname}
            itemname={item.itemname}
            itemPrice={item.price}
            image={item.image}
            handleIncremantal={handleIncremental}
            handleIncremantaldel={handleIncrementaldel}
          />
        ))}
      <Stack direction="row" spacing={2}>
        <Typography variant="h4">Total Items:</Typography>
        <Typography variant="h4">{total}</Typography>
        <Typography variant="h4">Total Price:</Typography>
        <Typography variant="h4">{totalPrice.toLocaleString()} THB</Typography>
      </Stack>
    </div>
  );
}
