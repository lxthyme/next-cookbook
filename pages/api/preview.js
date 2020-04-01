export default (req, res) => {
  if (req.query.secret !== "MY_SECRET_TOKEN") {
    return res.status(401).json({ message: "Invalid token!" });
  }
  if (!req.query.slug) {
    return res.status(401).json({ message: "Invalid slug!" });
  }

  //   const post = await getPostBySlug(req.query.slug)
  const post = { slug: req.query.slug };
  if (!post) {
    return res.status(401).json({ message: "Invalid unknown slug!" });
  }

  res.setPreviewData({});
  res.writeHead(307, { Location: post.slug });
  res.end();
};
