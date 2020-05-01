# NodePlanet
[![DeepScan grade](https://deepscan.io/api/teams/8972/projects/11209/branches/164354/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=8972&pid=11209&bid=164354) ![NodePlanet Build](https://github.com/NodePlanet/Site/workflows/NodePlanet%20Build/badge.svg)

## Setup

Clone the repo and then run `npm install`.

### Migrations

Make sure the database variables are correct in your .env file.

Run the following commands to run database migrations.

```js
npm i -g @adonisjs/cli
```

```js
adonis migration:run
```

### Starting up the Server

Run `node server.js` or `adonis serve`

#### We will not help you set this up. We will not install it for you. We will not fix it for you if you broke it.

#### DEMO: https://nodeplanet.now.sh/
