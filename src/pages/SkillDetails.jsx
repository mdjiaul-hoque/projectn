import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import toast from "react-hot-toast";

export default function SkillDetails() {
  const { id } = useParams();

  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Load skills.json from public folder
  useEffect(() => {
    fetch("/skills.json")
      .then(res => res.json())
      .then(data => {
        setSkills(data);
        const foundSkill = data.find(s => String(s.skillId) === String(id));
        setSkill(foundSkill);
      })
      .finally(() => setLoading(false));
  }, [id]);

  // ✅ Booking form
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking successful!");
    setForm({ name: "", email: "" });
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!skill) return <div className="text-center py-20 text-red-500">Skill Not Found</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      
      {/* Image */}
      <img
        src={skill?.image}
        alt={skill?.skillName}
        className="w-full h-64 object-cover rounded shadow"
      />

      {/* Title */}
      <h2 className="text-3xl font-bold mt-6">{skill.skillName}</h2>

      {/* Description */}
      <p className="text-gray-600 mt-3">{skill.description}</p>

      {/* Provider Info */}
      <div className="mt-4">
        <p><strong>Provider:</strong> {skill.providerName}</p>
        <p><strong>Email:</strong> {skill.providerEmail}</p>
        <p><strong>Price:</strong> ${skill.price}</p>
        <p><strong>Rating:</strong> ⭐ {skill.rating}</p>
      </div>

      {/* Booking Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 bg-white shadow p-5 rounded"
      >
        <h3 className="text-xl font-semibold mb-4">Book Session</h3>

        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your Name"
          className="w-full border p-2 rounded mb-3"
          required
        />

        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Your Email"
          className="w-full border p-2 rounded mb-3"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
