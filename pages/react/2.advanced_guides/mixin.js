const SetIntervalMixin = {
  componentWillMount() {
    this.intervals = []
  },
  setInterval: () => {
    this.intervals.push(setInterval.apply(null, arguments))
  },
  componentWillUnmount() {
    this.intervals.forEach(clearInterval)
  }
}

const MixinPage = props => {
  return (
    <>
      <h2>Mixin Page</h2>
      <style jsx>{``}</style>
    </>
  )
}
export default MixinPage
