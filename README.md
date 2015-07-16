# Disallow assignment of scope-bound variables from within React classes (no-react-scope-bound-assignment)

Variables declared outside of a React.createClass call are scope bound inside that call. If the variable is assigned
or reassigned from within the React class, this value is shared across all instances of the class, but more importantly,
when isomporphically rendering in Node, the variable will be shared across all renders, as Node will require the
file only once.

For more information on the rule itself, see the [rule doc](docs/no-react-scope-bound-assignment.md).