// "use client";
// import React, { useEffect, useState } from "react";
// import { CgProfile } from "react-icons/cg";
// import { MdEmail } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
// import { RiLockPasswordFill } from "react-icons/ri";
// import signupbg from "../signupbg.jpg";
// import Image from "next/image";
// import { FaGoogle } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import axios from "axios";
// // import { serverAddress } from "../constants/ServerAddress.js";
// import { useDispatch, useSelector } from "react-redux";
// // import { addOtp } from "@/app/Utils/appSlice";
// import Link from "next/link";
// // useRouter
// import { useRouter } from "next/navigation";
// import { addOtp } from "../Utils/appSlice";

// const Login = () => {
//   //   const { otp } = useSelector((store) => store.qr);
//   const router = useRouter();
//   const [err, setErr] = useState(false);

//   //   console.log(otp);
//   //   const dispatch = useDispatch();
//   const [otpp, setOtpp] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   const handleSignIn = () => {
//     setOtpp(true);
//     sign_up();
//   };
//   const handleOtp = () => {
//     if (otpnum === recOtp) {
//       router.push("/Login", { scroll: false });
//     } else {
//       setErr(true);
//     }
//     //   try {
//     //     const response = await axios
//     //       .post("http://192.168.1.35:8000/" + "verify_otp/", {
//     //         otp: otpnum,
//     //         email: email,
//     //       })
//     //       .then(function (response) {
//     //         console.log("sign  Res in resp", response);
//     //       });
//     //   } catch (error) {
//     //     // if (
//     //     //   error.response.data.detail === "Your Channel Access Is Not Correct"
//     //     // ) {
//     //     //   toast.error("You are not authorized. Please contact the admin.");
//     //     // }
//     //     console.log("errr", error);
//     //   }
//   };
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [otpnum, setOptnum] = useState("");
//   const [recOtp, setRecOtp] = useState("");
//   const sign_up = () => {
//     axios
//       .post("http://192.168.1.35:8000/" + "signup/", {
//         username: name,
//         password: password,
//         email: email,
//       })
//       .then(function (response) {
//         console.log("sign  Res in resp", response);
//         setRecOtp(response.data.otp);
//         // dispatch(addOtp(response.data.otp));
//       })
//       .catch(function (error) {
//         // if (
//         //   error.response.data.detail === "Your Channel Access Is Not Correct"
//         // ) {
//         //   toast.error("You are not authorized. Please contact the admin.");
//         // }
//         console.log("errr", error);
//       });
//   };

//   useEffect(() => {
//     // alert("hello");
//     if (!otpnum.length) {
//       setErr(false);
//     }
//   }, [otpnum]);

//   return (
//     <div className="relative">
//       <div>
//         <Image
//           src={signupbg}
//           className="absolute -top-80 left-0 right-0 bottom-0 z-10 opacity-50 "
//         />
//       </div>

//       <div className="">
//         <form
//           className="flex flex-col items-center justify-center  gap-6 z-20 absolute top-20 left-0 right-0 bg-black bg-opacity-30 w-96 mx-auto p-4 rounded-lg text-white font-semibold"
//           onSubmit={(e) => handleSubmit(e)}
//         >
//           <h1 className="text-center text-3xl">Sign Up</h1>
//           <div className="flex gap-2">
//             <div className="text-slate-700">
//               <CgProfile size={30} />
//             </div>
//             <input
//               placeholder="User Name"
//               className="border border-black px-1 text-slate-950"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="flex gap-2">
//             <div className="text-blue-600">
//               <MdEmail size={30} />
//             </div>
//             <input
//               placeholder="Email"
//               className="border border-black px-1 text-slate-950"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="flex gap-2">
//             <div className="text-green-600">
//               <FaPhoneAlt size={30} />
//             </div>
//             <input
//               placeholder="Phone Number"
//               className="border border-black px-1 text-slate-950"
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </div>
//           <div className="flex gap-2">
//             <div className="text-red-600">
//               <RiLockPasswordFill size={30} />
//             </div>
//             <input
//               type="password"
//               placeholder="Password"
//               className="border border-black px-1 text-slate-950"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button
//             className="bg-gradient-to-b from-blue-800 via-blue-600 to-blue-800 py-1 px-8 rounded-lg text-white"
//             onClick={() => handleSignIn()}
//           >
//             Sign Up
//           </button>
//           {otpp && (
//             <div className="flex flex-col justify-center items-center gap-2">
//               <input
//                 placeholder="Enter otp"
//                 className="border border-black w-32 px-1 text-green-800 text-center "
//                 onChange={(e) => setOptnum(e.target.value)}
//               />
//               <button
//                 className="bg-green-600 text-slate-200 p-1 rounded-lg"
//                 onClick={() => handleOtp()}
//               >
//                 Submit Otp
//               </button>
//             </div>
//           )}
//           {err && <h1 className="text-sm text-red-600 -mt-4 ">Wrong Otp</h1>}
//           <div className="flex flex-col justify-center items-center gap-2">
//             <h3>Sign up with</h3>
//             <div className="flex gap-4">
//               <div className="flex gap-1 items-center bg-slate-600 p-1 rounded-lg">
//                 <h1>Google</h1>
//                 <FaGoogle size={15} color="red" />
//               </div>
//               <div className="flex gap-1 items-center bg-slate-600 p-1 rounded-lg">
//                 <h1>Facebook</h1>
//                 <FaFacebook size={15} color="blue" />
//               </div>
//             </div>
//           </div>
//           <h1 className="font-semibold">
//             Already have an account?
//             <Link href="/Login">
//               {" "}
//               <span className="mx-1 text-blue-600">Sign In</span>
//             </Link>
//           </h1>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import Login from "@/Components/Login";
import React from "react";

const page = () => {
  return <Login />;
};

export default page;
