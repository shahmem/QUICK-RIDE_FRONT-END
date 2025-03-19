import React from 'react'
import bg from '../../assets/images/img-1.jpg'
function ContactCmp({contactRef}) {
  return (
    <>
    <div ref={contactRef} className="relative bg-cover bg-center  flex items-center justify-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>

      <div className="relative z-10  w-full p-3 py-12 md:px-24 md:py-16 text-white">
        <h2 className="text-4xl md:text-5xl  my-4">Contact Us</h2>
        <p className="mb-20 md:mb-12 text-gray-300">
          We’d love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <h3 className="text-xl font-semibold mb-2">Office Address</h3>
            <p className="text-gray-300">QuickRide Headquarters</p>
            <p className="text-gray-300">123 Mobility Lane,</p>
            <p className="text-gray-300">Tech City, Innovation State, 12345</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-300">Phone: +1 (800) 123-4567</p>
            <p className="text-gray-300">Email: support@quickride.com</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Driver Support</h3>
            <p className="text-gray-300">Phone: +1 (800) 123-4567</p>
            <p className="text-gray-300">Email: driversupport@quickride.com</p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-2">General Inquiries</h3>
          <div className="flex items-center gap-2 md:pr-16">
            <input
              type="email"
              placeholder="info@quickride.com"
              className="w-full p-2 my-2 bg-[#ffffff2a] text-white focus:outline-none"
            />
            <button className="px-4 text-sm py-2.5 bg-blue-700 hover:bg-blue-800">Submit</button>
          </div>
        </div>
      </div>
      <div className=' absolute w-full h-[10rem] bottom-0 bg-gradient-to-b from-transparent to-[#000000]'></div>
    </div>
    </>
  )
}

export default ContactCmp