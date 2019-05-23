# webdev-nyc-air-quality

[![Build Status](https://travis-ci.org/webdev-nyc-air-quality/webdev-nyc-air-quality.svg?branch=master)](https://travis-ci.org/webdev-nyc-air-quality/webdev-nyc-air-quality)

## Team Members:
- Ian S. McBride (project owner)
- Taj Mouhamed (scrum master)
- Jin Zhang

## [Team repository link](https://github.com/webdev-nyc-air-quality/webdev-nyc-air-quality)

## [Project documentation](https://webdev-nyc-air-quality.github.io/air-quality-docs/)

## [Deploy site url](https://master.d2mdn3yvvbw50z.amplifyapp.com)


## Instructions to run the project
```bash
# Make sure you have the Amplify CLI, yarn installed globally
npm i -g @aws-amplify/cli@multienv
npm i -g yarn
# Get our source code
git clone https://github.com/webdev-nyc-air-quality/webdev-nyc-air-quality
# Install dependencies
yarn
# Setup Amplify project resources
amplify configure
amplify init
amplify push
# Run app locally
yarn develop
# Run tests
yarn test:unit
yarn test:int
yarn test:e2e
```
