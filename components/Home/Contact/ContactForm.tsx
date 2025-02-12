import React from 'react'

const ContactForm = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:tex-3xl lg:text-[2.5rem] font-bold">
        Lets Work Together
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base tex-xs md:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non obcaecati
        velit architecto minima ea quasi, atque veniam veritatis esse corrupti.
      </p>
      <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 bg-gray-800 text-white 
                    placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15
                    outline-none w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 bg-gray-800 text-white 
                    placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15
                    outline-none w-full"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 bg-gray-800 text-white 
                    placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15
                    outline-none w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="flex-1 bg-gray-800 text-white 
                    placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15
                    outline-none w-full"
          />
        </div>
        <div>
          <select
            defaultValue={'select'}
            className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md
                border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          >
            <option value="select" disabled>
                Select an option
            </option>
            <option value="frontend">Front End Development</option>
            <option value="ui">User Interface Design</option>
          </select>
        </div>
        <textarea
          rows={7}
          placeholder="Message"
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md
                border-[1.5px] border-gray-200 border-opacity-15 outline-none"
        ></textarea>
        <div className='mt-4'>
            <button className='px-8 py-3.5 bg-blue-800 text-white hover:bg-blue-700 transition-all duration-150'>Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm