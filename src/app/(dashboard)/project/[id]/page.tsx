import { FC } from "react";
import TaskCard from "@/components/TaskCard";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { getUserFromCookie } from "@/lib/auth";

const getData = async (id: string | undefined) => {
  const user = await getUserFromCookie(cookies());
  const project = await db.project.findFirst({
    where: { id, ownerId: user?.id },
    include: {
      tasks: true,
    },
  });

  return project;
};

const Project = async ({ params }: any) => {
  // console.log({ params });
  const project = await getData(params.id);
  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      <TaskCard tasks={project?.tasks} title={project?.name} />
    </div>
  );
};

export default Project;
