import React from "react";
import { useRouter } from "next/router";

const Note = () => {
  const router = useRouter();

  const { id } = router.query;

  return <div>single note page. note id = {id}</div>;
};

export default Note;
