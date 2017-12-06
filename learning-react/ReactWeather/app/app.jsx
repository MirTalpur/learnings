var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory } = require('react-router');
//same as
// var Route = require('react-router').Route;
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <Route path="about" component={About}/>
          <Route path="examples" component={Examples}/>
          <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);