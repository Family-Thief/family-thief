[![Stories in Ready](https://badge.waffle.io/family-thief/family-thief.png?label=ready&title=Ready)](https://waffle.io/family-thief/family-thief)
# InkWell

> A collaborative writing platform

## Team

  - __Product Owner__: Brandon Ellis
  - __Scrum Master__: Adam Van Antwerp
  - __Development Team Members__: Henry Ng, Craig Smith

## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Roadmap](#roadmap)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

- Download and unzip the repository.
- Install [dependencies](#installing-dependencies).
- Rename /server/config/dbConfig.example.js to be dbConfig.js
- Edit dbConfig.js to point to a valid relational database (sequelize supports quite a few, see [this](http://docs.sequelizejs.com/en/latest/docs/getting-started/) page for examples and instructions on configuring the ORM)
- Rename /server/config/secret.example to secret and replace the content with a new secret string.  Try making it long and not comprised of discenrnable words.
- Start the server from the base directory with `node server\app.js`.

## Requirements

- Node 0.10.x
- MySQL, MariaDB, SQLite, PostgreSQL or MS SQL

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Roadmap

View the project roadmap [here](https://waffle.io/family-thief/family-thief).

### Database Schema

![relational schema](http://i.imgur.com/G078ktJ.png "Relational Schema")


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
