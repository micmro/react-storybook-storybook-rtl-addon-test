import React from "react";
import useDirection from "@pxblue/storybook-rtl-addon/useDirection";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    const direction = useDirection();

    return (
      <>
        {direction}
        <hr />
        <Story />
      </>
    );
  },
];
