"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import getContentNavItems from "@/content/getContentNavItems";

export default function ProjectsBase() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getContentNavItems("projects");
        setData(data);
      } catch (error) {
        console.error("Failed to load projects data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <>
      <h1>Projects</h1>
      <p>
        Listed below are some of my completed and work in progress projects that
        showcase my software skills and knowledge. Feel free to click on any of
        them to check them out or go see my{" "}
        <Link
          href="https://github.com/treavorgagne"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </Link>{" "}
        for more.
      </p>
      <ul className="list-disc list-inside space-y-1">
        {loading ? (
          <li>loading ...</li>
        ) : (
          data
            .filter((item) => item.title !== "Overview")
            .map((item) => (
              <li key={item.url}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))
        )}
      </ul>
    </>
  );
}
