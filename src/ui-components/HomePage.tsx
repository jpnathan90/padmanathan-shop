import React from "react";
import Button from "../ui-core/Button";
import Card from "../ui-core/Card";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <Card>
        <div className="HomePage__content">
          <h2 className="HomePage-title">Welcome to the Padmanathan Salad Shop</h2>
          <Button to="ingredients">Order Salad</Button>
        </div>
      </Card>
    </div>
  );
}

export default HomePage;
