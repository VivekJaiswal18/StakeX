
// import Link from "next/link";
// import React from "react";

// // import UserAccountNav from "./NavbarAccount";
// // import { ThemeToggle } from "./ThemeToggle";
// // import { ThemeToggle } from "./ThemeProvider";
// // import { getAuthSession } from "@/lib/nextauth";
// // import { getAuthSession } from "../lib/nextauth";
// // import SignInButton from "./SignInButton";
// // import { useUser } from "@clerk/nextjs";
// // import { NavbarMenus } from "./NavbarMenus";
// // import { ConnectButton } from '@rainbow-me/rainbowkit';

// const Navbar = () => {

//    return (
//     <>
//     <div className="fixed font-montserrat inset-x-0 top-0 bg-slate-700 z-[10] h-fit border-b border-slate-900 py-2">
//       <div className="flex items-center justify-between px-8 mx-auto max-w-7xl">
//         <div className="flex items-center gap-8">
//           <Link href={"/"} className="flex items-center">
//             <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
//               EarnStake
//             </p>
//           </Link>
//         </div>
//           {/* <NavbarMenus /> */}
        
//         <div className="flex items-center gap-8">
//         </div>
//       </div>
//     </div>
//     <div className="flex-col bg-slate-900">
//       <div>
//         <p>EarnStake</p>
//       </div>
//       <div className="flex-col">
//         <p>Documentation</p>
//         <p>Uses</p>
//       </div>
//     </div>
//     </>
//   );

//  };
// export default Navbar; 


// 'use client'
// const Navbar = () =>{

// // Need to use Prop Drilling

//     return(
       
//             <div className="bg-navbarbg px-10 mb-5 rounded-b-lg fixed top-0 text-4xl py-2 flex w-screen">
//                     {/* <Link to={"/"}> */}
//                 <div className="cursor-pointer">
//                 <h2>VideoTube</h2>
//                 </div>
//                 {/* </Link> */}
//                 <div className="flex cursor-pointer gap-7 mx-auto justify-center items-center">
//                 {/* <Link to={"/"}> */}
//                 <h2>Videos</h2>
//                 {/* </Link> */}
//                 <h2>Documentation</h2>
//                 <h2>Uses</h2>
//             </div>
//             {/* <Link to={"/profile"}> */}
//             <div className="cursor-pointer">
//                 Profile
//             </div>
//             {/* </Link> */}
//             </div>
        
//     )
// }

// export default Navbar


  


'use client'
import { chain } from '@/app/chain'
import { client } from '@/app/client'
import Link from 'next/link'
import { ConnectButton } from 'thirdweb/react'

const Navbar = () => {
  return (
    <nav className="bg-navbarbg mb-10 honk-newfont bg-black top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-4xl py-2 cursor-pointer">
            <h2>StakeX</h2>
          </Link>
          
          <div className="flex items-center gap-7">
            <Link href="/" className="text-4xl cursor-pointer">
              <h2>Developers</h2>
            </Link>
            <h2 className="text-4xl cursor-pointer">Uses</h2>
            <h2 className="text-4xl cursor-pointer">About</h2>
          </div>
          
          <div className="text-6xl bg-black cursor-pointer">
          <ConnectButton 
            client={client}
            chain={chain}>
            Profile
          </ConnectButton>
            
          </div>
        </div>
      </div>
    </nav>
//     <div className="bg-navbarbg px-10 mb-5 mb-10 rounded-b-lg honk-newfont fixed top-0 text-4xl py-2 flex w-screen">
//     {/* <Link to={"/"}> */}
// <div className="cursor-pointer">
// <h2>EarnStake</h2>
// </div>
// {/* </Link> */}
// <div className="flex cursor-pointer gap-7 mx-auto justify-center items-center">
// {/* <Link to={"/"}> */}
// <h2>Developers</h2>
// {/* </Link> */}
// <h2>Uses</h2>
// <h2>About</h2>
// </div>
// {/* <Link to={"/profile"}> */}
// <div className="cursor-pointer">
// Profile
// </div>
// {/* </Link> */}
// </div>
  )
}

export default Navbar