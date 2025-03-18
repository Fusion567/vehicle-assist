"use client";

import React, { useState } from "react";
import Button from "@/app/components/Button";

const Form: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow-lg rounded-lg w-80"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <div className="mb-2">
        <label htmlFor="email" className="block text-gray-700 font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <Button 
        type="submit" 
        title="Sign In" 
        variant="btn_dark_green" 
        disabled={!email || !password} 
      />
    </form>
  );
};

export default Form;
