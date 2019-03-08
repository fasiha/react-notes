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
cd react-notes
npm i
npx tsc -p .     ### IGNORE the compiler warning
npx browserify r.js -o r.bundle.js -s rpackage
```
and open [index.html](https://fasiha.github.io/react-notes/).

See [r.ts](r.ts) for the pure TypeScript (no JSX). 