import { useState } from "react";
import { Form } from "react-router-dom";

export default function Contact() {
  const [name, setName] = useState("");
  return (
    <>
      <h2>My contact info</h2>
      <Form state={name} action="/" method="POST">
        <input
          name="testName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Create</button>
      </Form>
    </>
  );
}
