// src/app/components/ScrollButtons.jsx

"use client"; // Để chỉ định rằng đây là Client Component

import React from 'react';

export default function ScrollButton({ direction, targetId }) {
    const scroll = () => {
        const scrollContainer = document.getElementById(targetId);
        if (scrollContainer) {
            const scrollAmount = direction === "left" ? -300 : 300;
            scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <button
            className={`btn btn-outline-success rounded-circle position-absolute ${direction === "left" ? "start-0" : "end-0"}`}
            onClick={scroll}
            style={{ zIndex: 1 }}
        >
            {direction === "left" ? '‹' : '›'}
        </button>
    );
}
