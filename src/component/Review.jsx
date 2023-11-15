import React from "react";
import './Review.css'
const Review = () => {
  const reviewList = [
    {
      id: 1,
      name: "John Doe",
      title: "Awesome Experience!",
      comment: "",
    },
    {
      id: 2,
      name: "John Doe",
      title: "Awesome Experience!",
      comment: "",
    },
    {
      id: 3,
      name: "John Doe",
      title: "Awesome Experience!",
      comment: "",
    },
  ];
  return (
    <div id="review">
      {reviewList &&
        reviewList.map((review) => {
          return <div key={review.id} id="remove-item">
          <h3>{review.name}</h3>
          <p>{review.title}</p>
            <p>{review.comment}</p>
          </div>;
        })}
    </div>
  );
};

export default Review;
