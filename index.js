const express = require("express");
const users = require("./MOCK_DATA.json")
const app = express();
const fs = require("fs");
const port = 4000;



app.use(express.urlencoded({ extended: false }));


app.get("/api/users", (req, res) => {
  return res.json(users);
});
app.
  route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = req.params.id;
    data[id].checked = !data[id].checked;
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), "utf-8",
      res.json({ status: "sucess" }))
  })

  .delete(async (req, res) => {
    const response = await fetch("/delete/:id", users);
    if (response.status != 204) {
      throw Error("Cannot delete your item from list");
    }
    return res.json({
      status: "pending"
    })
  });


app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 })
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "sucess", id: users.length })
  })


})
app.listen(port, () => {
  console.log(`server is listening ${port}`);
});
