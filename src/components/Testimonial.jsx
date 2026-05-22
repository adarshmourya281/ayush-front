function Testimonial() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-4">

        <div className="text-center">
          <span className="bg-[#e7fff6] text-[#2cc89d] px-6 py-2 rounded-full font-semibold">
            What Healthcare Professionals Say
          </span>

          <h2 className="text-4xl font-bold mt-8">
            Trusted by Healthcare Leaders
          </h2>
        </div>

        <div className="mt-14 border border-gray-200 rounded-[30px] p-10 shadow-sm">

          <div className="text-center text-5xl text-yellow-400">
            ★★★★★
          </div>

          <p className="text-2xl text-gray-600 leading-10 text-center mt-8">
            AYUSH has revolutionized how we manage
            patient data and staff workflows.
          </p>

          <div className="text-center mt-10">
            <h3 className="text-3xl font-bold">
              Apollo Hospitals
            </h3>

            <p className="text-gray-500 mt-2">
              Chief Medical Officer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;