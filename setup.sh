#! /bin/bash
rm -rf .git
npm install
projectName="${PWD##*/}"
sed -i '' -e "s/simple-react-test-starter/$projectName/g" package.json
sed -i '' -e "s/simple-react-test-starter/$projectName/g" src/index.tmpl.html
echo "# $projectName" > README.md
rm -- "$0"
