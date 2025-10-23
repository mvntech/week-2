import React, { useRef, useState } from "react";

const Form = () => {
  // controlled inputs with useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // uncontrolled input with useRef
  const passwordRef = useRef();

  // regex for validating the email address
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // clear previous messages
    setError("");
    setSuccess("");

    const password = passwordRef.current.value;

    // validates whether all input fields are filled
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("All fields are required!");
      return;
    }

    // validates email address
    if (!validateEmail(email)) {
      setError("Please enter a valid email address!");
      return;
    }

    // validates password
    if (password.length < 8) {
      setError("Password must be at least 8 characters long!");
      return;
    }

    // success state
    setSuccess(
      `Welcome ${name}! Your form was submitted.`
    );

    // clear fields on success
    setName("");
    setEmail("");
    passwordRef.current.value = "";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-pink-50">
      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-xl border border-rose-100">
        {/* header */}
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-2 tracking-tight">
          Input Validation Form
        </h1>
        <p className="text-center text-rose-500 font-medium mb-8">
          Let's get the data validated!
        </p>

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* name input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="e.g., Jane Doe"
              className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500 transition duration-150 placeholder-gray-400 text-gray-700"
            />
          </div>

          {/* email input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500 transition duration-150 placeholder-gray-400 text-gray-700"
            />
          </div>

          {/* password input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              ref={passwordRef}
              type="password"
              placeholder="At least 8 characters"
              className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500 transition duration-150 placeholder-gray-400 text-gray-700"
            />
          </div>

          {/* submit button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-rose-500 text-white font-bold text-lg rounded-xl shadow-rose-500/50 hover:bg-rose-600 transition duration-300 transform hover:scale-[1.01] focus:outline-none cursor-pointer"
          >
            Submit
          </button>
        </form>

        {/* feedback messages */}
        {(error || success) && (
          <div
            className={`mt-6 p-4 rounded-xl font-sm ${
              error
                ? "bg-red-100 text-red-700 border border-red-300"
                : "bg-green-100 text-green-700 border border-green-300"
            }`}
          >
            {error ? error : success}
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
