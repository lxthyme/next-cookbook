import {useSpring, animated /** , interpolate, OpaqueInterpolation */} from 'react-spring'

// const AnimatedDonut = animated(Donut)

const App = () => {
  const props = useSpring({
    opacity: 1,
    width: 160,
    x: 100,
    number: 0,
    scrollY: 100,
    value: 100,
    o: 1,
    xyz: [10, 20, 5],
    color: 'green',
    from: {opacity: 0, width: 80, x: 0, number: 100, scrollY: 0, value: 0, o: 0, xyz: [0, 0, 0], color: 'red'},
  })
  //   const {o, xyz, color} = props
  //   const o: OpaqueInterpolation<number> = props.o
  //   const xyz: OpaqueInterpolation<number[]> = props.xyz
  //   const color: OpaqueInterpolation<string> = props.color
  return (
    <div>
      <p className='v-title'>Fade in</p>
      {/* <animated.div className='v-title' style={props}>
            I will fade in
          </animated.div> */}
      <p className='v-title'>star</p>
      <animated.svg strokeDashoffset={props.x}>
        <path d='...' />
      </animated.svg>
      <p className='v-title'>countdown</p>
      <animated.span>{props.number}</animated.span>
      <p className='v-title'>Scroll</p>
      {/* <animated.div scrollTop={props.scrollY}></animated.div> */}
      <p className='v-title'>React components</p>
      {/* <AnimatedDonut percent={props.value} /> */}
      <p className='v-title'>Interpolate</p>
      {/* <animated.div
        style={{
          // If you can, use plain animated values like always, ...
          // You would do that in all cases where values "just fit"
          color,
          // Unless you need to interpolate them
          background: o.interpolate(o => `rgba(210, 57, 77, ${o})`),
          // Which works with arrays as well
          transform: xyz.interpolate((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`),
          // If you want to combine multiple values use the "interpolate" helper
          border: interpolate([o, color], (o, c) => `${o * 10}px solid ${c}`),
          // You can also form ranges, even chain multiple interpolations
          padding: o.interpolate({range: [0, 0.5, 1], output: [0, 0, 10]}).interpolate(o => `${o}%`),
          // Interpolating strings (like up-front) through ranges is allowed ...
          borderColor: o.interpolate({range: [0, 1], output: ['red', '#ffaabb']}),
          // There's also a shortcut for plain, optionless ranges ...
          opacity: o.interpolate([0.1, 0.2, 0.6, 1], [1, 0.1, 0.5, 1]),
        }}
      >
        /// innerText interpolation ...
        {o.interpolate(n => n.toFixed(2))}
      </animated.div> */}
      <style jsx>{`
        .v-title {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 20px;
        }
      `}</style>
    </div>
  )
}

export default App
