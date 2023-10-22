import Layout from "../components/Layout";
import Image from "next/image";
import map from "../images/map.png";
import SearchBar from "@/components/Searchbar";
const communityevents = () => {
  return (
    <Layout>
      <div className="flex h-screen ">
        <div className="w-1/5 ">
          <div className="bg-[#EFEFEF] p-4 ">
            <SearchBar />
          </div>
          <div>
            
          </div>
        </div>
        <div className="w-4/5">
          <Image className="w-full h-full" src={map} alt="icon" />
        </div>
      </div>
    </Layout>
  );
};

export default communityevents;
