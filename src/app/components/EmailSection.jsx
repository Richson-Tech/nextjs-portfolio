"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Twitter from "../../../public/twitter-icon.svg";
import Whatsapp from "../../../public/whatsapp-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";

const EmailSection = () => {
  const [state, handleSubmit] = useForm("https://formspree.io/f/mpzvklrd");
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const response = await fetch("https://formspree.io/f/mpzvklrd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: event.target.email.value,
        subject: event.target.subject.value,
        message: event.target.message.value,
      }),
    });

    if (response.ok) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          surely get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Richson-Tech">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/folorunsho-ahmed-554620241/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/folorunsho-ahmed-554620241/">
            <Image src={Twitter} alt="Linkedin Icon" className="h-10" />
          </Link>
          <Link href="https://wa.me/message/IANVGLPYCMKFG1">
            <Image src={Whatsapp} alt="Whatsapp Icon" className="h-10" />
          </Link>
        </div>
      </div>
      <div>
        {submitted ? (
          <>
            <div className="flex flex-row justify-center items-center text-white">
              <h2 className="">Message sent!</h2>
              <p className="">Thanks for contacting me, I will get in touch with you shortly.</p>
            </div>
          </>
        ) : (
          <form className="flex flex-col" onSubmit={handleFormSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="your email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                id="subject"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="subject of your mail"
              />

              <ValidationError
                prefix=" Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
              <ValidationError
                prefix=" Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className=" bg-secondary-500 hover:bg-blue-00 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            <ValidationError errors={state.errors} />
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
