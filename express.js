const express = require("express");

const port = 8000;
const app = express();

// const router = express.Router();
// const {
//   getUsers,
//   getUser,
//   createUser,
//   updateUser,
//   deleteUser,
// } = require("../controller/users");

// router
//   .post("/", createUser)
//   .get("/", getUsers)
//   .get("/:id", getUser)
//   .put("/:id", updateUser)
//   .delete("/:id", deleteUser);

// module.exports = router;

const posts = [
  {
    id: 1,
    title: "my dog",
    desc: "",
  },
  {
    id: 2,
    title: "my dog",
    desc: "",
  },
  {
    id: 3,
    title: "my dog",
    desc: "",
  },
];

app.get("/", (req, res) => {
  res.send("hi˝");
});
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/posts/:id", (req, res) => {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id == req.params.id) res.send(posts[i]);
  }

  res.send("not found");
});

app.post('/posts/', () => {
  
})

// post
// put
// delete

// app.post("/", (req, res) => {
//     res.send("Post request is successfully");
// });
// app.put("/", (req, res) => {
//     res.send("Put request is successfully");
// });app.delete("/", (req, res) => {
//     res.send("Delete request is successfully");
// });
app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
