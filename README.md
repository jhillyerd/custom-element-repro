## To repro

```sh
elm make src/Main.elm --output=main.js
```

1. Open file index.html in browser
2. Open JavaScript developer tools
3. In console: See `connected callback, src: null` (expected src = model)
4. In DOM inspector: Note that body -> div -> monitor-messages has no attributes
5. Change input field value
6. Expect `attributes changed` console out, but get none
7. Manually add a `src` attribute in DOM inspector, note correct operation of
   custom element.
