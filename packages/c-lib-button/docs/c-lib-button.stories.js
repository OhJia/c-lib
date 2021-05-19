import React from "react";
import { Button } from "../lib/c-lib-button";

export default { title: "Button" };

export const primary = () => <Button>Hello Button</Button>;

export const secondary = () => (
  <div style={{ background: "#000", padding: 12 }}>
    <Button variant="secondary">Hello Button</Button>
  </div>
);
