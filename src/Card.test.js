import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.js";
import TEST_IMAGES from "./_testCommon.js";

// Card smoke test
it("renders without crashing", () => {
  render(
    <Card
      caption={TEST_IMAGES[0].caption}
      src={TEST_IMAGES[0].src}
      currNum={0}
      totalNum={1}
    />
  );
});
// CARD   snapshot tests

test("matches snapshot", () => {
  const { asFragment } = render(
    <Card
      caption={TEST_IMAGES[0].caption}
      src={TEST_IMAGES[0].src}
      currNum={0}
      totalNum={1}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
