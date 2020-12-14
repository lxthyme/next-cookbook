import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = props => {
  return (
    <>
      <Link href="/nextjs">
        <a style={linkStyle}>Nextjs Home</a>
      </Link>
      <Link href="/nextjs/about">
        <a style={linkStyle}>About</a>
      </Link>
      {/* <style jsx>{``}</style> */}
    </>
  );
};

Header.propTypes = {};

export default Header;
