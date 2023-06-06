import Greeting from "@/components/Greeting";
import GreetingsSkeleton from "@/components/GreetingSkeleton";
import Link from "next/link";
import NewProject from "@/components/NewProject";
import ProjectCard from "@/components/ProjectCard";
import { Suspense } from "react";
import TaskCard from "@/components/TaskCard";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { delay } from "@/lib/async";
import { getUserFromCookie } from "@/lib/auth";

const getData = async () => {
  await delay(2000);
  const user = await getUserFromCookie(cookies());
  const projects = await db.project.findMany({
    where: {
      ownerId: user?.id,
    },
    include: {
      tasks: true,
    },
  });

  return { projects };
};

const Home = async () => {
  const { projects } = await getData();
  // console.log({ projects });
  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      <div className=" h-full  items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex">
          <Suspense fallback={<GreetingsSkeleton />}>
            <Greeting />
          </Suspense>
        </div>
        <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 ">
          {projects.map((project) => (
            <div className="w-1/3 p-3" key={project.id}>
              <Link href={`/project/${project.id}`}>
                <ProjectCard project={project} />
              </Link>
            </div>
          ))}

          <div className="w-1/3 p-3">
            <NewProject />
          </div>
        </div>
        <div className="mt-6 flex-2 grow w-full flex">
          <div className="w-full">
            <TaskCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
