import {
  FaHospital,
  FaUserMd,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaHeartbeat,
} from "react-icons/fa";

function Benefits() {
  const benefits = [
    {
      icon: <FaHospital />,
      title: "Smart Hospital Management",
      desc: "Streamline daily hospital operations with an all-in-one management system.",
    },
    {
      icon: <FaUserMd />,
      title: "Better Patient Care",
      desc: "Improve patient experience with faster appointments and digital records.",
    },
    {
      icon: <FaChartLine />,
      title: "Advanced Analytics",
      desc: "Track hospital performance and make data-driven decisions in real-time.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Reliable",
      desc: "Enterprise-grade security ensures patient data safety and compliance.",
    },
    {
      icon: <FaClock />,
      title: "24/7 Accessibility",
      desc: "Access your healthcare dashboard anytime and anywhere securely.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Improved Healthcare Outcomes",
      desc: "Optimize workflows to deliver faster and better healthcare services.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f8f8f8] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Badge */}
        <div className="flex justify-center">
          <span className="bg-[#e8fff8] text-[#2fc7a3] px-8 py-3 rounded-full text-lg font-semibold">
            Why Choose AYUSH
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mt-10">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Powerful Benefits for
            <br className="hidden md:block" />
            Modern Healthcare
          </h1>

          <p className="mt-6 text-gray-500 text-lg md:text-xl max-w-4xl mx-auto leading-8">
            AYUSH helps healthcare institutions streamline operations,
            improve patient experiences, and boost efficiency with
            intelligent healthcare management solutions.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-10 border border-gray-200 shadow-sm hover:shadow-2xl transition duration-300 group"
            >
              
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-[#e9fff8] text-[#2fc7a3] flex items-center justify-center text-4xl group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h2 className="mt-8 text-3xl font-bold text-black leading-tight">
                {item.title}
              </h2>

              {/* Description */}
              <p className="mt-5 text-gray-500 text-lg leading-8">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 bg-gradient-to-r from-[#2fc7a3] to-[#55d6b7] rounded-[40px] p-12 text-center text-white shadow-xl">
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Experience the Future of Healthcare?
          </h2>

          <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto leading-8">
            Join hundreds of healthcare providers already transforming
            patient care and operational efficiency with AYUSH.
          </p>

          <button className="mt-10 bg-white text-[#2fc7a3] hover:bg-gray-100 transition duration-300 text-xl font-bold px-10 py-5 rounded-2xl shadow-lg">
            REQUEST DEMO
          </button>
        </div>
      </div>
    </section>
  );
}

export default Benefits;