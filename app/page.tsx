"use client";

import { useEffect, useState } from "react";
import { Project } from "@/app/types";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/projects`);
      const allProjects = (await response.json()) as Project[];
      setProjects(allProjects);
    })();
  }, []);

  return (
    <main>
      <h1>Hi! I&apos;m Neo Dev 👋</h1>
      <div className="h-6" />

      <div className="">
        <p className="pb-1">
          This website is a work in progress, for now you can think of it as a
          place for all my links.
        </p>
        <p>
          From here you can go to:
          <ul className="pl-5 pb-1">
            <li>
              My{" "}
              <a href="https://git.neo-dev.org/NeoDev" target="_blank">
                <strong>Gitea</strong>
              </a>{" "}
              instance to to see my previous projects.
              <br></br> Note that some of them were ported from my
              university&apos;s private GitLab instance and joined together
              (Frontend + Backend) so their commit history is lost.
            </li>

            <li>
              My{" "}
              <a href="https://hub.docker.com/u/n4fta" target="_blank">
                <strong>Docker&apos;s</strong>
              </a>{" "}
              for some ready to be pulled containers
            </li>
            <li>
              My{" "}
              <a
                href="https://open.spotify.com/user/z20cuq7qcix1zz2xzlxg6egzl?si=9ae67bb695c546e0"
                target="_blank"
              >
                <strong>Spotify&apos;s</strong>
              </a>{" "}
              because why not, talk to me about music if you want
            </li>
          </ul>
          Or simply contact me through my email: contact@neo-dev.org
        </p>
      </div>
      <div className="h-6" />
    </main>
  );
}
