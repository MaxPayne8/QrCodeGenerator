"use client";
import React, { useEffect, useRef, useState } from "react";
// import "./QrCode.scss";
import { QRCode } from "react-qrcode-logo";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import Aos from "aos";
import "aos/dist/aos.css";
import { FormFeedback, Input } from "reactstrap";
import { Link } from "react-scroll";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  // alert(show);
  const [qr_value, setqr_value] = useState([]);
  console.log("qr_value====", qr_value);
  const [setqr_val, setsetqr_val] = useState("");
  console.log("setqr_val======111", setqr_val);
  const [qr_style, setqr_style] = useState("squares");
  const [qr_color, setqr_color] = useState("black");
  const [qr_logo, setqr_logo] = useState("");
  const [name, setName] = useState("");
  const [nameerr, setnameerr] = useState(false);
  const [emailerr, setemailerr] = useState(false);
  const [phoneerr, setphoneerr] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [org, setOrg] = useState("");
  const [orgerr, setOrgerr] = useState(false);
  const [title, settitle] = useState("");
  const [titleErr, settitleErr] = useState(false);
  const [fax, setfax] = useState("");
  const [faxErr, setfaxErr] = useState(false);
  const [street, setstreet] = useState("");
  const [streetErr, setstreetErr] = useState(false);
  const [city, setcity] = useState("");
  const [cityErr, setcityErr] = useState(false);
  const [url, seturl] = useState("");
  const [urlErr, seturlErr] = useState(false);
  const [region, setregion] = useState("");
  const [regionErr, setregionErr] = useState(false);
  const [country, setcountry] = useState("");
  const [countryErr, setcountryErr] = useState(false);
  const [post, setpost] = useState("");
  const [postErr, setpostErr] = useState(false);
  const [size, setSize] = useState(false);
  const [printsize, setprintSize] = useState(false);
  const [scroll, setScroll] = useState(true);
  console.log("qr logo", qr_logo);
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const showToastMessage = () => {
    toast.success("QR GENERATED!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const create_qr = () => {
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      org === "" ||
      title === "" ||
      city === "" ||
      region === "" ||
      country === ""
    ) {
      scrollToTop();

      if (name === "") {
        setnameerr(true);
        setScroll(true);
      }
      if (email === "") {
        setemailerr(true);
        setScroll(true);
      }
      if (phone === "") {
        setphoneerr(true);
        setScroll(true);
      }
      if (org === "") {
        setOrgerr(true);
        setScroll(true);
      }
      if (title === "") {
        settitleErr(true);
        setScroll(true);
      }

      if (city === "") {
        setcityErr(true);
        setScroll(true);
      }

      if (region === "") {
        setregionErr(true);
        setScroll(true);
      }
      if (country === "") {
        setcountryErr(true);
        setScroll(true);
      }
    } else {
      showToastMessage();
      qr_value.push(`Name: ${String(name)}`); // Convert to string if necessary
      qr_value.push(`Email: ${String(email)}`); // Convert to string if necessary
      qr_value.push(`Phone Number: ${String(phone)}`); // Convert to string if necessary
      qr_value.push(`Organizaton: ${String(org)}`);
      qr_value.push(`Designation: ${String(title)}`);
      qr_value.push(`Fax Number: ${String(fax)}`);
      qr_value.push(`Street: ${String(street)}`);
      qr_value.push(`City: ${String(city)}`);
      qr_value.push(`Region: ${String(region)}`);
      qr_value.push(`Country: ${String(country)}`);
      qr_value.push(`Url/Website/Social: ${String(url)}`);

      setsetqr_val(String(qr_value));

      {
        qr_value.length === 11 && setqr_value([]);
      }
      {
        name !== "" && setName("");
      }
      {
        email !== "" && setEmail("");
      }
      {
        phone !== "" && setPhone("");
      }
      {
        org !== "" && setOrg("");
      }
      {
        phone !== "" && setPhone("");
      }
      {
        city !== "" && setcity("");
      }
      {
        country !== "" && setcountry("");
      }
      {
        fax !== "" && setfax("");
      }
      {
        street !== "" && setstreet("");
      }
      {
        region !== "" && setregion("");
      }
      {
        title !== "" && settitle("");
      }
      {
        url !== "" && seturl("");
      }
      scrollToTop();
    }
  };

  const componentRef = useRef();

  const handlePrint = () => {
    html2canvas(componentRef.current).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");

      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "qr_code.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };
  useEffect(() => {
    Aos.init();
  }, []);
  useEffect(() => {
    if (name !== "") {
      setnameerr(false);
      setScroll(false);
    }
    if (email !== "") {
      setemailerr(false);
      setScroll(false);
    }
    if (phone !== "") {
      setphoneerr(false);
      setScroll(false);
    }
    if (region !== "") {
      setregionErr(false);
      setScroll(false);
    }
    if (city !== "") {
      setcityErr(false);
      setScroll(false);
    }
    if (country !== "") {
      setcountryErr(false);
      setScroll(false);
    }

    if (title !== "") {
      settitleErr(false);
      setScroll(false);
    }

    if (org !== "") {
      setOrgerr(false);
      setScroll(false);
    }
  }, [
    name,
    email,
    phone,
    org,
    title,
    fax,
    url,
    post,
    country,
    city,
    region,
    street,
  ]);

  return (
    <div className="body1">
      <ToastContainer />
      <div className="center_container flex flex-col-reverse gap-14 md:gap-0 md:flex-row justify-between py-4 px-4  md:px-40">
        <div className="section1 " data-aos="fade-right">
          <div
            className="p-2 border-2 border-black hidden md:block  mx-auto justify-center items-center"
            ref={componentRef}
          >
            <QRCode
              value={setqr_val}
              size={350}
              fgColor={qr_color}
              qrStyle={qr_style}
              logoImage={qr_logo}
              logoWidth={50}
              logoHeight={50}
              logoOpacity={1}
            />
          </div>
          <div
            className="p-2 border-2 border-black  md:hidden flex justify-center items-center"
            ref={componentRef}
          >
            <QRCode
              value={setqr_val}
              size={300}
              fgColor={qr_color}
              qrStyle={qr_style}
              logoImage={qr_logo}
              logoWidth={50}
              logoHeight={50}
              logoOpacity={1}
            />
          </div>

          <button
            className={`text-center bg-green-500 w-full text-white p-1 rounded-lg m-1 ${
              printsize && "scale-90"
            }`}
            variant="success"
            onClick={handlePrint}
            onMouseDown={() => setprintSize(true)}
            onMouseUp={() => setprintSize(false)}
          >
            Download
          </button>
        </div>
        <div className="section2 w-full md:w-[60%] " data-aos="fade-left">
          <form
            className="sub_section flex flex-col  items-center border-2 border-black "
            onSubmit={(e) => {
              e.preventDefault();
              create_qr();
            }}
          >
            <h2 className="font-semibold text-2xl" name="top">
              Generate QR Code
            </h2>

            <div className="qr_style flex flex-col items-center mx-auto ">
              <div className="flex flex-col gap-4 font-semibold mt-2">
                <label className="text-center font-semibold">
                  Enter Contact Details
                </label>
                <div className=" flex flex-col md:flex-row justify-between gap-2 md:gap-16">
                  <div className="flex flex-col ">
                    <h1 className="text-sm  ">Please enter Full Name* </h1>
                    <Input
                      className="w-full border-2 border-black my-2 rounded-lg px-1"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      placeholder="Full Name"
                    />
                    {nameerr && (
                      <label className="text-red-800 text-sm font-semibold -mt-2">
                        please enter your name
                      </label>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-sm ">Please enter Email Address* </h1>
                    <input
                      className="w-full border-2 border-black my-2 rounded-lg px-1"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Email Address"
                    />
                    {emailerr && (
                      <label className="text-red-800 text-sm font-semibold -mt-2">
                        please enter email
                      </label>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-16">
                  <div className="flex flex-col">
                    <h1 className="text-sm ">Please enter Phone Number* </h1>
                    <input
                      className="w-full border-2 border-black my-2 rounded-lg px-1"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      placeholder="Phone Number"
                    />
                    {phoneerr && (
                      <label className="text-red-800 text-sm font-semibold -mt-2">
                        please enter phone number
                      </label>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-sm ">Please enter Organization* </h1>
                    <input
                      className="w-full border-2 border-black my-2 rounded-lg px-1"
                      value={org}
                      onChange={(e) => {
                        setOrg(e.target.value);
                      }}
                      placeholder="Organization"
                    />
                    {orgerr && (
                      <label className="text-red-800 text-sm font-semibold -mt-2">
                        please enter organization
                      </label>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-16">
                  <div className="flex flex-col">
                    <h1 className="text-sm ">Please enter Designation* </h1>
                    <input
                      className="w-full border-2 border-black my-2 rounded-lg px-1"
                      value={title}
                      onChange={(e) => {
                        settitle(e.target.value);
                      }}
                      placeholder="Title"
                    />
                    {titleErr && (
                      <label className="text-red-800 text-sm font-semibold -mt-2">
                        please enter title
                      </label>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-sm ">Please enter Fax Number </h1>
                    <input
                      className="w-full border-2 border-black my-2 rounded-lg px-1"
                      value={fax}
                      onChange={(e) => {
                        setfax(e.target.value);
                      }}
                      placeholder="Fax"
                    />
                    {faxErr && (
                      <label className="text-red-800 text-sm font-semibold -mt-2">
                        please enter fax number
                      </label>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-16">
                  <div className="flex flex-col">
                    <h1 className="text-sm ">Please enter Street </h1>
                    <input
                      className="w-full border-2 border-black my-2 rounded-lg px-1"
                      value={street}
                      onChange={(e) => {
                        setstreet(e.target.value);
                      }}
                      placeholder="Street"
                    />
                    {streetErr && (
                      <label className="text-red-800 text-sm font-semibold -mt-2">
                        please enter street
                      </label>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-sm ">Please enter City* </h1>
                    <input
                      className="w-full border-2 border-black my-2 rounded-lg px-1"
                      value={city}
                      onChange={(e) => {
                        setcity(e.target.value);
                      }}
                      placeholder="City"
                    />
                    {cityErr && (
                      <label className="text-red-800 text-sm font-semibold -mt-2">
                        please enter city
                      </label>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-16">
                  <div className="flex flex-col">
                    <h1 className="text-sm ">Please enter Region* </h1>
                    <input
                      className="w-full border-2 border-black my-2 rounded-lg px-1"
                      value={region}
                      onChange={(e) => {
                        setregion(e.target.value);
                      }}
                      placeholder="Region"
                    />
                    {regionErr && (
                      <label className="text-red-800 text-sm font-semibold -mt-2">
                        please enter region
                      </label>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-sm ">Please enter Zip Code </h1>
                    <input
                      className="w-full border-2 border-black my-2 rounded-lg px-1"
                      value={post}
                      onChange={(e) => {
                        setpost(e.target.value);
                      }}
                      placeholder="Zip Code"
                    />
                    {postErr && (
                      <label className="text-red-800 text-sm font-semibold -mt-2">
                        please enter zip code
                      </label>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-16">
                  <div className="flex flex-col">
                    <h1 className="text-sm ">Please enter Country* </h1>
                    <input
                      className="w-full border-2 border-black my-2 rounded-lg px-1"
                      value={country}
                      onChange={(e) => {
                        setcountry(e.target.value);
                      }}
                      placeholder="Country"
                    />
                    {countryErr && (
                      <label className="text-red-800 text-sm font-semibold -mt-2">
                        please enter country
                      </label>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-sm ">
                      Please enter Url/Website/Social{" "}
                    </h1>
                    <input
                      className="w-full border-2 border-black my-2 rounded-lg px-1"
                      value={url}
                      onChange={(e) => {
                        seturl(e.target.value);
                      }}
                      placeholder="Url/Website/Social"
                    />
                    {urlErr && (
                      <label className="text-red-800 text-sm font-semibold -mt-2">
                        please enter Url/Website/Social
                      </label>
                    )}
                  </div>
                </div>
              </div>

              <p className=" mt-4  mb-2 font-semibold ">Select Logo</p>
              <div className="style_container flex justify-center">
                <input
                  type="file"
                  className="flex justify-center bg-gray-400 w-64 "
                  onChange={(e) => {
                    const selectedFile = e.target.files[0];
                    if (selectedFile) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        const base64String = event.target.result;
                        setqr_logo(base64String);
                      };
                      reader.readAsDataURL(selectedFile);
                    }
                  }}
                />

                {qr_logo && (
                  <button
                    className="text-white bg-red-700"
                    type="button"
                    onClick={() => {
                      setqr_logo("");
                    }}
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            <div className="qr_style flex flex-col justify-center items-center">
              <p className="font-semibold mt-2">Style</p>
              <div className="style_container flex ">
                <span>
                  <button
                    className={`p-2 m-2 rounded-lg bg-gray-300 ${
                      qr_style === "squares" ? "border-2 border-black" : ""
                    }`}
                    type="button"
                    onClick={() => setqr_style("squares")}
                  >
                    Squares
                  </button>
                </span>
                <span>
                  <button
                    className={`p-2 m-2 rounded-lg bg-gray-300 ${
                      qr_style === "dots" ? "border-2 border-black" : ""
                    }`}
                    type="button"
                    onClick={() => setqr_style("dots")}
                  >
                    Dots
                  </button>
                </span>
              </div>
            </div>

            <div className="qr_color flex flex-col justify-center items-center font-semibold">
              <p>Color</p>
              <div className="colos_container flex justify-between gap-3 my-2">
                <button
                  style={{
                    background: "red",
                    borderRadius: "1.6rem",
                    padding: "16px",
                    border: qr_color == "red" ? "3px solid black" : "none",
                  }}
                  type="button"
                  onClick={() => setqr_color("red")}
                ></button>

                <button
                  style={{
                    background: "blue",
                    borderRadius: "1.6rem",
                    padding: "16px",
                    border: qr_color == "blue" ? "3px solid black" : "none",
                  }}
                  type="button"
                  onClick={() => setqr_color("blue")}
                ></button>

                <button
                  style={{
                    background: "green",
                    borderRadius: "1.6rem",
                    padding: "16px",
                    border: qr_color == "green" ? "3px solid black" : "none",
                  }}
                  type="button"
                  onClick={() => setqr_color("green")}
                ></button>

                <button
                  style={{
                    background: "gray",
                    borderRadius: "1.6rem",
                    padding: "16px",
                    border: qr_color == "gray" ? "3px solid black" : "none",
                  }}
                  type="button"
                  onClick={() => setqr_color("gray")}
                ></button>
              </div>
            </div>

            <div className="download_container">
              <Link to={"home"} smooth duration={500}>
                <button
                  className={`p-1 text-white bg-slate-900 rounded-lg my-4 ${
                    size && "scale-90"
                  }`}
                  type="button"
                  // disabled={qr_value == ""}
                  onClick={create_qr}
                  onMouseDown={() => setSize(true)}
                  onMouseUp={() => setSize(false)}
                >
                  Create QR Code
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
