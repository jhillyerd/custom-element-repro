customElements.define(
  'monitor-messages',
  class MonitorMessages extends HTMLElement {
    static get observedAttributes() {
      return [ 'src' ]
    }

    constructor() {
      super()
      this._url = ""
    }

    connectedCallback() {
      console.info("connected callback")

      if (this.hasAttribute('src')) {
        this.wsOpen(this.getAttribute('src'))
      }
    }

    attributeChangedCallback() {
      console.info("attributes changed?")

      if (this.hasAttribute('src')) {
        this.wsOpen(this.getAttribute('src'))
      }
    }

    disconnectedCallback() {
      console.info("disconnected callback")

      this.wsClose()
    }

    wsOpen(uri) {
      const url =
        ((window.location.protocol === 'https:') ? 'wss://' : 'ws://') +
        window.location.host + uri
      if (url == this._url) {
        console.info("url did not change")
        return
      }
      this.wsClose()

      console.info("Connecting to WebSocket", url)

      const ws = new WebSocket(url)
      this._socket = ws

      // Define event listeners.
      const self = this
      ws.addEventListener('open', function (_e) {
        self.dispatchEvent(new CustomEvent('connected', { detail: true }))
      })
      ws.addEventListener('close', function (_e) {
        self.dispatchEvent(new CustomEvent('connected', { detail: false }))
      })
      ws.addEventListener('message', function (e) {
        self.dispatchEvent(new CustomEvent('message', {
          detail: JSON.parse(e.data),
        }))
      })
    }

    wsClose() {
      const ws = this._socket
      if (ws) {
        ws.close()
      }
    }
  }
)
