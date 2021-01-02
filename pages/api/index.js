import nc from "next-connect";

const handler = nc()
  .get((req, res) => {
    res.json("ok");
  })
  .post((req, res) => {
    res.json("posted");
  });

export default handler;
