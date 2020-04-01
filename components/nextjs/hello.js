export const Hello = ({ content }) => {
  return (
    <>
      <h4>{content} - Hello!</h4>
      <p>usage as named exports</p>
      {/* <style jsx>{``}</style> */}
    </>
  );
};

export default ({ content }) => {
  return (
    <>
      <h4>{content} - Hello!</h4>
      <p>usage as default export</p>
      {/* <style jsx>{``}</style> */}
    </>
  );
};
