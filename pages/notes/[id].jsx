import React from "react";
import { useRouter } from "next/router";

const Note = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div>
      <h1>Note page</h1>
      <p>note id:{id}</p>
    </div>
  );
};

export default Note;
