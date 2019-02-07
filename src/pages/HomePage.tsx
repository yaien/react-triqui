import * as React from "react";
import { Create } from "../components/Create";
import { Join } from "../components/Join";

export function HomePage() {
  return (
    <div className="container">
      <Create />
      <Join />
    </div>
  );
}
