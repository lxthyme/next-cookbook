import quotes from "../../model/quotes.json";
// export default (req, res) => {
//   res.status(200).json({
//     quote: 'Write tests, not too many, mostly integration',
//     author: 'Guillermo Rauch',
//   })
// }

// export default (req, res) => {
//   const quote = quotes[Math.floor(Math.random() * quotes.length)]
//   res.status(200).json(quote)
// }

export default (req, res) => {
  const { author } = req.query;
  let result = quotes;

  if (author) {
    result = quotes.filter(t =>
      t.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  if (result.length <= 0) {
    result = quotes.filter(t => t.author.toLowerCase() === "unknown");
  }

  const quote = result[Math.floor(Math.random() * result.length)];

  res.status(200).json(quote);
};
