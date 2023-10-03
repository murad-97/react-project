import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
export default function PriceRange(props) {
  return (
    <div className="sidebar-range mt-40">
      <h5 className="categorie-head">Price Range</h5>
      <Box sx={{ width: props.width }}>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          sx={{ color: props.color }}
        />
      </Box>
    </div>
  );
}
