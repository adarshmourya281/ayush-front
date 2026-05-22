import {
  FaStar,
  FaQuoteLeft,
  FaHospital,
  FaUserMd,
  FaHeartbeat,
} from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Apollo Hospitals",
      role: "Chief Medical Officer",
      icon: <FaHospital />,
      review:
        "AYUSH has completely transformed the way we manage patient workflows and hospital operations. The platform is intuitive, efficient, and highly reliable.",
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Senior Cardiologist",
      icon: <FaUserMd />,
      review:
        "The appointment management and patient record system have significantly improved our daily efficiency and patient satisfaction.",
    },
    {
      name: "CarePlus Healthcare",
      role: "Operations Director",
      icon: <FaHeartbeat />,
      review:
        "Real-time analytics and automated workflows helped us reduce operational delays and improve healthcare delivery across departments.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f8f8f8] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Badge */}
        <div className="flex justify-center">
          <span className="bg-[#e8fff8] text-[#2fc7a3] px-8 py-3 rounded-full text-lg font-semibold">
            Testimonials
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mt-10">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Trusted by Healthcare
            <br className="hidden md:block" />
            Professionals Worldwide
          </h1>

          <p className="mt-6 text-gray-500 text-lg md:text-xl max-w-4xl mx-auto leading-8">
            See how hospitals, clinics, and healthcare professionals
            are improving patient care and operational efficiency
            with AYUSH healthcare solutions.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid lg:grid-cols-3 gap-10 mt-20">
          
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-[35px] p-10 shadow-sm hover:shadow-2xl transition duration-300 relative overflow-hidden"
            >
              
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-[#e6f8f2] text-6xl">
                <FaQuoteLeft />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-2 text-[#ffbf3f] text-2xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review */}
              <p className="mt-8 text-gray-500 text-lg leading-9 relative z-10">
                {item.review}
              </p>

              {/* User */}
              <div className="flex items-center gap-5 mt-10">
                
                <div className="w-16 h-16 rounded-2xl bg-[#e8fff8] text-[#2fc7a3] flex items-center justify-center text-3xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 text-lg mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-10 mt-24">
          
          <div className="bg-white rounded-[30px] p-10 text-center border border-gray-200 shadow-sm">
            <h2 className="text-5xl font-bold text-[#2fc7a3]">
              500+
            </h2>

            <p className="mt-4 text-gray-500 text-xl">
              Healthcare Institutions
            </p>
          </div>

          <div className="bg-white rounded-[30px] p-10 text-center border border-gray-200 shadow-sm">
            <h2 className="text-5xl font-bold text-[#2fc7a3]">
              1M+
            </h2>

            <p className="mt-4 text-gray-500 text-xl">
              Patients Managed
            </p>
          </div>

          <div className="bg-white rounded-[30px] p-10 text-center border border-gray-200 shadow-sm">
            <h2 className="text-5xl font-bold text-[#2fc7a3]">
              98%
            </h2>

            <p className="mt-4 text-gray-500 text-xl">
              Customer Satisfaction
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 bg-gradient-to-r from-[#2fc7a3] to-[#53d8b7] rounded-[40px] p-14 text-center text-white shadow-xl">
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Join the Healthcare Revolution
          </h2>

          <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto leading-8">
            Discover how AYUSH can help your healthcare institution
            improve efficiency, patient care, and operational management.
          </p>

          <button className="mt-10 bg-white text-[#2fc7a3] hover:bg-gray-100 transition duration-300 text-xl font-bold px-10 py-5 rounded-2xl shadow-lg">
            REQUEST DEMO
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;