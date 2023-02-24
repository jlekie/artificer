#!/usr/bin/env node

import * as UpdateNotifier from 'update-notifier';
import * as Path from 'path';
import * as FS from 'fs';
const pkg = JSON.parse(FS.readFileSync(Path.resolve(__dirname, '../package.json'), 'utf8'));

UpdateNotifier({ pkg, updateCheckInterval: 100 * 60 * 60 }).notify();

import '@jlekie/alchemist/dist/run';
