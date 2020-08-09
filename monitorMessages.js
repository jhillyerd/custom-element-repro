customElements.define(
  'monitor-messages',
  class MonitorMessages extends HTMLElement {
    static get observedAttributes() {
      return [ 'src' ]
    }

    constructor() {
      super()
    }

    get src() {
      return this.getAttribute('src')
    }

    set src(value) {
      console.info("setting src to:", value)
      this.setAttribute('src', value)
    }

    connectedCallback() {
      const src = this.getAttribute('src')
      console.info("connected callback, src:", src)
    }

    attributeChangedCallback() {
      const src = this.getAttribute('src')
      console.info("attributes changed, src:", src)
    }

    disconnectedCallback() {
      console.info("disconnected callback")
    }
  }
)
