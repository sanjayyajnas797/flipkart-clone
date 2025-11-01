import { useState } from "react";
import axios from "axios"; // ✅ fix: default import

function App() {
  const [form, setForm] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
  });

  // ✅ fix: add `e` parameter and proper setForm
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ✅ fix: proper preventDefault and reset form correctly
  const result = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/analog", form);
      console.log(res.data);
      alert("Added successfully ✅");
      setForm({ A1: "", A2: "", A3: "", A4: "" }); // reset form
    } catch (err) {
      console.error("Error:", err);
      alert("Error while saving ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <form onSubmit={result}>
        <input
          name="A1"
          value={form.A1}
          onChange={handleChange}
          placeholder="Enter A1"
        />
        <br />
        <input
          name="A2"
          value={form.A2}
          onChange={handleChange}
          placeholder="Enter A2"
        />
        <br />
        <input
          name="A3"
          value={form.A3}
          onChange={handleChange}
          placeholder="Enter A3"
        />
        <br />
        <input
          name="A4"
          value={form.A4}
          onChange={handleChange}
          placeholder="Enter A4"
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
