'use strict';
var React = require('react');
var outsideVariable = 'Leela';
React.createClass({
    render: function() {
        if(outsideVariable === 'Leela'){
            var insideVariable = 'Inside Value';
        }
        return insideVariable;
    }
});
