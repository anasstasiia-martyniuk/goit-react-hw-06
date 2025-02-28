import css from "./Loading.module.css";
import { useState, useEffect } from "react";

export default function Loading() {

    const [dots, setDots] = useState("");

    useEffect(() => {
      const interval = setInterval(() => {
        setDots((dots) => (dots.length < 3 ? dots + "." : ""));
      }, 250);
  
      return () => clearInterval(interval);
    }, []);

    return (
        <h1 className={css.loading}>Loading contacts{dots}</h1>
    );
}