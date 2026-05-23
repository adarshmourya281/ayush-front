function Contact() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="text-center mb-16">

          <span className="bg-[#e9f5ff] text-[#7ab2ff] px-6 py-2 rounded-full font-semibold">
            Get in Touch
          </span>

          <h2 className="text-4xl font-bold mt-8">
            Ready to Transform Your Healthcare Operations?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold">
              Let's Start a Conversation
            </h3>

            <div className="mt-10 space-y-6">

              <div>
                <h4 className="font-bold">
                  Email Us
                </h4>

                <p className="text-gray-500">
                  info@ayushcms.com
                </p>
              </div>

              <div>
                <h4 className="font-bold">
                  Call Us
                </h4>

                <p className="text-gray-500">
                  +91 9666655590
                </p>
              </div>

              <button className="mt-6 bg-[#6b94d6] text-white w-full py-4 rounded-lg font-semibold">
                REQUEST DEMO
              </button>
            </div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8">

            <h3 className="text-2xl font-bold">
              Send us a Message
            </h3>

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-4 outline-none"
              />

              <input
                type="text"
                placeholder="Healthcare Institution"
                className="w-full border border-gray-300 rounded-lg px-4 py-4 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-4 outline-none"
              />

              <button className="bg-[#7ca2df] hover:bg-[#648fda] transition text-white w-full py-4 rounded-lg font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
