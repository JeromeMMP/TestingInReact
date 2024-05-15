import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

// Carousel smoke test

// // text - Photo By Richard Pasquarella on Unsplash
// test("it renders without crashing", () => {
//   render(<Carousel photos={TEST_IMAGES} title="New Title" />);
// });

// // Carousel Snapshot tests

// it("it matches the snapshot", () => {
//   const { asFragment } = render(
//     <Carousel photos={TEST_IMAGES} title="New Title" />
//   );
//   expect(asFragment()).toMatchSnapshot();
// });

// test("If it actually goes left", () => {
//   const { getByClassName, debug } = render(
//     <Carousel photos={TEST_IMAGES} title="New Title" />);

//   debug();
//   // I need to find a way to get the card component inside carousel, and make it start from image 2 (index 1)

//   // get left arrow and fire event clicking on the arrow
//   const leftArrow = getByClassName("bi-arrow-left-circle");
//   fireEvent.click(leftArrow);
//   debug();
// });
