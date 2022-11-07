import { Grid } from "@nextui-org/react";
import Router, { useRouter } from "next/router";
import LessonCard from "../../../components/cards/LessonCard";
import PageLayout from "../../../components/layouts/PageLayout";
import Title from "../../../components/Title";
import { Module } from "../../../interfaces/types";
import { allModules, findModule } from "../../../services/modules.service";

type ModuleOverviewProps = {
  module: Module;
};

export default function ModuleOverview({ module }: ModuleOverviewProps) {
  const router = useRouter();

  function onClick(lesson: number) {
    router.push(`/module/${module.code}/lesson/${lesson}`);
  }

  return (
    <>
      <Title title={`${module.name} Lessions`} />
      <PageLayout title={module.name}>
        <Grid.Container gap={3}>
          {module.lessons.map((lesson) => (
            <Grid>
              <LessonCard lesson={lesson} onClick={onClick} />
            </Grid>
          ))}
        </Grid.Container>
      </PageLayout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { moduleId } = context.query;

  const module = allModules().find((module) => module.code == moduleId);

  return {
    props: {
      module,
    },
  };
}
