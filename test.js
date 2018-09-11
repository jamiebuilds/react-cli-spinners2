// @flow
'use strict';
const test = require('ava');
const CliSpinner = require('./');
const ReactTestRenderer = require('react-test-renderer');
const SPINNERS = require('cli-spinners/spinners.json');
const React = require('react');
const h = React.createElement;

function wait(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function macro(t, spinner) {
  let tree = h(CliSpinner, { spinner: spinner });
  let renderer = ReactTestRenderer.create(tree);

  for (let frame of SPINNERS[spinner].frames) {
    t.is(renderer.toJSON(), frame);
    await wait(SPINNERS[spinner].interval);
  }
}

for (let spinner of Object.keys(SPINNERS)) {
  test(spinner, macro, spinner);
}
