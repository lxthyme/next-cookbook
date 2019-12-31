import Cat from '../../public/svg/cat.svg'

const SVGDemo = () => {
  return (
    <>
      <div className="container">
        <marquee>SVG Cat!</marquee>
        <Cat />
      </div>
      <style jsx>{`
        .container {
          width: 600px;
          margin: 100px auto;
        }
      `}</style>
    </>
  )
}
export default SVGDemo
