"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function AOSWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return <>{children}</>;
}


// "use client";
// import { useEffect } from "react";
// import { usePathname } from "next/navigation";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function AOSWrapper({ children }: { children: React.ReactNode }) {
//   const path = usePathname();

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false, // animation triggers every time
//     });
//   }, []);

//   // Refresh AOS whenever the route changes
//   useEffect(() => {
//     AOS.refresh();
//   }, [path]);

//   return <>{children}</>;
// }
