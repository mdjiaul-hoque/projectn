import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";

export default function Home() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  // ✅ Load JSON from public folder
  useEffect(() => {
    fetch("/skills.json")
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(() => console.log("Failed to load skills.json"));
  }, []);

  return (
    <div className="pb-20">

      {/* ✅ HERO SECTION */}
      <section className="w-full">
        <Swiper loop={true} autoplay={{ delay: 3000 }}>
          <SwiperSlide>
            <div className="h-[60vh] bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center text-white text-center px-5">
              <h1 className="text-4xl md:text-6xl font-bold">
                Learn Any Skill, Anytime
              </h1>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-[60vh] bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white text-center px-5">
              <h1 className="text-4xl md:text-6xl font-bold">
                Teach What You Know
              </h1>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-[60vh] bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center text-white text-center px-5">
              <h1 className="text-4xl md:text-6xl font-bold">
                Connect & Grow Together
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* ✅ POPULAR SKILLS */}
      <section className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold mb-6">Popular Skills</h2>

        {skills.length === 0 && <p>Loading...</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.slice(0, 6).map((skill) => (
            <div
              key={skill.skillId}
              className="border rounded-lg shadow hover:shadow-lg transition"
              data-aos="fade-up"
            >
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">{skill.skillName}</h3>
                <p className="text-gray-600">
                  Rating: ⭐ {skill.rating}
                </p>
                <p className="text-gray-800 font-semibold">
                  Price: ${skill.price}
                </p>

                <Link
                  to={`/skill/${skill.skillId}`}
                  className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ TOP PROVIDERS */}
      <section className="max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-3xl font-bold mb-6">Top Rated Providers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-6 border rounded-xl shadow-md bg-white"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold">Provider {i}</h3>
              <p className="text-gray-600">Expert in multiple fields</p>
              <p className="text-yellow-500 font-bold mt-2">⭐ 4.9 Rating</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ HOW IT WORKS */}
      <section className="max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl shadow" data-aos="zoom-in">
            <h3 className="text-xl font-semibold">1. Browse Skills</h3>
            <p className="text-gray-600 mt-2">
              Explore hundreds of local skill offerings.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow" data-aos="zoom-in">
            <h3 className="text-xl font-semibold">2. View Details</h3>
            <p className="text-gray-600 mt-2">
              Check provider info, pricing, reviews, and description.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow" data-aos="zoom-in">
            <h3 className="text-xl font-semibold">3. Book Session</h3>
            <p className="text-gray-600 mt-2">
              Submit a simple form and connect instantly.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ EXTRA SECTION */}
      <section className="max-w-6xl mx-auto mt-20 px-4 pb-20">
        <h2 className="text-3xl font-bold mb-6">Why Choose SkillSwap?</h2>

        <div className="p-6 bg-indigo-600 text-white rounded-xl shadow-lg" data-aos="fade-up">
          <p className="text-lg">
            SkillSwap builds a friendly community where learning and teaching
            become easy, affordable, and enjoyable. Gain real-world experience,
            make new connections, and grow faster.
          </p>
        </div>
      </section>

    </div>
  );
}
