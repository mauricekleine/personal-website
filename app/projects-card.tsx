"use client";

import petProjects from "~/pet-projects";
import { Card } from "~/ui/card";
import { Cat } from "~/ui/icon";
import { Stack } from "~/ui/layout";
import { Heading, Link, Text } from "~/ui/typography";

export function ProjectsCard() {
  return (
    <Card>
      <Card.Icon icon={Cat} />

      <Card.Title>Pet Projects</Card.Title>

      <Stack gap={8}>
        {petProjects.map((project) => (
          <Stack key={project.name} gap={1}>
            <Heading as="h3">{project.name}</Heading>

            <div>
              <Text>{project.description}</Text>

              <Stack direction="horizontal" gap={2}>
                {project.url ? (
                  <Text>
                    <Link href={project.url}>website</Link>
                  </Text>
                ) : null}

                <Text>
                  <Link href={project.repo}>source</Link>
                </Text>
              </Stack>
            </div>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
