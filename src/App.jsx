import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
  return (
    <div className="p-6 space-y-6">

      {/* PAGE 1 — FORM */}
      <Card title="Register" subtitle="Reusable UI Components Demo">
        <Input label="Name" placeholder="Enter your name" />
        <Input label="Email" type="email" placeholder="Enter email" />
        <Input label="Password" type="password" placeholder="Enter password" />

        <Button color="blue" size="md" className="mt-2">
          Submit
        </Button>
      </Card>

      {/* PAGE 2 — PRODUCT CARD */}
      <Card
        title="Smartphone X"
        subtitle="$799"
        footer={<Button variant="outline" color="green">Buy Now</Button>}
      >
        A powerful phone with premium design and excellent performance.
      </Card>

      {/* BUTTON EXAMPLES */}
      <div className="space-x-3">
        <Button color="blue">Primary</Button>
        <Button color="green" variant="outline">Outline</Button>
        <Button color="red" variant="ghost">Ghost</Button>
        <Button color="yellow">Warning</Button>
      </div>

    </div>
  );
}
