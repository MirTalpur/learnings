var React = require('react');
var { Link } = require('react-router');

var Examples = (props) => {
	return(
	  <div>
	  	<h1 className = "text-center">Examples</h1>
      	<p>Here are a few example locations to try out: </p>
      	<ol>
	      	<li>
	      		<Link to ='/?location=Miami'>Miami, FL</Link>
	    	</li>
	    	<li>
	      		<Link to ='/?location=Austin'>Austin, Texas</Link>
	    	</li>
	    	<li>
	      		<Link to ='/?location=Memphis'>Memphis, TN</Link>
	    	</li>
	     </ol>
      </div>
    )
};

module.exports = Examples;