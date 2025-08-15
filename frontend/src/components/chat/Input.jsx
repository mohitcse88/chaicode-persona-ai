import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

function Input() {
  const [formData, setFormData] = useState({ name: "hitesh", message: "" });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      setErrorMessage(false);

      const res = await fetch(`${API_URL}/${formData.name}`, {
        method: "POST",
        body: JSON.stringify({
          message: formData.message,
        }),
      });
      console.log(res);
      // console.log(await res.json());
    } catch (error) {}
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="border w-[70vw] mx-auto flex justify-between rounded-lg">
          <select
            name="name"
            id=""
            value={formData.name}
            onChange={(e) => {
              setFormData(() => ({ ...formData, name: e.target.value }));
            }}
          >
            <option value="hitesh">Hitesh</option>
            <option value="piyush">Piyush</option>
          </select>
          <input
            type="text"
            className=" w-[66vw]"
            value={formData.value}
            onChange={(e) => {
              setFormData(() => ({ ...formData, message: e.target.value }));
            }}
          />
          <button className="border px-3 py-1 rounded">Chat</button>
        </div>
      </form>
    </div>
  );
}

export default Input;
