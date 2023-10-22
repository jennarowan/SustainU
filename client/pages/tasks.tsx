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
import upload from "../images/upload.png";
const tasks = () => {
  return (
    <Layout>
      <div className="bg-[url('../images/landing-background.png')]  bg-cover bg-center h-screen">
        <div className=" bg-color-1 h-screen">
          <div className="h-screen flex flex-col items-center justify-center ">
            <div className=" bg-white p-4">
              <div className="w-full flex justify-between">
                <div className="flex    rounded gap-3">
                  <Image src={icon} alt="icon" width={100} height={100} />
                  <div>
                    <h1 className="text-2xl font-bold text-[#024636]">
                      Bring reusable plastic bags
                    </h1>
                    <p>
                      Plastic bags are out, cute tote bags are in! Bring your
                      reusable shopping bags the next time you’re shopping for
                      groceries.
                    </p>
                  </div>
                </div>
                <div className="w-1/2 bg-color-2 rounded">
                  <h1 className="text-2xl font-bold mb-4 text-[#024636] text-right">
                    100 points
                  </h1>
                </div>
              </div>

              <div className="flex items-center justify-center my-10">
                <Image src={upload} alt="upload" />
              </div>

              <div className="flex items-center justify-center">
                <Link href="/taskcompletion">
                  <Button text="Submit" colorClass="bg-[#024636]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default tasks;
