const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 pt-36 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
          <p className="text-gray-400 mt-4">
            Have questions about our music courses or webinars? We love to
            hear from you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Our Office</h2>
              <p className="text-gray-400">
                Music Academy <br />
                Jamshedpur, Jharkhand <br />
                India
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <p className="text-gray-400">support@musicacademy.com</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Phone</h2>
              <p className="text-gray-400">+91 98765 XXXXX</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-emerald-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 transition py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
