export default (req, res) => {
  const { id } = req.query;
  res.status(200).json({
    code: 10000,
    msg: "",
    tips: "",
    runtime: 0.18198108673095703,
    data: {
      id: `post-${id}`,
      title: `Post ${id}`,
      content: `This is the ${id} post content.`
    }
  });
};
