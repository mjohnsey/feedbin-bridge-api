feedbin-bridge-api
==================

API to run a bridge service for Feedbin to other platforms

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/feedbin-bridge-api.svg)](https://npmjs.org/package/feedbin-bridge-api)
[![Downloads/week](https://img.shields.io/npm/dw/feedbin-bridge-api.svg)](https://npmjs.org/package/feedbin-bridge-api)
[![License](https://img.shields.io/npm/l/feedbin-bridge-api.svg)](https://github.com/mjohnsey/feedbin-bridge-api/blob/master/package.json)

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
feedbin-bridge-api/0.1.0 darwin-x64 node-v14.4.0
$ feedbin-bridge-api --help [COMMAND]
USAGE
  $ feedbin-bridge-api COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`feedbin-bridge-api hello [FILE]`](#feedbin-bridge-api-hello-file)
* [`feedbin-bridge-api help [COMMAND]`](#feedbin-bridge-api-help-command)

## `feedbin-bridge-api hello [FILE]`

describe the command here

```
USAGE
  $ feedbin-bridge-api hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ feedbin-bridge-api hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/mjohnsey/feedbin-bridge-api/blob/v0.1.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
