import React, { Component } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'

const withPropsLog = WrappedComponent => {
  class LogProps extends Component {
    componentDidUpdate (prevProps, prevState) {
      console.log('prevProps: ', prevProps, '\t\tcurrent Props: ', this.props)
      console.log('prevState: ', prevState, '\t\tcurrent State: ', this.state)
    }

    render () {
      const { forwardedRef, ...rest } = this.props
      console.log('Props: ', this.props, 'f: ', { forwardedRef, ...rest })
      return <WrappedComponent ref={forwardedRef} {...rest} />
    }
  }

  hoistNonReactStatic(LogProps, WrappedComponent)

  function LogPropsForwardRef (props, ref) {
    return <LogProps {...props} forwardedRef={ref} />
  }

  const name = WrappedComponent.displayName || WrappedComponent.name
  console.log('name: ', {
    displayName: WrappedComponent.displayName,
    name: WrappedComponent.name
  })
  if (name) {
    LogPropsForwardRef.displayName = `LogProps(${name})`
  }

  return React.forwardRef(LogPropsForwardRef)
}

export default withPropsLog
