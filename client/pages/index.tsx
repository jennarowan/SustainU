import React, { useEffect, useState } from "react";
import LandingBackground from "../images/landing-background.jpg";
import LandingButton from "../components/LandingButton/LandingButton";
import Link from "next/link";
function index() {
  const [message, setMessage] = useState("Loading");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        // message = 'Loading'
        // once data is retrieved
        // message = data.message
        setMessage(data.message);
        setPeople(data.people);
      });
  }, []);

  return (
    <div
      className="bg-[url('../images/landing-background.jpg')] bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${LandingBackground})` }}
    >
      <div className="h-screen flex flex-col items-center justify-center pt-20">
        <h1 className="text-6xl font-bold mb-4 text-white">SustainU</h1>
        <p className="text-3xl text-[#D7E5BE] drop-shadow-md mb-4 text-center">
          Every choice counts for a sustainable future
        </p>
        <div className="flex flex-col sm:flex-row mt-4 gap-5 sm:gap-20">
          <Link href="/signup">
            <LandingButton text="Register" colorClass="bg-[#05583B]" />
          </Link>
          <Link href="/signin">
            <LandingButton text="Login" colorClass="bg-[#38A169]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default index;
