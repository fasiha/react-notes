r.bundle.js: r.js
	npx browserify r.js -o r.bundle.js -s rpackage
watch:
	fswatch -0 -o -l .1 r.js | xargs -0 -n 1 -I {} make