"use client";

import { useState } from "react";

const page = () => {
    const [form, setForm] = useState({
        applyFor: "",
        fullName: "",
        phone: "",
        email: "",
        designation: "",
        experience: "",
        currentSalary: "",
        expectedSalary: "",
        location: "",
        qualification: "",
        noticePeriod: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };
    return (
        <>
            <section className="relative h-[400px] overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/career-bg.avif')",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55" />


            </section>
            <section className="bg-white py-10">
      <div className="mx-auto max-w-[1300px] px-6">

        {/* Heading */}

        <div className="mx-auto max-w-6xl text-center">

          <h2 className="font-baloo text-[40px] font-semibold text-[#CB6801]">
            Career With Us
          </h2>

          <p className="mt-3 font-urbanist leading-7 text-[#3d4f6b]">
            At Suraj Plastic, we believe that excellence begins with exceptional
            people, and as a leading name in plastic manufacturing, we are
            committed to fostering an environment that encourages innovation,
            technical growth, and continuous improvement. We proudly support and
            promote Made in India products, reflecting our dedication to
            strengthening the nation's manufacturing capabilities. Every member
            of Suraj Plastic contributes to this mission by upholding integrity,
            collaboration, and a commitment to quality. Whether you are an
            experienced professional or emerging talent, we invite you to join
            us in shaping a future that is proudly Made in India and respected
            across the world.
          </p>

          <h3 className="mt-10 font-baloo text-[40px] font-semibold text-[#CB6801]">
            Submit Your Details
          </h3>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 pb-10 space-y-5"
        >
          {/* Apply For */}

          <input
            type="text"
            name="applyFor"
            placeholder="Apply For*"
            value={form.applyFor}
            onChange={handleChange}
            className="h-[50px] w-full rounded-2xl border border-[#bdbdbd] bg-[#ececec] px-8 font-urbanist outline-none transition focus:border-[#CB6801] focus:bg-white"
          />

          {/* Row 1 */}

          <div className="grid gap-6 lg:grid-cols-2">

            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={form.fullName}
              onChange={handleChange}
              className="h-[50px] rounded-2xl border border-[#bdbdbd] bg-[#ececec] px-8 font-urbanist outline-none focus:border-[#CB6801] focus:bg-white"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              value={form.phone}
              onChange={handleChange}
              className="h-[50px] rounded-2xl border border-[#bdbdbd] bg-[#ececec] px-8 font-urbanist outline-none focus:border-[#CB6801] focus:bg-white"
            />

          </div>

          {/* Row 2 */}

          <div className="grid gap-6 lg:grid-cols-2">

            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              className="h-[50px] rounded-2xl border border-[#bdbdbd] bg-[#ececec] px-8 font-urbanist outline-none focus:border-[#CB6801] focus:bg-white"
            />

            <input
              type="text"
              name="designation"
              placeholder="Present Designation*"
              value={form.designation}
              onChange={handleChange}
              className="h-[50px] rounded-2xl border border-[#bdbdbd] bg-[#ececec] px-8 font-urbanist outline-none focus:border-[#CB6801] focus:bg-white"
            />

          </div>

          {/* Row 3 */}

          <div className="grid gap-6 lg:grid-cols-2">

            <input
              type="text"
              name="experience"
              placeholder="Present Total Experience (in Years)*"
              value={form.experience}
              onChange={handleChange}
              className="h-[50px] rounded-2xl border border-[#bdbdbd] bg-[#ececec] px-8 font-urbanist outline-none focus:border-[#CB6801] focus:bg-white"
            />

            <input
              type="text"
              name="currentSalary"
              placeholder="Current On-Hand Salary*"
              value={form.currentSalary}
              onChange={handleChange}
              className="h-[50px] rounded-2xl border border-[#bdbdbd] bg-[#ececec] px-8 font-urbanist outline-none focus:border-[#CB6801] focus:bg-white"
            />

          </div>

          {/* Row 4 */}

          <div className="grid gap-6 lg:grid-cols-2">

            <input
              type="text"
              name="expectedSalary"
              placeholder="Expected On-hand Salary*"
              value={form.expectedSalary}
              onChange={handleChange}
              className="h-[50px] rounded-2xl border border-[#bdbdbd] bg-[#ececec] px-8 font-urbanist outline-none focus:border-[#CB6801] focus:bg-white"
            />

            <input
              type="text"
              name="location"
              placeholder="Present Location*"
              value={form.location}
              onChange={handleChange}
              className="h-[50px] rounded-2xl border border-[#bdbdbd] bg-[#ececec] px-8 font-urbanist outline-none focus:border-[#CB6801] focus:bg-white"
            />

          </div>

          {/* Row 5 */}

          <div className="grid gap-6 lg:grid-cols-2">

            <input
              type="text"
              name="qualification"
              placeholder="Qualification*"
              value={form.qualification}
              onChange={handleChange}
              className="h-[50px] rounded-2xl border border-[#bdbdbd] bg-[#ececec] px-8 font-urbanist outline-none focus:border-[#CB6801] focus:bg-white"
            />

            <input
              type="text"
              name="noticePeriod"
              placeholder="Notice Period*"
              value={form.noticePeriod}
              onChange={handleChange}
              className="h-[50px] rounded-2xl border border-[#bdbdbd] bg-[#ececec] px-8 font-urbanist outline-none focus:border-[#CB6801] focus:bg-white"
            />

          </div>

          {/* Message */}

          <textarea
            rows={3}
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#bdbdbd] bg-[#ececec] p-8 font-urbanist outline-none resize-none focus:border-[#CB6801] focus:bg-white"
          />

          {/* Button */}

          <button
            type="submit"
            className="h-[50px] w-full rounded-2xl bg-[#1769A8] font-urbanist text-[20px] font-medium text-white transition-all duration-300 hover:bg-[#CB6801]"
          >
            Submit
          </button>

        </form>

      </div>
    </section>
        </>
    )
}

export default page