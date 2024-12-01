"use client"; // Đảm bảo đây là Client Component

import React, { useState } from "react";
import { Rate } from "antd";

const Rating = ({ defaultValue = 5, onChange }) => {
  const [rating, setRating] = useState(defaultValue);

  const handleRating = (value) => {
    setRating(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Rate
      style={{ color: "#ffb33e" }}
      allowHalf
      defaultValue={defaultValue}
      onChange={handleRating}
    />
  );
};

export default Rating;
