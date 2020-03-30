console.log({
  SECRET: process.env.SECRET,
  ANOTHER_SECRET: process.env.ANOTHER_SECRET
});

module.exports = {};

module.exports = {
  //   target: "serverless",
  env: {
    SECRET: process.env.SECRET
  }
};
