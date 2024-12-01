"use client";

import React, { useState } from "react";
import Rating from "../Rating/Rating";
import CommentForm from "../CommentForm/CommentForm";

const CommentSection = ({ detailJob }) => {
    const [rating, setRating] = useState(5);

    const handleRating = (value) => {
        setRating(value); // Cập nhật giá trị rating khi thay đổi
    };

    return (
        <div className="add-comment py-4">
            <div className="comment-rating mb-4 d-flex align-items-center justify-content-between">
                <h2 className="m-0">Leave some comments</h2>
                <div className="d-flex align-items-center gap-1">
                    {/* Hiển thị Rating */}
                    <Rating defaultValue={5} onChange={handleRating} />
                    <h2 className="m-0">Rating</h2>
                </div>
            </div>
            <CommentForm detailJob={detailJob} rating={rating} />
        </div>



        // <div>
        //   <h2>Leave a Comment</h2>
        //   {/* Hiển thị Rating */}
        //   <Rating defaultValue={5} onChange={handleRating} />
        //   {/* Truyền rating vào CommentForm */}
        //   <CommentForm detailJob={detailJob} rating={rating} />
        // </div>
    );
};

export default CommentSection;
