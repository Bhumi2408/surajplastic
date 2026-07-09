"use client";

export default function Specification({
  title = "Technical Specifications",
  headers = [],
  rows = [],
}) {
  return (
    <section className="bg-[#f8fafc] py-10 px-3 lg:px-10">
      <div className="mx-auto max-w-[1600px] px-6">
        {/* Heading */}

        <div className="mb-12">
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D97706]">
            Product Details
          </span>

          <h2 className="mt-6 font-baloo text-3xl font-semibold text-[#13233B]">
            {title}
          </h2>

          <div className="mt-2 h-1 w-24 rounded-full bg-[#D97706]" />
        </div>

        {/* Table */}

        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl">
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#13233B]">
                {headers.map((item, index) => (
                  <th
                    key={index}
                    className="border-r border-white/20 px-8 py-6 text-center text-sm font-semibold uppercase tracking-wider text-white last:border-r-0"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="transition hover:bg-orange-50 even:bg-slate-50"
                >
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={`border border-slate-200 px-6 py-5 text-center text-[15px] leading-7 ${
                        i === 0
                          ? "font-semibold text-[#13233B]"
                          : "text-gray-700"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
