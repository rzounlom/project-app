import { FC } from "react";
import Greeting from "@/components/Greeting";
import GreetingsSkeleton from "@/components/GreetingSkeleton";
import Link from "next/link";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { delay } from "@/lib/async";
import { getUserFromCookie } from "@/lib/auth";
const Home: FC = () => {
  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      <div className=" h-full  items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex">
          <Suspense fallback={<GreetingsSkeleton />}>
            <Greeting />
          </Suspense>
        </div>
        <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 ">
          {/** projects map here */}
          <div className="w-1/3 p-3">{/* new project here */}</div>
        </div>
        <div className="mt-6 flex-2 grow w-full flex">
          <div className="w-full">{/* tasks here */}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
