# Stats-Bot
[![Discord](https://discordapp.com/api/guilds/462966890801790998/widget.png)](https://discord.gg/g4XxyP7)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2fb1a80eede84d149412d61d4d7052ae)](https://github.com/dpprdev/statsbot)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdpprdev%2Fstatsbot.svg?type=shield)](https://github.com/dpprdev/statsbot)
[![David-DM Badge](https://david-dm.org/dpprdev/npm-statsbot.svg)](https://david-dm.org/dpprdev/npm-statsbot)
[![Known Vulnerabilities](https://snyk.io/test/github/dpprdev/npm-statsbot/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dpprdev/npm-statsbot?targetFile=package.json)
[![](https://img.shields.io/npm/dt/statsbot.svg)](https://www.npmjs.com/package/statsbot)


---
Powered by Discord.js.
Package, that allows you make powerful Stats-Bot within 2 lines of code!
---


#### Values

| Value | Meaning | Example |
| :---: | :---: | :---: |
| total | Total Members channel ID | 482602910728060932 |
| users | Users channel ID | 482602910728060932 |
| bots | Bots channel ID | 482602910728060932 |

<hr>

#### Example
```js
const STATSBOT = require('statsbot');
const statsbot = new STATSBOT("token", {total: 'total members channel id', users: 'users channel id', bots: 'bots channel id'})
```

Something like this should appear in console:

<img src="https://cdn.discordapp.com/attachments/521348651709235202/531457053307437059/unknown.png"/>

<hr>

#### How to get channel ID-s

- *Enable Developer mode and follow steps below*

<img src="https://chat.is-going-to-rickroll.me/i/WoeNL1XOK4Q.gif"/>

- *When the Developer mode is enabled, simply right click the channel, click `Copy ID` and the ID will be saved to your clipboard.*

<img src="https://chat.is-going-to-rickroll.me/i/-p66Ed3ibyM.gif"/>

<hr>
