"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import getContentNavItems from "@/content/getContentNavItems";

export default function BlogBase() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getContentNavItems("blogs");
        setData(data);
      } catch (error) {
        console.error("Failed to load work blog data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <>
      <h1>Blogs</h1>
      <p>Here is a list of blogs I wrote about this that interest me:</p>
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
