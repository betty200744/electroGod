/**
 * Created by betty on 10/21/18.
 */
"use strict";

const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', function () {
  const options = {
    title: 'electronGod',
    x: 0,
    y: 0,
    width: 800,
    height: 600,
  };
  mainWindow = new BrowserWindow(options);
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  })

});