import React from "react";

function Navbar() {
  return (
    <nav
      className="mt-2 border py-3 px-4 rounded-lg sticky bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold 
    flex justify-between"
    >
      <div>Chaicode Persona AI</div>
      <div>
        <div className="flex gap-8">
          <button className="border rounded p-1">Hitesh Choudhary</button>
          <button className="border rounded p-1">Piyush Garg</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
