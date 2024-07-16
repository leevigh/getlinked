import { useState } from "react";
import { api } from "../main";
import Navbar from "../components/Navbar";

import { FiChevronLeft } from "react-icons/fi";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";

const Contactpage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    phone_number: "",
    first_name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const response
    try {
      setLoading(true);
      const response = await api.post("/hackathon/contact-form", data);

      if (response?.status === 200) {
        setLoading(false);

        setData({
          email: "",
          phone_number: "",
          first_name: "",
          message: "",
        });

        console.log(response);
      }
    } catch (error) {
      setLoading(false);
      alert("There was an error");

      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="max-w-[1500px] mx-auto py-16 flex justify-around items-start px-8">
          <div className="hidden lg:block py-12">
            <div className="pb-[17px]">
              <h1 className="text-[32px] text-[#D434FE] font-semibold">
                Get in touch
              </h1>
            </div>

            <div className="pb-[17px]">
              <p className="text-white max-w-[96px] ">Contact Information</p>
            </div>

            <div className="pb-[21px]">
              <p className="max-w-[119px] text-white">
                27, Alara Street Yaba 100012 Lagos State
              </p>
            </div>

            <div className="pb-[21px]">
              <p className="text-white">Call Us: 07067981819</p>
            </div>

            <div className="pb-[35px]">
              <p className="text-white max-w-[272px]">
                we are open from Monday-Friday 08:00am - 05:00pm
              </p>
            </div>

            <div>
              <p className="pb-[14px] text-[#D434FE]">Share on</p>
              <div className="text-white flex">
                <div className="pr-2">
                  <FaInstagram />
                </div>
                <div className="pr-2">
                  <FaXTwitter />
                </div>
                <div className="pr-2">
                  <FaFacebookF />
                </div>
                <div className="pr-2">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-col w-full max-w-[617px] lg:bg-white lg:bg-opacity-[3%] lg:rounded-xl">
            <div className="block lg:hidden">
              <div className="flex justify-start py-[1.5rem]">
                <div
                  className="w-[23px] h-[23px] grid place-items-center rounded-full border-gradient text-white"
                  onClick={() => {}}>
                  <FiChevronLeft />
                </div>
              </div>
            </div>

            <div className="max-w-[617px] lg:p-20">
              <div className="py-[24px]">
                <h2 className="max-w-[195px] text-[#D434FE] text-[20px] font-semibold lg:max-w-[301px]">
                  Questions or need assistance? Let us know about it
                </h2>
              </div>
              <div className="pb-[30px]">
                <p className="text-white text-[12px] max-w-[239px]">
                  Email us below to any question related to our event
                </p>
              </div>

              <div className="">
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <div className="flex flex-col lg:gap-8">
                    <div className="flex flex-col pb-[18px]">
                      <input
                        type="email"
                        value={data["email"]}
                        onChange={handleChange}
                        name="email"
                        className="p-2 text-white rounded-[4px] bg-[#140D27] border-[1px] border-white"
                        placeholder="Email"
                      />
                    </div>
                    <div className="flex flex-col pb-[18px]">
                      <input
                        type="tel"
                        value={data["phone_number"]}
                        onChange={handleChange}
                        name="phone_number"
                        className="p-2 text-white rounded-[4px] bg-[#140D27] border-[1px] border-white"
                        placeholder="Phone Number"
                      />
                    </div>

                    <div className="flex flex-col pb-[18px]">
                      <input
                        value={data["first_name"]}
                        onChange={handleChange}
                        name="first_name"
                        className="p-2 text-white rounded-[4px] bg-[#140D27] border-[1px] border-white"
                        placeholder="First Name"
                      />
                    </div>

                    <div className="flex flex-col pb-[18px]">
                      <textarea
                        rows={4}
                        value={data["message"]}
                        onChange={handleChange}
                        name="message"
                        className="p-2 text-white rounded-[4px] bg-[#140D27] border-[1px] border-white"
                        placeholder="Message"
                      />
                    </div>

                    <div className="flex justify-center">
                      <div className="py-[1rem] lg:w-full">
                        <button
                          disabled={loading}
                          type="submit"
                          className="px-12 py-4 w-fit lg:w-full rounded-sm text-white submit-btn">
                          {loading ? "Loading" : "Submit"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactpage;
