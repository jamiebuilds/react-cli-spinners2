// @flow
'use strict';
const React = require('react');
const SPINNERS = require('cli-spinners/spinners.json');
const h = React.createElement;

function getSpinner(name) /*: { frames: Array<string>, interval: number } */ {
  let match = SPINNERS[name];
  if (!match) throw new Error(`No spinner named ${match}`);
  return match
}

/*::
type CliSpinnerProps = {
  spinner: string,
};

type CliSpinnerState = {
  currentFrame: number,
};
*/

class CliSpinner extends React.Component /*:: <CliSpinnerProps, CliSpinnerState> */ {
  /*::
  timerId: TimeoutID | null;
  */

  constructor(props /*: CliSpinnerProps */) {
    super(props);
    this.state = {
      currentFrame: 0,
    };
  }

  componentDidMount() {
    this.queue();
  }

  componentWillUnmount() {
    this.clear();
  }

  queue() {
    this.clear();
    let spinner = getSpinner(this.props.spinner);
    this.timerId = setTimeout(() => this.tick(), spinner.interval);
  }

  clear() {
    if (this.timerId) clearTimeout(this.timerId);
    this.timerId = null;
  }

  tick() {
    this.setState((state, props) => {
      let spinner = getSpinner(props.spinner);
      let max = spinner.frames.length - 1;
      let curr = state.currentFrame;

      return {
        currentFrame: curr >= max ? 0 : curr + 1,
      };
    });

    this.queue();
  }

  render() {
    let spinner = getSpinner(this.props.spinner);
    return spinner.frames[this.state.currentFrame];
  }
}

module.exports = CliSpinner;
