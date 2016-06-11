# Simple React Test Starter

A very simple react starter kit containing:
* webpack - https://webpack.github.io/
* react - https://facebook.github.io/react/
* karma - https://karma-runner.github.io/
* mocha - https://mochajs.org/
* eslint - http://eslint.org/
* babel - https://babeljs.io/
* html-webpack-plugin - https://github.com/ampedandwired/html-webpack-plugin

Similar to [simple-react-starter](https://github.com/jarlehansen/simple-react-starter), but also adds test dependencies.

## Installation
The setup-script will remove the .git folder for the simple-react-starter so you can run `git init`.
It will then run `npm install` to get all the dependencies before it finally deletes itself (there is no need for this script after initial launch).
<pre>
git clone https://github.com/jarlehansen/simple-react-starter.git <i>project-name</i>
./setup
</pre>

## Usage
Webpack dev server (default port = 8080)
<pre>
npm start
</pre>

Build
<pre>
npm run build
</pre>

Test
<pre>
npm test
</pre>
