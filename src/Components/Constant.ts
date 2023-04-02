import { CSSProperties } from "react";
export const LinkAddresh = [
  { to: "/", item: "Home" },
  {
    to: "/addproduct",
    item: "Add",
  },
];

export const Override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

export interface SpinnerProps {
  time: boolean;
}
