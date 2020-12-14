import React, { Component } from 'react'
import Link from 'next/link'

import { themes, ThemeContext as ThemeContext2 } from '../../../theme/theme2'

/// Demo 1
const ThemeContext = React.createContext('light')
ThemeContext.displayName = 'XLTheme'

class ThemeButton extends Component {
  static contextType = ThemeContext2
  render() {
    const theme = this.context
    console.log('theme: ', theme)
    // return <Button theme={this.context} />
    return <button theme={this.context}>{JSON.stringify(this.context)}</button>
  }
}
function Toolbar(props) {
  return <ThemeButton />
}

/// Demo 2
const Page = props => {
  return (
    <>
      {props.user}
      <p>size: {props.avatarSize}</p>
    </>
  )
}
const PageLayout = props => {
  return (
    <>
      <div>userLink: {props.userLink}</div>
    </>
  )
}
const NavigationBar = props => {
  return (
    <>
      <div>userLink: {props.userLink}</div>
    </>
  )
}

/// demo3
const PageLayout2 = props => {
  return (
    <>
      {props.topBar}
      {props.content}
      <style jsx>{``}</style>
    </>
  )
}
const Feed = props => {
  return (
    <>
      <button>{JSON.stringify(props.user)}</button>
      <style jsx>{``}</style>
    </>
  )
}
const Page2 = props => {
  const user = props.user
  const content = <Feed user={user} />
  const topBar = (
    <NavigationBar>
      <a href={user.permalink}>{user}</a>
    </NavigationBar>
  )
  return (
    <>
      <PageLayout2 topBar={topBar} content={content} />
      <style jsx>{``}</style>
    </>
  )
}

/// demo4
export class ThemeButton4 extends Component {
  render() {
    const props = this.props
    const theme = this.context
    return (
      <button
        {...props}
        style={{ backgroundColor: theme.background, color: theme.foreground }}
      ></button>
    )
  }
}
ThemeButton4.contextType = ThemeContext2

const Toolbar4 = props => {
  return (
    <>
      <ThemeButton4 onClick={props.changeTheme}>Change Theme</ThemeButton4>
      <style jsx>{``}</style>
    </>
  )
}
export class Page4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light
    }
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }))
    }
  }

  render() {
    return (
      <div>
        <ThemeContext2.Provider value={this.state.theme}>
          <Toolbar4 changeTheme={this.toggleTheme} />
        </ThemeContext2.Provider>
        <section>
          <ThemeButton4 />
        </section>
      </div>
    )
  }
}

/// demo5
const ThemeToggleButton5 = props => {
  return (
    <>
      <ThemeContext2.Consumer>
        {({ theme, toggleTheme }) => (
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: theme.background,
              color: theme.foreground
            }}
          >
            {JSON.stringify(theme)}
          </button>
        )}
      </ThemeContext2.Consumer>
      <style jsx>{``}</style>
    </>
  )
}
const Content5 = props => {
  return (
    <>
      <ThemeToggleButton5 />
      <style jsx>{``}</style>
    </>
  )
}
export class Page5 extends Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }))
    }

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    }
  }
  render() {
    return (
      <ThemeContext2.Provider value={this.state}>
        <Content5 />
      </ThemeContext2.Provider>
    )
  }
}

/// Demo 6: 消费多个 Context
const ThemeContext6 = React.createContext('light')
const UserContext6 = React.createContext({
  name: 'Guest'
})
ThemeContext6.displayName = 'ThemeContext6'
UserContext6.displayName = 'UserContext6'

const ProfilePage6 = props => {
  return (
    <>
      <div>{JSON.stringify(props.user)}</div>
      <div>{JSON.stringify(props.theme)}</div>
      <style jsx>{``}</style>
    </>
  )
}
const Content6 = props => {
  return (
    <>
      <ThemeContext6.Consumer>
        {theme => (
          <UserContext6.Consumer>
            {user => <ProfilePage6 user={user} theme={theme} />}
          </UserContext6.Consumer>
        )}
      </ThemeContext6.Consumer>
      <style jsx>{``}</style>
    </>
  )
}
const Sidebar6 = props => {
  return (
    <>
      <style jsx>{``}</style>
    </>
  )
}
const Layout6 = props => {
  return (
    <>
      <div>
        <Sidebar6 />
        <Content6 />
      </div>
      <style jsx>{``}</style>
    </>
  )
}

const Page6 = props => {
  const { signedInUser, theme } = props
  console.log('Props: ', { signedInUser, theme })
  return (
    <>
      <div>
        <ThemeContext6.Provider value={theme}>
          <UserContext6.Provider value={signedInUser}>
            <Layout6 />
          </UserContext6.Provider>
        </ThemeContext6.Provider>
      </div>
      <style jsx>{``}</style>
    </>
  )
}

export class ContextPage extends Component {
  componentDidMount() {
    console.log('componentDidMount -> context: ', this.context)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate -> context: ', this.context)
  }
  componentWillUnmount = () => {
    console.log('componentWillUnmount ->context: ', this.context)
  }

  render() {
    const user = <h4>Damon</h4>
    const userLink = <a href="https://lxthyme.com">{user}</a>
    return (
      <>
        <h2>Demo 1</h2>
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
        <h2>Demo 2</h2>
        <ThemeContext2.Provider value={themes.light}>
          <p className="v-title">Page</p>
          <Page user={user} avatarSize={10} />
          <p className="v-title">PageLayout</p>
          <PageLayout userLink={userLink} />
          <p className="v-title">NavigationBar</p>
          <NavigationBar userLink={userLink} />
          <Toolbar />
        </ThemeContext2.Provider>
        <h2>Demo 3</h2>
        <Page2 user={{ permalink: 'https://lxthyme.com' }} />
        <h2>Demo 4: 动态 Context</h2>
        <Page4 />
        <h2>Demo 5: 在嵌套组件中更新 Context</h2>
        <Page5 />
        <h2>Demo 6: 消费多个 Context</h2>
        <Page6 signedInUser={{ name: 'Damon' }} theme="dark" />
        <style jsx>{`
          h2 {
            font-size: 20px;
            padding: 10px 16px;
          }
          .v-title {
            font-weight: bold;
          }
        `}</style>
      </>
    )
  }
}

// ContextPage.contextType = ThemeContext2
export default ContextPage
