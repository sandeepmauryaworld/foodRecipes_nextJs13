import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
// import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className=" h-screen w-full  homepage">
        <div className="w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="py-5 text-5xl">Explore Food from around the world </h1>
          <Link
            href="/types"
            className="shadow-gray-50 bg-gray-300 rounded  py-2 px-4 cursor-pointer hover:bg-blue-400 hover:text-white text-xl"
          >
            {" "}
            List of cuisines
          </Link>
        </div>
      </div>
    </>
  );
}
