import React, { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.png";
function index() {
//   const [message, setMessage] = useState("Loading");
//   const [people, setPeople] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/home")
//       .then((response) => response.json())
//       .then((data) => {
//         // message = 'Loading'
//         // once data is retrieved
//         // message = data.message
//         setMessage(data.message);
//         setPeople(data.people);
//       });
//   }, []);

  return (
    <div className="bg-[url('../images/landing-background.png')] bg-cover bg-center h-screen">
      <div className="h-screen flex flex-col items-center justify-center ">
        <Image src={logo} alt="logo" />
        <h1 className="text-6xl font-bold mb-4 text-white">SustainU</h1>
        <p className="text-3xl text-[#D7E5BE] drop-shadow-md mb-4 text-center">
          Every choice counts for a sustainable future
        </p>
        <div className="flex flex-col sm:flex-row mt-4 gap-5 sm:gap-20">
          <Link href="/signup">
            <Button text="Register" colorClass="bg-[#05583B]" />
          </Link>
          <Link href="/signin">
            <Button text="Login" colorClass="bg-[#38A169]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default index;
