# ParkSmart

[![NPM version](http://img.shields.io/npm/v/npm-expansions.svg?style=flat-square)](https://www.npmjs.org/package/npm-expansions)
[![Build Status](https://travis-ci.org/travis-ci/travis-web.svg?branch=master)](https://travis-ci.org/travis-ci/travis-web)
[![Sequelize](https://img.shields.io/badge/sequelize-v5.89-green.svg)](https://www.npmjs.org/package/sequelize)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

ParkSmart is solving the parking problems of Urban areas one driveway at a time.

## Purpose
ParkSmart is a Full Stack MVC Application that helps drivers find a parking space in the hard to find places of Urban areas. Moreover, it connects drivers with property owners who wish to rent out their parking spaces for a fee. In other words, it helps people park smart.

## Usage
User can search on homepage for available parking spaces in a specific Zip Code or by City & State. You are then presented with a map showing markers of available spaces and their corresponding address at which point you can book a spot.

![Screenshot](public/assets/img/parkSmart.png)

## Technologies Used
- ESLint - Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- Travis-CI - A hosted continuous integration service used to build and test software projects hosted at GitHub.
- Sequelize - Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
- Google Maps - A web mapping service developed by Google.
- MVC - An architectural pattern that separates an application into three main logical components: the Model, the View, and the Controller.
- Heroku - A cloud platform as a service supporting several programming languages.

## Development Notes
### Prerequisites
**Node**

Before you can install Node, you’ll need to install two other applications. Fortunately, once you’ve got these on your machine, installing Node takes just a few minutes.[1]
 
**Mac OS**
> - **XCode** Apple’s XCode development software is used to build Mac and iOS apps, but it also includes the tools you need to compile software for use on your Mac. XCode is free and you can find it in the Apple App Store.
> 
> - Via Terminal `xcode-select --install`
> 
> - **Homebrew** Homebrew is a package manager for the Mac — it makes installing most open source sofware (like Node) as simple as writing `brew install node`.
> - To install Homebrew just open Terminal and type `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`. You’ll see messages in the Terminal explaining what you need to do to complete the installation process. Now type `brew install node`.

**Windows Installation Steps**[2]
> - Download the Windows installer from the [Nodes.js®](http://nodejs.org/) web site.
> - Run the installer (the .msi file you downloaded in the previous step.)
> - Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
> - Restart your computer. You won’t be able to run Node.js until you restart your computer.

**MySQL Workbench**
- It is recommended that you install MySQL Workbench v5.7 as it seems to be the most stable for all systems.

#### Windows
- Go to https://dev.mysql.com/downloads/windows/installer/5.7.html and download the version that matches your architecture.

#### MacOS
- Follow the instructions found here: [MacOS MySQL Workbench Installation](public/assets/readme/mysqlinstall_mac.md).

## Contributing
- Fork it (https://github.com/connorlee/project-2/fork)
- Create your feature branch `git checkout -b feature/project-2`
- Commit your changes `git commit -am 'Add your Message Here'`
- Push to the branch `git push origin feature/project-2`
- Create a new Pull Request

## Support
- Open a new issue [here](https://github.com/connorlee/project-2/issues/new) for support.

## Team
- **Connor Lee** (Back-End Design & Development) - <a href="https://connorleee.github.io/portfolio-official/" target="_blank">https://connorleee.github.io/portfolio-official/</a>
- **Hongliao Xiong** (Front-End Design) - <a href="https://sbhgn0721.github.io/portfolio-website-updated/" target="_blank">https://sbhgn0721.github.io/portfolio-website-updated/</a>
- **Kevin LeRoy** (Back-End Development) - <a href="https://kevinleroy.me" target="_blank">https://kevinleroy.me</a>
- **Nursaid Saidmakhmudov** (Back-End Development) - <a href="https://nursaids.github.io/workingPortfolio/" target="_blank">https://nursaids.github.io/workingPortfolio/</a>

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

[1] Adapted from instructions found here: <a href="https://blog.teamtreehouse.com/install-node-js-npm-mac" target="_blank">https://blog.teamtreehouse.com/install-node-js-npm-mac</a>

[2] Adapted from instructions found here: <a href="https://blog.teamtreehouse.com/install-node-js-npm-windows" target="_blank">https://blog.teamtreehouse.com/install-node-js-npm-windows</a>
