import React from "react";

export default function Footer() {
  return (
    <footer className=" bg-blue-500 shadow-md py-4 sm:py-6 px-4 text-center text-white">
      <p className="text-xs sm:text-sm leading-relaxed">
        © 2025 <span className="font-bold">CHIT FUND PVT LTD</span>. All rights reserved.
        <br className="sm:hidden" />
        <span className="hidden sm:inline"> | </span>
        Created By <span className="font-semibold">Sanjay</span>
      </p>
    </footer>
  );
}

// import { Link } from "react-router-dom";
// import {
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
//   Mail,
//   Phone,
//   MapPin
// } from "lucide-react";
// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="bg-blue-500 text-white font-semibold pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

//           {/* Company Info */}
//           <div>
//             <div className="flex items-center gap-2 mb-6">
//               <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
//                 <span className="text-primary font-bold">CF</span>
//               </div>
//               <span className="font-bold text-xl">CHIT FUND PVT LTD</span>
//             </div>

//             <p className="text-blue-100/80 mb-6 leading-relaxed">
//               Empowering financial growth through secure, transparent, and efficient chit fund management solutions.
//             </p>

//             <div className="flex gap-4">
//               {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
//                 >
//                   <Icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-bold text-lg mb-6 text-accent">Quick Links</h4>
//             <ul className="space-y-3">
//               {["Home", "About Us", "Features", "Auction Logic", "Contact"].map(item => (
//                 <li key={item}>
//                   <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}>
//                     <span className="text-blue-100/80 hover:text-accent cursor-pointer transition-colors">
//                       {item}
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Solutions */}
//           <div>
//             <h4 className="font-bold text-lg mb-6 text-accent">Solutions</h4>
//             <ul className="space-y-3">
//               {[
//                 "Chit Management",
//                 "Collection App",
//                 "Subscriber Portal",
//                 "Auction Software",
//                 "Accounting"
//               ].map(item => (
//                 <li key={item}>
//                   <span className="text-blue-100/80 hover:text-accent cursor-pointer transition-colors">
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-bold text-lg mb-6 text-accent">Contact Us</h4>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
//                 <span className="text-blue-100/80">
//                   MyChits Pvt. Ltd.
//                   Near Sathyanarayana Arch,
//                   Banashankari 3rd Stage,
//                   Bangalore
//                 </span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone className="w-5 h-5 text-accent shrink-0" />
//                 <span className="text-blue-100/80">9483900777 / 7669865563</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail className="w-5 h-5 text-accent shrink-0" />
//                 <span className="text-blue-100/80">info.mychits@gmail.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100/60">
//           <p>© {new Date().getFullYear()} CHIT FUND PVT LTD. All rights reserved.</p>
//           <div className="flex gap-6">
//             <a href="#" className="hover:text-white">Privacy Policy</a>
//             <a href="#" className="hover:text-white">Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
