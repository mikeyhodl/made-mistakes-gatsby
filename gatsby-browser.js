import 'lazysizes'

require('./src/styles/global.css')
require('./src/styles/typeface-inter.css')
require('typeface-dm-serif-display')
require('./src/styles/prism.css')

export const onClientEntry = async () => {
  // IntersectionObserver polyfill for gatsby-image
  if (typeof IntersectionObserver === 'undefined') {
    await import('intersection-observer')
  }
}
