import React from "react";
import Link from "next/link";

const Notes = () => (
  <div>
    <h1>notes index</h1>
    <Link href="/notes/[id]" as={`/notes/1`}>
      <a>note 1</a>
    </Link>
  </div>
);

export default Notes;
