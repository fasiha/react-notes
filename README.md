# react-notes
Worked through the [React tutorial](https://reactjs.org/docs/hello-world.html), but my way: `package.json` contains just
- react
- react-dom
- (typescript, dev dependency)
- (browserify, dev dependency)

No JSX or Babel or heavyweight stuff. I like it like this.

**Setup**

```
$ git clone https://github.com/fasiha/react-notes.git
$ cd react-notes
$ npm i
$ npx tsc -p .
$ npx browserify r.js -o r.bundle.js -s rpackage
```
and open [index.html](https://fasiha.github.io/react-notes/).

See [r.ts](r.ts) for the pure TypeScript (no JSX). 

Includes my [React port](https://fasiha.github.io/react-notes/#root7) of my [re-frame port](https://github.com/fasiha/zip-code-re-frame) of Elm's US zip code example (Elm no longer has public examples 😕), as well as a nicer [React Hooks port](https://fasiha.github.io/react-notes/#root8) of it!