const Agent = ({ userAgent }) => {
  return (
    <>
      <h1>Your user agent is: {userAgent}</h1>
      {/* <style jsx>{``}</style> */}
    </>
  );
};

// Agent.propTypes = {}
Agent.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Agent;
