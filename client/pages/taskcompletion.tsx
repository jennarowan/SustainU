import Layout from "../components/Layout";
import Image from "next/image";
import icon from "../images/shopping-bag.svg";
import apple from "../images/apple.svg";
import bike from "../images/bike.svg";
import zap from "../images/zap.svg";
import chart from "../images/chart.png";
import Button from "../components/Button/Button";
import bottle from "../images/bottle.png";
import Link from "next/link";
import taskcomplete from "../images/taskcomplete.png";
const taskcompletion = () => {
  return (
    <Layout>
      <div className="bg-[url('../images/landing-background.png')]  bg-cover bg-center h-screen">
        <div className=" bg-color-1 h-screen">
          <div className="h-screen flex flex-col items-center justify-center ">
            <div className=" bg-white p-4">
              <div className="flex items-center justify-center my-10">
                <Image src={taskcomplete} alt="upload" />
              </div>

              <h1 className="text-4xl font-bold mb-4 text-[#024636] mt-4 uppercase text-center">
                +50 points
              </h1>
              <p className="text-center">
                Congratulations, you did it! Time to redeem your reward...
              </p>
              <div className="flex flex-col sm:flex-row mt-4 gap-5 sm:gap-10 justify-center">
                <Link href="/signup">
                  <Button text="Donate points" colorClass="bg-[#05583B]" />
                </Link>
                <Link href="/signin">
                  <Button text="Shop Discounts" colorClass="bg-[#38A169]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default taskcompletion;
