import { useAmp } from 'next/amp';

export const config = {
    /// amp only
    // amp: true ,
    /// hybrid page
    amp: 'hybrid'
 };

const Index = props => {
    const isAmp = useAmp()
  return (
    <>
      <p>Welcome to the {isAmp ? 'AMP' : 'Normal'} version of the Index Page!!</p>
      {/* <style jsx>{``}</style> */}
    </>
  );
};

Index.propTypes = {};

export default Index;
