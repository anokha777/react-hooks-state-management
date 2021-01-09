import React from 'react';

function Repositories(props) {
  // HOC01 : add component returning UI
  const { loading, results, error } = props;
    if (loading || error) {
      return loading ? 'Loading...' : error.message;
    }
  
    return (
      <div>
        <h1>Data new</h1>
        <ul>
          {results.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </div>
    ); 
}

// 
const withDataFetching = (WrappedComponent) => {
  class WithDataFetching extends React.Component {
    constructor() {
      super();
      this.state = {
        results: [],
        loading: true,
        error: '',
      };
    }

    async fetchData() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json = await data.json();

        if (json) {
          this.setState({
            results: json,
            loading: false,
          });
        }
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message,
        });
      }
    }

    async componentDidMount() {
      this.fetchData();
    }

    render() {
      const { results, loading, error } = this.state;

      return <WrappedComponent results={results} loading={loading} error={error} {...this.props} />;
    }
  }

  return WithDataFetching;
};

export default withDataFetching(Repositories);
