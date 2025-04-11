import React from "react";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div>
      <PageNav />
      Pricing

      <Link to="/app">Go to Homepage</Link>
    </div>
  );
}
