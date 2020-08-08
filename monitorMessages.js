customElements.define(
  'monitor-messages',
  class MonitorMessages extends HTMLElement {
    static get observedAttributes() {
      return [ 'src' ]
    }

    constructor() {
      super()
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
