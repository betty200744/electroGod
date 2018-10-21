/**
 * Created by betty on 10/21/18.
 */
"use strict";
const Promise = require('bluebird');
const childProcess = Promise.promisifyAll(require('child_process'));
const path = require('path');

const ADB_PATH = path.join(__dirname, 'tools/adb');


const getDevices = async () => {
  const stdout =  await childProcess.execAsync(`${ADB_PATH} devices`);
  const devices = stdout.split('\n').slice(1, -1);
  return devices;
};

module.exports = {
  getDevices,
};