# README #

### What is this repository for? ###

This is POC repo for NightwatchJS and Mocha API/web automation using BDD and page object

### How do I get set up? ###

**1.** Install latest NVM and Node: https://bizzyid.atlassian.net/wiki/spaces/QE/pages/129007743/Updating+Node.js+Version+using+NVM

We can update/downgrade/switch the version of Node.js using nvm.
This is useful if we want to check our code in different Node.js version.
Install Homebrew (https://brew.sh/)
Install NVM (http://dev.topheman.com/install-nvm-with-homebrew-to-use-multiple-versions-of-node-and-iojs-easily/)
Instal nodejs v8.11.4 (or any version you need)

**2.** Clone this repo

**3.** Access the folder

**4.** Copy environtment
```sh
$ cp env.sample .env
```

**5.** Install all dependencies:
```sh
$ npm install
```

**6.** Run task-runner:
```sh
$ npm install grunt -g
$ grunt
```

**7.** Run Nightwatch Web UI test:
```sh
$ npm run test-docker-chrome
```

**8.** Run Mocha API test:
```sh
$ npm run start-api-test
```

**9.** Run Nightwatch Web UI report:
```sh
$ npm run report-chrome
```
