let posts = [
  { id: "1", title: "Bi nuurs hulgailaagui", message: "Erkhem hulgailsan" },
  {
    id: "2",
    title: "Hervee namaig songvol",
    message: "Mongol uls bayan bolno",
  },
];

exports.getPosts = (req, res) => {
  res.status("200").json(posts);
};

exports.createPost = (req, res) => {
  const { title, message } = req.body;

  posts.push({
    id: posts.length + 1 + "",
    title: title,
    message: message,
  });
  res.status("200").json(posts);
};

exports.deletePost = (req, res) => {
  const { id } = req.params;
  const otherPost = posts.filter((cur) => cur.id !== id);

  posts = otherPost;

  res.status(200).json(posts);
};

// exports.getPostId = (req, res) => {
    
//     res
// }
