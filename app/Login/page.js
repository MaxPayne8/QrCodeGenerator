// "use client";
// import React, { useState } from "react";
// import { CgProfile } from "react-icons/cg";
// import { MdEmail } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
// import { RiLockPasswordFill } from "react-icons/ri";
// import signupbg from "../signupbg.jpg";
// import Image from "next/image";
// import { FaGoogle } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import Link from "next/link";
// // import { Link } from "react-scroll";

// const RealLogin = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
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
//           <h1 className="text-center text-3xl">Sign In</h1>
//           <div className="flex gap-2">
//             <div className="text-slate-700">
//               <CgProfile size={30} />
//             </div>
//             <input
//               placeholder="User Name"
//               className="border border-black px-1 text-slate-950"
//             />
//           </div>
//           {/* <div className="flex gap-2">
//             <div className="text-blue-600">
//               <MdEmail size={30} />
//             </div>
//             <input
//               placeholder="Email"
//               className="border border-black px-1 text-slate-950"
//             />
//           </div> */}
//           {/* <div className="flex gap-2">
//             <div className="text-green-600">
//               <FaPhoneAlt size={30} />
//             </div>
//             <input
//               placeholder="Phone Number"
//               className="border border-black px-1 text-slate-950"
//             />
//           </div> */}
//           <div className="flex gap-2">
//             <div className="text-red-600">
//               <RiLockPasswordFill size={30} />
//             </div>
//             <input
//               type="password"
//               placeholder="Password"
//               className="border border-black px-1 text-slate-950"
//             />
//           </div>
//           <Link href="/Home">
//             <button className="bg-gradient-to-b from-blue-800 via-blue-600 to-blue-800 py-1 px-8 rounded-lg text-white">
//               Sign In
//             </button>
//           </Link>

//           {/* {otp && (
//             <div className="flex flex-col justify-center items-center gap-2">
//               <input
//                 placeholder="Enter otp"
//                 className="border border-black w-32 px-1"
//               />
//               <button className="bg-green-600 text-slate-200 p-1 rounded-lg">
//                 Submit Otp
//               </button>
//             </div>
//           )} */}
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
//             Don't have an account?
//             <Link href="/Signup">
//               {" "}
//               <span className="mx-1 text-blue-600">Sign Up</span>
//             </Link>
//           </h1>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RealLogin;

import RealLogin from "@/Components/RealLogin";
import React from "react";

const page = () => {
  return <RealLogin />;
};

export default page;
