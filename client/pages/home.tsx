import Layout from "../components/Layout";
import Image from "next/image";
import icon from "../images/shopping-bag.svg";
import apple from "../images/apple.svg";
import bike from "../images/bike.svg";
import zap from "../images/zap.svg";
import chart from "../images/chart.png";
import Button from "../components/Button/Button";
import bottle from "../images/bottle.png";
const home = () => {
  return (
    <Layout>
      <div className="p-4 bg-[#EFEFEF]">
        <div className="flex gap-4">
          <div className="w-3/5 bg-color-1 p-4">
            <div className="w-full flex justify-between">
              <div className="flex items-center  bg-color-1 rounded gap-3">
                <Image src={icon} alt="icon" width={35} height={35} />
                <h1 className="text-2xl font-bold text-[#024636] text-center">
                  Bring reusable plastic bags
                </h1>
              </div>
              <div className="w-1/2 bg-color-2 rounded">
                <h1 className="text-2xl font-bold mb-4 text-[#024636] text-right">
                  100 points
                </h1>
              </div>
            </div>
            <h1>
              Plastic bags are out, cute tote bags are in! Bring your reusable
              shopping bags the next time you’re shopping for groceries.
            </h1>

            <div className="flex flex-row items-center justify-end gap-3">
              <Button text="Start" colorClass="bg-[#38A169]" />
            </div>
          </div>

          <div className="w-2/5 bg-gradient-1 p-4  ml-2 rounded flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-2  text-[#D7E5BE80] text-center">
              22 days
            </h1>
            <h1 className="text-2xl font-bold mt-3 ml-3 text-white text-center">
              Going strong 🔥
            </h1>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-8 text-[#024636] mt-8 uppercase text-center">
          Browse by category
        </h1>
        <div className="grid grid-cols-4 gap-10 p-4 ">
          <div className="shadow-lg p-4 bg-white">
            <h1 className="text-2xl font-bold mb-4 mt-3 ml-3 text-black text-center">
              Food Waste
            </h1>
            <Image
              src={apple}
              alt="icon"
              width={100}
              height={100}
              className="m-auto"
            />
          </div>

          <div className="shadow-lg p-4 bg-white">
            <h1 className="text-2xl font-bold mb-4 mt-3 ml-3 text-black text-center">
              Shopping
            </h1>
            <Image
              src={icon}
              alt="icon"
              width={100}
              height={100}
              className="m-auto"
            />
          </div>

          <div className="shadow-lg p-4 bg-white">
            <h1 className="text-2xl font-bold mb-4 mt-3 ml-3 text-black text-center">
              Transportation
            </h1>
            <Image
              src={bike}
              alt="icon"
              width={100}
              height={100}
              className="m-auto"
            />
          </div>
          <div className="shadow-lg rounded p-4 bg-white">
            <h1 className="text-2xl font-bold mb-4 mt-3 ml-3 text-black text-center">
              Energy
            </h1>
            <Image
              src={zap}
              alt="icon"
              width={100}
              height={100}
              className="m-auto"
            />
          </div>
        </div>
        <p className="text-center underline text-[#024636]">
          See more categories
        </p>
        <h1 className="text-4xl font-bold mb-8 text-[#024636] mt-8 uppercase text-center">
          Your progress
        </h1>
        <div className="flex p-4 gap-4">
          <div className="w-2/4 shadow-lg p-4 bg-white">
            <h1 className="text-2xl font-bold mb-4 mt-3 ml-3 text-black text-center">
              Breakdown of tasks by category:
            </h1>
            <Image src={chart} alt="icon" className="m-auto" />
          </div>

          <div className="w-2/4">
            <div className="bg-white p-4 shadow-md">
              <h1 className="text-2xl font-bold mb-4 mt-3 ml-3 text-black text-center">
                What your avoided CO2e equals to:
              </h1>

              <div className="flex justify-between mb-3">
                <p className="text-left">Electricity (US grid)</p>
                <p className="text-right">32 kWh</p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-left">Full smartphone charges</p>
                <p className="text-right">1,176</p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-left">Cups of hot coffee</p>
                <p className="text-right">66</p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-left">Time of hot showering</p>
                <p className="text-right">46 m</p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-left text-[#024636] font-bold">
                  Total CO2e avoided
                </p>
                <p className="text-right text-[#024636] font-bold">8 kg</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-8 text-[#024636] mt-8 uppercase text-center">
          Daily Trivia
        </h1>
        <div className="flex gap-4 bg-white p-4 shadow-md relative py-10 m-auto">
          <Image src={bottle} alt="icon" className="w-3/6" />
          <div>
            <h1 className="text-xl font-bold mb-4  text-black">
              Your Style of Sustainability
            </h1>
            <p className="mb-4 ">
              Agriculture uses up 70% of our global freshwater. It goes up to
              90% in fast-developing countries. The US makes up only 5% of the
              world population, but it throws away enough plastic bottles in a
              week to encircle the Earth 5 times! On average, ONE supermarket
              goes through 60,500,000 paper bags per year!
            </p>
            <p className=" underline text-[#024636]">Source</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default home;
