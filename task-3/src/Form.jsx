import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

const Form = () => {

  // declaring the states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submission, setSubmission] = useState(null);

  // clear the fields
  const handleClear = () => {
    setName("");
    setEmail("");
    setSubmission(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate form: ensure both name and email fields are populated before submission
    if (!name || !email) {
      setSubmission({
        type: "error",
        message: "Both Name and Email fields are required to submit.",
      });
      return;
    }

    setSubmission({
      type: "success",
      message: `Submission successful! Name: ${name} | Email: ${email}`,
    });

    setName("");
    setEmail("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-xl shadow-sm ring-1 ring-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center tracking-tight">
          Reusable Form
        </h2>

        {/* feedback message area */}
        {submission && (
          <div
            className={`mb-6 p-4 rounded-lg text-sm text-center ${
              submission.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {submission.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* reusable `Input` and `Button` components */}

          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <div className="pt-2 flex flex-col space-y-3">
            <Button type="submit" label="Submit" variant="primary" />
            <Button
              label="Clear Form"
              onClick={handleClear}
              variant="secondary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
