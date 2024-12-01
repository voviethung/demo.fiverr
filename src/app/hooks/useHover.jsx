"use client";
import { useState, useCallback } from 'react';

const useHover = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = useCallback((id) => {
    setHoveredId(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
  }, []);

  return {
    hoveredId,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useHover;
