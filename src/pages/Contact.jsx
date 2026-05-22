function Contact() {
  return (
    <section className="min-h-screen bg-[#f8f8f8] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Badge */}
        <div className="flex justify-center">
          <span className="bg-[#e7f0ff] text-[#74a2f2] px-8 py-3 rounded-full text-lg font-semibold">
            Get in Touch
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mt-10">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Ready to Transform Your
            <br className="hidden md:block" />
            Healthcare Operations?
          </h1>

          <p className="mt-6 text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-8">
            Connect with our healthcare experts and discover how
            AYUSH can streamline your hospital management,
            patient care, and operational efficiency.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          
          {/* Left Card */}
          <div className="bg-white border border-gray-200 rounded-[30px] p-10 shadow-sm hover:shadow-xl transition duration-300">
            
            <h2 className="text-4xl font-bold text-black">
              Let's Start a Conversation
            </h2>

            <p className="mt-5 text-gray-500 text-lg leading-8">
              Our healthcare technology experts are ready
              to help you transform your institution with
              modern digital solutions.
            </p>

            {/* Contact Info */}
            <div className="mt-12 space-y-10">
              
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Email Us
                </h3>

                <p className="mt-2 text-gray-500 text-xl">
                  support@healthcare.com
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black">
                  Call Us
                </h3>

                <p className="mt-2 text-gray-500 text-xl">
                  +91 99999 23450
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black">
                  Support Hours
                </h3>

                <p className="mt-2 text-gray-500 text-xl">
                  24/7 Technical Support
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="w-full mt-14 bg-[#7296d8] hover:bg-[#5d84cf] transition duration-300 text-white text-xl font-semibold py-5 rounded-xl shadow-md">
              REQUEST DEMO
            </button>
          </div>

          {/* Right Card */}
          <div className="bg-white border border-gray-200 rounded-[30px] p-10 shadow-sm hover:shadow-xl transition duration-300">
            
            <h2 className="text-4xl font-bold text-black">
              Send us a Message
            </h2>

            <p className="mt-5 text-gray-500 text-lg leading-8">
              Fill out the form below and our team will
              get back to you shortly.
            </p>

            {/* Form */}
            <form className="mt-10 space-y-6">
              
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-2xl px-6 py-5 text-lg outline-none focus:border-[#2fc7a3] transition"
              />

              <input
                type="text"
                placeholder="Healthcare Institution"
                className="w-full border border-gray-300 rounded-2xl px-6 py-5 text-lg outline-none focus:border-[#2fc7a3] transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-2xl px-6 py-5 text-lg outline-none focus:border-[#2fc7a3] transition"
              />

              <textarea
                rows="6"
                placeholder="Message"
                className="w-full border border-gray-300 rounded-2xl px-6 py-5 text-lg outline-none resize-none focus:border-[#2fc7a3] transition"
              ></textarea>

              {/* Submit */}
              <button className="w-full bg-[#7296d8] hover:bg-[#5d84cf] transition duration-300 text-white text-xl font-semibold py-5 rounded-2xl shadow-md">
                Send Message
              </button>
            </form>

            {/* Small Text */}
            <p className="mt-5 text-sm text-gray-400 text-center">
              By submitting this form, you agree to our
              privacy policy and terms of service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;