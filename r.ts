import React from 'react';
import ReactDOM from 'react-dom';
const ce = React.createElement;

const myname = 'Josh Perez';
function Welcomer(props: any) { return React.createElement('h1', {className: 'greetz'}, '¡Hello, ', props.name, '!'); }
function App(props: any) { return ce('div', null, ce(Welcomer, {name: 'Mr X'}), ce(Welcomer, {name: 'Ms Q'})); }
function Clock(props: {date: Date}) {
  return ce(
      'div',
      null,
      ce('h1', null, '🙌🚝🚄🚅!'),
      ce('h2', null, 'It is ', props.date.toLocaleTimeString(), ' right now. Let\'s ✈️.'),
  );
}
class Clock2 extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {date: new Date()};
    this.updateMilliseconds = props.updateMilliseconds || 2000;
  }
  componentDidMount() { this.timer = setInterval(() => this.tick(), this.updateMilliseconds); }
  componentWillUnmount() { clearInterval(this.timer); }
  render() {
    return ce('div', null, ce('h2', null, '🙌 It is ', this.state.date.toLocaleTimeString(), ' right now. Let’s 🚝🚄🚅.'));
  }
  tick() { this.setState((state, props) => ({date: new Date()})); }
  state: {date: Date};
  timer: any;
  updateMilliseconds: number;
}
function Clocks(props: {millis: number[]}) {
  const millis = props.millis && props.millis.length ? props.millis : [1e3, 5e3, 10e3];
  const clocks = millis.map(ms => ce(Clock2, {updateMilliseconds: ms}));
  return ce('div', null, ...clocks)
}

function LoginButton(props: any) { return ce('button', {onClick: props.onClick}, 'Login'); }
function LogoutButton(props: any) { return ce('button', {onClick: props.onClick}, 'Logout'); }
function UserGreeting(props: any) { return ce('h1', null, 'おかえり！'); }
function GuestGreeting(props: any) { return ce('h1', null, 'だれ？'); }
function Greeting(props: any) { return ce(props.isLoggedIn ? UserGreeting : GuestGreeting); }

class LoginControl extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick() { this.setState({isLoggedIn: true}); }
  handleLogoutClick() { this.setState({isLoggedIn: false}); }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const button = isLoggedIn ? ce(LogoutButton, {onClick: this.handleLogoutClick})
                              : ce(LoginButton, {onClick: this.handleLoginClick});
    return ce(
        'div',
        null,
        ce(Greeting, {isLoggedIn}),
        button,
    );
  }
  state: {isLoggedIn: boolean};
}

async function zipToText(zip: string, response: string = '') {
  if (/^[0-9]{5}$/.test(zip)) {
    let fetched = await fetch('http://api.zippopotam.us/us/' + zip);
    if (fetched.ok) {
      let result = await fetched.json();
      response = `${result.places[0]['place name']}, ${result.places[0].state}`;
    } else {
      response = `${zip} has not been assigned as a US zip code`;
    }
  }
  return response;
}

class ZipCode extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {zip: '', response: ''};
    this.handleChange = this.handleChange.bind(this);
    this.defaultResponse = 'enter valid zip code';
  }
  state: {zip: string, response: string};
  defaultResponse: string;
  async handleChange(event: React.SyntheticEvent) {
    let zip = event.target.value;
    let response = await zipToText(zip, this.defaultResponse);
    this.setState({zip, response});
  }
  render() {
    return ce(
        'div',
        null,
        ce('h1', null, 'Enter a US zip code, e.g., 90210 and 55555. Also try invalid zip codes like 12340 and 19888'),
        ce('input', {type: 'text', value: this.state.zip, onChange: this.handleChange}),
        ce('p', null, this.state.response || this.defaultResponse),
    )
  }
}

{
  const element = ce(Welcomer, {name: myname})
  ReactDOM.render(element, document.getElementById('root1'));
}
{
  const appelt = ce(App);
  ReactDOM.render(appelt, document.getElementById('root2'));
}
ReactDOM.render(ce(Clock, {date: new Date()}), document.getElementById('root3'));
ReactDOM.render(ce(Clock2, {updateMilliseconds: 1000}), document.getElementById('root4'));
ReactDOM.render(ce(Clocks, {millis: [5e3, 4e3, 3e3, 2e3, 1e3]}), document.getElementById('root5'));
// ReactDOM.render(ce(LoginButton), document.getElementById('root'));
// ReactDOM.render(ce(LogoutButton), document.getElementById('root'));
ReactDOM.render(ce(LoginControl), document.getElementById('root6'));
ReactDOM.render(ce(ZipCode), document.getElementById('root7'));