import React, { useState } from "react";
import { contactImg } from "../../assets/img/images";
import Select from "react-select";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { PhoneNumberUtil } from "google-libphonenumber";

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    city: "",
    companySize: "",
    interests: [],
    currentTools: [],
    // otherTool: "",
    challenges: "",
  });
  const [errors, setErrors] = useState({});

  const phoneUtil = PhoneNumberUtil.getInstance();

  const isPhoneValid = (phone) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };

  const isValid = isPhoneValid(formData.phone);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));
  };
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };
  const handleSelectChange = (selectedOption, { name }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedOption, // Set the selected option directly (it will be an object for single-select)
    }));
  };

  // const handleOtherToolChange = (e) => {
  //   const { value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, otherTool: value }));
  // };

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const validateForm = () => {
    let formErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

    if (!formData.name) {
      formErrors.name = "Name is required.";
    }

    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone || !isValid) {
      formErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.city) {
      formErrors.city = "City is required.";
    }

    // if (!formData.company) {
    //   formErrors.company = "Company name is required.";
    // }

    // if (!formData.companySize) {
    //   formErrors.companySize = "Company size is required.";
    // }

    // if (formData.interests.length === 0) {
    //   formErrors.interests = "Please select at least one key interest.";
    // }
    // if (!formData.challenges) {
    //   formErrors.challenges = "Challenges is required.";
    // }

    // Update errors state
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e, onSuccess) => {
    e.preventDefault();
    if (validateForm()) {
      if (!captchaValue) {
        toast.error("Please complete the CAPTCHA to proceed.");
        return;
      }

      setIsSubmitting(true);
      const serviceId = import.meta.env.VITE_APP_EMAIL_SERVICE_ID;
      const templateId = import.meta.env.VITE_APP_TEMPLATE_SERVICE_ID;
      const publicKey = import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY;

      // Extract only values from the selected options
      const selectedInterests = formData.interests
        .map((option) => option.value)
        .join(", ");
      const selectedCurrentTools = formData.currentTools
        .map((option) => option.value)
        .join(", ");

      // Extract the value from companySize correctly (single object)
      const companySizeValue = formData.companySize
        ? formData.companySize.value
        : "";

      const templateParams = {
        from_name: formData.name,
        to_name: "CollabDash",
        from_email: formData.email,
        from_phone: formData.phone,
        city: formData.city,
        company: formData.company,
        companySize: companySizeValue,
        interests: selectedInterests,
        currentTools: selectedCurrentTools,
        // otherTools: formData.otherTool,
        challenges: formData.challenges,
      };
      // console.log("Submitting data:", templateParams);

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          // console.log("Form Data", templateParams);
          // Reset form data after successful submission
          toast.success("Request submitted. We'll be in touch soon.");
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            city: "",
            companySize: "",
            interests: [],
            currentTools: [],
            // otherTool: "",
            challenges: "",
          });

          if (onSuccess) {
            onSuccess();
          }
        })
        .catch((error) => {
          console.log("FAILED..", error);
          toast.error("Something Went Wrong!");
        })
        .finally(() => {
          setStep(1);
          setCaptchaValue(null);
          setIsSubmitting(false);
        });

      // Reset to step 1 after submission
    }
    // Reset loading state
  };

  const companySizeOptions = [
    { value: "1-10 employees", label: "1-10 employees" },
    { value: "11-50 employees", label: "11-50 employees" },
    { value: "51-200 employees", label: "51-200 employees" },
    { value: "201+ employees", label: "201+ employees" },
  ];

  const interestOptions = [
    { value: "Collaboration tools", label: "Collaboration tools" },
    { value: "Project management", label: "Project management" },
    { value: "Time tracking", label: "Time tracking" },
    { value: "Team productivity", label: "Team productivity" },
    {
      value: "Integration with existing tools",
      label: "Integration with existing tools",
    },
  ];

  const currentToolsOptions = [
    { value: "Trello", label: "Trello" },
    { value: "Asana", label: "Asana" },
    { value: "Slack", label: "Slack" },
    { value: "Jira", label: "Jira" },
    { value: "Google Workspace", label: "Google Workspace" },
    // { value: "Other", label: "Other" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      maxHeight: "56px",
      backgroundColor: "#161616",
      border: "2px solid rgb(255 255 255 / 0.4)",
      padding: "0.35rem 1rem 0.4rem 1rem",
      borderRadius: "8px",
      //   boxShadow: state.isFocused ? "none" : "none", // remove the blue box-shadow
      color: "rgb(255 255 255 / 0.6)",
      outline: "none", // remove the default focus outline
      WebkitTapHighlightColor: "transparent",
      cursor: "pointer",
      fontSize: "1rem", // text-sm in Tailwind
      lineHeight: "1.25rem",
      height: "auto",
      // Custom scrollbar styles
      "&::-webkit-scrollbar": {
        width: "8px", // Width of the scrollbar
      },
      "&::-webkit-scrollbar-track": {
        background: "#272727", // Background of the scrollbar track
        borderRadius: "8px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#888888", // Color of the scrollbar thumb
        borderRadius: "8px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#555555", // Color of the scrollbar thumb on hover
      },
      ...(state.selectProps.isMulti && {
        // height: "80px", // Apply height only for multi-select
        overflowY: "auto", // Enable overflow only for multi-select
        height: "auto",
      }),
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "rgb(255 255 255 / 0.6)", // placeholder color (text-gray-400)
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white", // value color (text-black)
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "rgb(255 255 255 / 0.6)", // dropdown arrow color (text-black)
      paddingRight: "0.5rem",
      display: state.isDisabled ? "none" : "block", // hide arrow when disabled
    }),
    indicatorSeparator: () => ({ display: "none" }), // remove separator
    menu: (provided) => ({
      ...provided,
      borderRadius: "0.375rem", // rounded-md
      border: "1px solid #38383856", // border (border-gray-300)
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", // slight shadow for the dropdown
      overflowY: "auto",
      maxHeight: "210px",
      backgroundColor: "#272727",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "rgb(0 0 0 / 0.6)" // selected background color (from your example)
        : state.isFocused
        ? "#3e3e3e"
        : "#272727",
      color: state.isSelected ? "white" : "#ffffff", // selected text color (text-white)
      padding: "0.5rem 1rem", // padding for options
      cursor: "pointer",
      overflowY: "auto",
      outline: "none", // Remove default outline on focus
      // Optional: add a transition for a smoother effect
      transition: "background-color 0.2s ease",
      // To prevent the light blue background when clicked
      "&:active": {
        backgroundColor: state.isFocused ? "rgb(0 0 0 / 0.6)" : "#3e3e3e",
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#383838", // Background color for the selected items (tags)
      borderRadius: "0.25rem", // Rounded corners
      padding: "0.2rem 0.5rem", // Padding inside the tag
      color: "white", // Text color inside the tag
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "white", // Text color for the label of the selected item
      fontSize: "0.875rem", // Adjust font size (text-sm)
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "white", // Color of the "x" icon
      cursor: "pointer",
      ":hover": {
        backgroundColor: "rgb(255 255 255 / 0.2)", // Background when hovering over "x"
        color: "white",
      },
    }),
  };

  return (
    <div className="relative px-4 sm:px-6 py-8 sm:py-12 overflow-hidden bg-[url('/src/assets/img/contactBg.png')] bg-no-repeat bg-cover bg-top w-full">
      <div className="min-[1400px]:max-w-[90%] max-w-[94%] mx-auto ">
        <div className="flex flex-col md:gap-10 gap-6">
          <div className="h-0.5 w-full bg-white/30 rounded-full mb-4"></div>

          <div className="max-w-3xl mx-auto">
            <h3 className="font-outfit-bold text-[26px] min-[540px]:text-3xl sm:text-4xl md:text-5xl  leading-tight text-white text-center font-medium">
              Start Your <span className="text-heroColor ">Free Trial</span>{" "}
            </h3>
          </div>
          <div className="flex justify-between items-center gap-3 ">
            <div className="w-full">
              <div className="flex mb-8 lg:max-w-sm sm:max-w-xs max-w-[250px] sm:mx-0 mx-auto">
                <button
                  className={`flex-1 xl:py-3 py-2 ${
                    step === 1 ? "bg-white text-black" : "bg-stepBg text-white"
                  } rounded-l-lg transition-all duration-300 ease-in-out font-outfit`}
                  onClick={() => setStep(1)}
                >
                  STEP 1
                </button>
                <button
                  className={`flex-1 xl:py-3 py-2 ${
                    step === 2 ? "bg-white text-black" : "bg-stepBg text-white"
                  } rounded-r-lg transition-all duration-300 ease-in-out font-outfit`}
                  onClick={() => setStep(2)}
                >
                  STEP 2
                </button>
              </div>
              <form
                onSubmit={handleSubmit}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // Prevents form submission on pressing Enter
                  }
                }}
                className=""
              >
                <div
                  className={`transition-all duration-300 ease-in-out  ${
                    step === 1
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-full hidden"
                  }`}
                >
                  <div className="sm:space-y-8 space-y-4">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                      <div className="flex flex-col gap-2 w-full">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full font-outfit py-3 px-6 rounded-lg bg-inputBg border-2 border-white/40 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none "
                        />
                        {errors.name && (
                          <span className="text-red-500 font-outfit lg:text-base text-sm">
                            {errors.name}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full font-outfit py-3 px-6 rounded-lg bg-inputBg border-2 border-white/40 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none"
                        />
                        {errors.email && (
                          <span className="text-red-500 font-outfit lg:text-base text-sm">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                      <div className="flex flex-col gap-2 w-full">
                        {/* <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full font-outfit py-3 px-6 rounded-lg bg-inputBg border-2 border-white/40 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none"
                        /> */}

                        <PhoneInput
                          defaultCountry="pk"
                          name="phone"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          placeholder="Phone number"
                          className="w-full font-outfit py-1.5 px-6 rounded-lg bg-inputBg border-2 border-white/40 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none"
                        />
                        {errors.phone && (
                          <span className="text-red-500 font-outfit lg:text-base text-sm">
                            {errors.phone}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col gap-2 w-full">
                        <input
                          type="text"
                          name="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full font-outfit py-3 px-6 rounded-lg bg-inputBg border-2 border-white/40 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none"
                        />
                        {errors.city && (
                          <span className="text-red-500 font-outfit lg:text-base text-sm">
                            {errors.city}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-40 mt-8 py-2 font-outfit lg:text-lg text-base bg-heroColor text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Next
                  </button>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    step === 2
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-full hidden"
                  }`}
                >
                  <div className="sm:space-y-8 space-y-4">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                      <div className="flex flex-col gap-2 w-full">
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full font-outfit py-3 px-6 rounded-lg bg-inputBg border-2 border-white/40 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none"
                        />
                        {/* {errors.company && (
                          <span className="text-red-500 font-outfit lg:text-base text-sm">
                            {errors.company}
                          </span>
                        )} */}
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <Select
                          name="companySize"
                          options={companySizeOptions}
                          placeholder="Select Company Size"
                          value={formData.companySize}
                          styles={customStyles}
                          onChange={handleSelectChange}
                          className="w-full font-outfit"
                          classNamePrefix="react-select"
                        />
                        {/* {errors.companySize && (
                          <span className="text-red-500 font-outfit lg:text-base text-sm">
                            {errors.companySize}
                          </span>
                        )} */}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                      <div className="flex flex-col gap-2 w-full">
                        <Select
                          isMulti
                          name="interests"
                          options={interestOptions}
                          placeholder="Key Interests"
                          value={formData.interests}
                          styles={customStyles}
                          onChange={handleSelectChange}
                          className="w-full font-outfit "
                          classNamePrefix="react-select"
                        />
                        {/* {errors.interests && (
                          <span className="text-red-500 font-outfit lg:text-base text-sm">
                            {errors.interests}
                          </span>
                        )} */}
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <Select
                          isMulti
                          name="currentTools"
                          options={currentToolsOptions}
                          placeholder="Current Tools You Use"
                          value={formData.currentTools}
                          styles={customStyles}
                          onChange={handleSelectChange}
                          className="w-full font-outfit"
                          classNamePrefix="react-select"
                        />
                      </div>
                    </div>
                    {/* <div
                      className={`grid ${
                        formData.currentTools.some(
                          (tool) => tool.value === "Other"
                        )
                          ? "sm:grid-cols-2 grid-cols-1"
                          : "grid-cols-1"
                      } gap-3`}
                    >
                      <Select
                        isMulti
                        name="currentTools"
                        options={currentToolsOptions}
                        placeholder="Current Tools You Use"
                        value={formData.currentTools}
                        styles={customStyles}
                        onChange={handleSelectChange}
                        className="w-full font-outfit"
                        classNamePrefix="react-select"
                      />
                      {formData.currentTools.some(
                        (tool) => tool.value === "Other"
                      ) && (
                        <input
                          type="text"
                          name="otherTool"
                          placeholder="Please specify"
                          value={formData.otherTool}
                          onChange={handleOtherToolChange}
                          className="w-full font-outfit py-3 px-6 rounded-lg bg-inputBg border-2 border-white/40 text-white placeholder-white/60 focus:outline-none focus:ring-0"
                        />
                      )}
                    </div> */}
                    <div className="grid  grid-cols-1 place-items-center gap-3">
                      <div className="flex flex-col gap-2 w-full">
                        <textarea
                          name="challenges"
                          placeholder="Describe your biggest challenges with collaboration, time tracking, or productivity."
                          value={formData.challenges}
                          onChange={handleInputChange}
                          className="w-full font-outfit h-32 py-3 px-6 rounded-lg bg-inputBg border-2 border-white/40 text-white placeholder-white/60 focus:outline-none focus:ring-0"
                        />
                        {/* {errors.challenges && (
                          <span className="text-red-500 font-outfit lg:text-base text-sm">
                            {errors.challenges}
                          </span>
                        )} */}
                      </div>
                    </div>
                    <div className="grid  grid-cols-1 gap-3">
                      <ReCAPTCHA
                        sitekey={import.meta.env.VITE_APP_CAPTCHA_SITE_KEY}
                        // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={handleCaptchaChange}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="w-40 py-2 bg-stepBg text-white rounded-lg font-outfit lg:text-lg text-base font-semibold hover:bg-opacity-90 transition-colors duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-40 py-2 font-outfit text-white bg-heroColor rounded-lg lg:text-lg text-base font-semibold hover:bg-opacity-90 transition-colors duration-300 ${
                        isSubmitting && "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="lg:block hidden">
              <img
                src={contactImg}
                alt=""
                className="xl:w-[800px] w-[600px] object-contain aspect-square"
              />
            </div>
          </div>

          {/* <div className="h-0.5 w-full bg-white/30 rounded-full"></div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
