// src/hooks/useToggleDropdown.js
import { useState } from 'react';

export default function useToggleDropdown() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {setDropdownOpen(!isDropdownOpen)};

  return { isDropdownOpen, toggleDropdown };
}

