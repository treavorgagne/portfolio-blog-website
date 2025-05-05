"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import getContentNavItems from "@/content/getContentNavItems";

export default function ExperiencesBase() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getContentNavItems("experiences");
        setData(data);
      } catch (error) {
        console.error("Failed to load work experience data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <>
      <h1>Work Experience</h1>
      <p>Here is a list of the places I worked:</p>
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
