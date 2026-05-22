import dashboard from "../assets/dash.jpeg";

function Hero() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-[#27c8a4]">
              Healing the modern
            </span>

            <br />

            <span className="text-[#27c8a4]">
              world with timeless
            </span>

            <br />

            <span className="text-[#f4b234]">
              Ayurveda
            </span>
          </h1>

          <p className="mt-8 text-gray-600 leading-8 text-lg">
            Streamline patient care, manage operations,
            and improve outcomes with AYUSH —
            the comprehensive clinic management system.
          </p>

          <button className="mt-10 bg-[#35c9a5] hover:bg-[#27b792] transition text-white px-10 py-4 rounded-lg font-semibold text-lg">
            REQUEST DEMO
          </button>
        </div>

        <div className="relative flex justify-center">
          <div className="border-[8px] border-[#31caa6] rounded-[60px] rotate-45 p-4 shadow-2xl">

            <img
              src={dashboard}
              alt="dashboard"
              className="-rotate-45 rounded-[40px] w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;