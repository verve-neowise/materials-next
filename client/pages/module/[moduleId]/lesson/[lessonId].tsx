import React from "react";
import { useRouter } from "next/router";
import { Lesson, Module } from "../../../../interfaces/types";
import { allModules } from "../../../../services/modules.service";
import PageLayout from "../../../../components/layouts/PageLayout";
import { marked } from "marked";

import { readFileSync } from "fs";
import { Badge, Container, Divider, Grid } from "@nextui-org/react";
import Title from "../../../../components/Title";

type LessonOverviewProps = {
  module: Module;
  lesson: Lesson;
  markdown: string;
};

export default function LessonOverview({
  module,
  lesson,
  markdown,
}: LessonOverviewProps) {
  return (
    <>
      <Title title={`${module.name} - ${lesson.number}. ${lesson.theme}`} />
      <PageLayout title={module.name}>
        <h1>
          {" "}
          {lesson.number}. {lesson.theme}{" "}
        </h1>

        <Grid.Container gap={1}>
          {lesson.tags.map((tag) => (
            <Badge> {tag} </Badge>
          ))}
        </Grid.Container>

        <Divider css={{ my: "$5" }} />

        <Container>
          <div dangerouslySetInnerHTML={{ __html: markdown }} />
        </Container>
      </PageLayout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { moduleId, lessonId } = context.query;

  const module = allModules().find((module) => module.code == moduleId);

  if (!module) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const lesson = module.lessons.find((lesson) => lesson.number == lessonId);

  if (!lesson) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const content = readFileSync(lesson.materials).toString();
  const markdown = marked.parse(content);

  return {
    props: {
      module,
      lesson,
      markdown,
    },
  };
}
