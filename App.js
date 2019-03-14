import React from 'react';

class TodoApp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          movies: [
            { title: 'Mean Girls', done: false },
          { title: 'Hackers', done: false },
          { title: 'The Grey', done: false },
          { title: 'Sunshine', done: false },
          { title: 'Ex Machina', done: false },
        ]
      }
    }
    
    render() {
      return (
        <div>
          <h5>MovieList</h5>
          <ol>
          {this.state.movies.map(movies => (
            <li key={movies.id}>
              <label>
                <input type="checkbox" disabled readOnly checked={movies.done} /> 
                <span className={movies.done ? "done" : ""}>{movies.title}</span>
              </label>
            </li>
          ))}
          </ol>
        </div>
      )
    }
  }
  
  // newFunction();

function newFunction() {
  ReactDOM.render(<TodoApp />, document.querySelector("#app"));
}
