import React, { Component } from 'react'

const DataSource = {
  addChangeListener: () => {},
  removeChangeListener: () => {},
  getComments: () => {
    return Array.from({ length: 10 }, (t, idx) => ({
      id: idx + 1,
      content: `post content ${idx + 1}`
    }))
  },
  getBlogPost: id => {
    return {
      content: `post content ${id}`
    }
  }
}

const Comment = props => {
  return (
    <>
      <div>{props.comment.content}</div>
      <style jsx>{``}</style>
    </>
  )
}

/// Demo1
export class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: DataSource.getComments()
    }
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange)
  }
  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange)
  }

  handleChange = () => {
    this.setState({
      comments: DataSource.getComments()
    })
  }

  render() {
    return (
      <div>
        {this.state.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    )
  }
}

export class BlogPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
    }
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange)
  }
  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange)
  }

  handleChange = () => {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    })
  }

  render() {
    return <div>{this.state.blogPost.content}</div>
  }
}

/// Demo2
export class CommentListHOC extends Component {
  render() {
    return (
      <div>
        {this.props.data.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    )
  }
}

export class BlogPostHOC extends Component {
  render() {
    return <div>{this.props.data.content}</div>
  }
}

const withSubscription = (WrappedComponent, selectData) => {
  class WithSubscription extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: selectData(DataSource, props)
      }
    }

    componentDidMount() {
      DataSource.addChangeListener(this.handleChange)
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange)
    }

    handleChange = () => {
      this.setState({
        data: selectData(DataSource, this.props)
      })
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }

  const name = WrappedComponent.displayName || WrappedComponent.name
  if (name) {
    WithSubscription.displayName = `withSubscription(${name})`
  }
  return WithSubscription
}

const CommentListWithSubscription = withSubscription(
  CommentListHOC,
  DataSource => DataSource.getComments()
)
// CommentListWithSubscription.displayName = 'withSubscription(CommentList)'

const BlogPostWithSubscription = withSubscription(
  BlogPostHOC,
  (DataSource, props) => DataSource.getBlogPost(props.id)
)
// BlogPostWithSubscription.displayName = 'withSubscription(BlogPost)'

const HOCPage = props => {
  return (
    <>
      <h2>Demo1: No HOC</h2>
      <CommentList />
      <hr />
      <BlogPost id={233} />
      <h2>Demo2: With HOC</h2>
      <CommentListWithSubscription />
      <hr />
      <BlogPostWithSubscription id={234} />
      <style jsx>{`
        h2 {
          font-size: 20px;
          padding: 10px 16px;
        }
      `}</style>
    </>
  )
}
export default HOCPage
