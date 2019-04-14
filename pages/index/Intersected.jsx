import React from 'react'
import PropTypes from 'prop-types'

class Intersected extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.observer = null
  }

  componentDidMount() {
    const { onIntersect, options } = this.props
    if (
      onIntersect &&
      window &&
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
      this.observer = new window.IntersectionObserver(entries => {
        entries.forEach(entry => {
          const { intersectionRatio, intersectionRect } = entry
          onIntersect(intersectionRatio, intersectionRect.height)
        })
      }, options)

      this.observer.observe(this.ref.current)
    }
  }

  componentWillUnmount() {
    this.observer.disconnect()
  }

  render() {
    const { children, ...other } = this.props
    delete other.onIntersect
    delete other.options
    return (
      <div ref={this.ref} {...other}>
        {children}
      </div>
    )
  }
}

Intersected.defaultProps = {
  options: {
    threshold: 0
  }
}

Intersected.propTypes = {
  onIntersect: PropTypes.func,
  options: PropTypes.shape({
    threshold: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.number)
    ])
  }),
  children: PropTypes.element
}

export default Intersected
