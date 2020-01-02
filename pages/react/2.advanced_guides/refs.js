import React from 'react'
import withPropsLog from '../../../components/react/logProps'

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
))
// FancyButton.displayName = 'FancyButtonCustomName'

const LogFancyButton = withPropsLog(FancyButton)

const RefsPage = props => {
  const ref = React.createRef()
  console.log('Ref: ', ref)
  return (
    <>
      <LogFancyButton ref={ref}>Click me!</LogFancyButton>
      <style jsx>{''}</style>
    </>
  )
}
export default RefsPage
