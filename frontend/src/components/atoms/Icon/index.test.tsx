import React from "react";
import { Icon } from ".";
import { render, screen } from "@testing-library/react";

const iconName = "search";

describe("Icon", () => {
  test("renders icon", () => {
    render(<Icon name={iconName} />);
    expect(screen.getByTestId(`icon-${iconName}`)).toBeInTheDocument;
  });
});
