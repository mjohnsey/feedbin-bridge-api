feedbin-bridge-api
==================

API to run a bridge service for Feedbin to other platforms

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
![GH Hosted Docker Image](https://github.com/mjohnsey/feedbin-bridge-api/workflows/Docker%20Image%20CI/badge.svg)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g feedbin-bridge-api
$ feedbin-bridge-api COMMAND
running command...
$ feedbin-bridge-api (-v|--version|version)
feedbin-bridge-api/0.1.0 darwin-x64 node-v14.13.1
$ feedbin-bridge-api --help [COMMAND]
USAGE
  $ feedbin-bridge-api COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`feedbin-bridge-api help [COMMAND]`](#feedbin-bridge-api-help-command)
* [`feedbin-bridge-api server`](#feedbin-bridge-api-server)

## `feedbin-bridge-api help [COMMAND]`

display help for feedbin-bridge-api

```
USAGE
  $ feedbin-bridge-api help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `feedbin-bridge-api server`

server daemon

```
USAGE
  $ feedbin-bridge-api server

OPTIONS
  -d, --debug  run with debugging

EXAMPLE
  $ feedbin-bridge-api server
```

_See code: [src/commands/server.ts](https://github.com/mjohnsey/feedbin-bridge-api/blob/v0.1.0/src/commands/server.ts)_
<!-- commandsstop -->
