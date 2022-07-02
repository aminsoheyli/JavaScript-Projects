import React, { Component } from "react";
import { connect } from "react-redux";
import { loadBugs, resolveBug } from "../store/bugs";

class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }

  handleResolve = bugId => {
    this.props.resolveBug(bugId);
  };

  render() {
    return (
      <ul>
        {this.props.bugs.map(bug => (
          <li key={bug.id}>
            {bug.description}
            <div>
              {!bug.resolved && (
                <button onClick={() => this.handleResolve(bug.id)}>
                  Resolve Bug
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

// bugs: state.entities.bugs.list
const mapStateToProps = state => ({
  bugs: state.entities.bugs.list,
});

const mapDispatchToProps = dispatch => ({
  loadBugs: () => dispatch(loadBugs()),
  resolveBug: bugId => dispatch(resolveBug(bugId)),
});

// Container Component
export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
