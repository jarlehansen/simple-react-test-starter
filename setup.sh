#! /bin/bash
rm -rf .git
npm install
projectName="${PWD##*/}"
sed -i '' -e "s/simple-react-test-starter/$projectName/g" package.json
echo "# $projectName" > README.md
rm -- "$0"
