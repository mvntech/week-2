import React from "react";
import UserData from "./components/UserData";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">
        User Fetch <span className="text-sky-600">API</span>
      </h1>
      <main className="max-w-7xl mx-auto">
        <UserData />
      </main>
    </div>
  );
};

export default App;
