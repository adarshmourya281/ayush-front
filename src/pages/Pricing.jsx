import {
  FaCheckCircle,
  FaHospital,
  FaCrown,
  FaRocket,
} from "react-icons/fa";

function Pricing() {
  const plans = [
    {
      icon: <FaHospital />,
      name: "Starter",
      price: "₹4,999",
      duration: "/month",
      desc: "Perfect for small clinics and healthcare startups.",
      features: [
        "Patient Management",
        "Appointment Scheduling",
        "Basic Analytics",
        "Email Support",
        "1 Admin Access",
      ],
      button: "Get Started",
      highlight: false,
    },

    {
      icon: <FaCrown />,
      name: "Professional",
      price: "₹14,999",
      duration: "/month",
      desc: "Ideal for growing hospitals and healthcare institutions.",
      features: [
        "Advanced Dashboard",
        "Medical Records",
        "Revenue Analytics",
        "Inventory Management",
        "Priority Support",
        "10 Admin Access",
      ],
      button: "Most Popular",
      highlight: true,
    },

    {
      icon: <FaRocket />,
      name: "Enterprise",
      price: "Custom",
      duration: "",
      desc: "Complete enterprise-grade healthcare management solution.",
      features: [
        "Unlimited Access",
        "Custom Integrations",
        "Dedicated Manager",
        "Cloud Infrastructure",
        "Advanced Security",
        "24/7 Premium Support",
      ],
      button: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section className="min-h-screen bg-[#f8f8f8] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Badge */}
        <div className="flex justify-center">
          <span className="bg-[#e8fff8] text-[#2fc7a3] px-8 py-3 rounded-full text-lg font-semibold">
            Pricing Plans
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mt-10">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Flexible Pricing for
            <br className="hidden md:block" />
            Every Healthcare Institution
          </h1>

          <p className="mt-6 text-gray-500 text-lg md:text-xl max-w-4xl mx-auto leading-8">
            Choose the perfect healthcare management plan
            for your clinic, hospital, or enterprise.
            Scale effortlessly with AYUSH.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-10 mt-20">
          
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-[35px] p-10 border transition duration-300 relative overflow-hidden ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#2fc7a3] to-[#4fd5b4] text-white shadow-2xl scale-105"
                  : "bg-white border-gray-200 shadow-sm hover:shadow-2xl"
              }`}
            >
              
              {/* Popular Badge */}
              {plan.highlight && (
                <div className="absolute top-6 right-6 bg-white text-[#2fc7a3] text-sm font-bold px-4 py-2 rounded-full">
                  BEST VALUE
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl ${
                  plan.highlight
                    ? "bg-white text-[#2fc7a3]"
                    : "bg-[#e8fff8] text-[#2fc7a3]"
                }`}
              >
                {plan.icon}
              </div>

              {/* Plan Name */}
              <h2 className="mt-8 text-4xl font-bold">
                {plan.name}
              </h2>

              {/* Description */}
              <p
                className={`mt-4 text-lg leading-8 ${
                  plan.highlight
                    ? "text-white/90"
                    : "text-gray-500"
                }`}
              >
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mt-10 flex items-end gap-2">
                <h3 className="text-6xl font-bold">
                  {plan.price}
                </h3>

                <span
                  className={`text-xl mb-2 ${
                    plan.highlight
                      ? "text-white/80"
                      : "text-gray-500"
                  }`}
                >
                  {plan.duration}
                </span>
              </div>

              {/* Features */}
              <div className="mt-10 space-y-5">
                
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4"
                  >
                    <FaCheckCircle
                      className={`text-xl ${
                        plan.highlight
                          ? "text-white"
                          : "text-[#2fc7a3]"
                      }`}
                    />

                    <p
                      className={`text-lg ${
                        plan.highlight
                          ? "text-white"
                          : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className={`w-full mt-12 py-5 rounded-2xl text-xl font-bold transition duration-300 ${
                  plan.highlight
                    ? "bg-white text-[#2fc7a3] hover:bg-gray-100"
                    : "bg-[#2fc7a3] text-white hover:bg-[#27b792]"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 bg-white border border-gray-200 rounded-[40px] p-14 text-center shadow-sm">
          
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Need a Custom Solution?
          </h2>

          <p className="mt-6 text-gray-500 text-xl max-w-3xl mx-auto leading-8">
            Our enterprise healthcare solutions are tailored
            specifically for large hospitals and healthcare networks.
          </p>

          <button className="mt-10 bg-[#2fc7a3] hover:bg-[#27b792] transition duration-300 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow-lg">
            CONTACT SALES
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;