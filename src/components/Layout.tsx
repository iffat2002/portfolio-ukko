import { Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import type { Metadata } from "next";
import React, { useEffect } from "react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "a designer portfolio page",
};
const Layout: React.FC = ({ children }) => {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  return (
        <main>{children}</main>
  
  );
};

export default Layout;
