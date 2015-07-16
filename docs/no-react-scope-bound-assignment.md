# Disallow assignment of scope-bound variables from within React classes (no-react-scope-bound-assignment)

Variables declared outside of a React.createClass call are scope bound inside that call. If the variable is assigned
or reassigned from within the React class, this value is shared across all instances of the class, but more importantly,
when isomporphically rendering in Node, the variable will be shared across all renders, as Node will require the
file only once.

This is a nasty little bug that can cause a ton of pain, and this rule will help you not fall into this specific trap.


## Rule Details
This rule is aimed at eliminating errors and silent defects in code by ensuring that variables are not reassigned
after being scope bound into a React component class.

The following are considered warnings:

```js
var a = 'Leela';
React.createClass({
    render: {
        if(a === 'Leela'){
            a = 'Fry';
        }
        return (<div>{{a}}</div>);
    }
});
```

The following pattern is not considered a warning:

```js
var a = 'Leela';
if(a === 'Leela'){
    a = 'Fry';
}
React.createClass({
    render: {
        return (<div>{{a}}</div>);    
    }
});
```

## Options

This rule takes no options.

## When not to use it

If you want to do some ill-advised in-memory latching on a per-server basis?