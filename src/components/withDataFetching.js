import React from 'react';

function DataList(props) {
  const { loading, results, error } = props;
    if (loading || error) {
      return loading ? 'Loading...' : error.message;
    }
  
    return (
      <div>
        <h1>Data</h1>
        <ul>
          {results.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </div>
    );
}

const withDataFetching = (WrappedComponent) => {
  return class WithDataFetching extends React.Component {
    constructor(props) {
          super(props);
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
    
        componentDidMount() {
          this.fetchData();
        }

        render(){
          const { loading, error, results } = this.state;
          return(
            <WrappedComponent loading={loading} error={error} results={results} />
          )
        }
  };
};

export default withDataFetching(DataList);
