import { useState, useEffect } from 'react';

function DataList() {
  const [ loading, results, error ] = useDataFetching('https://jsonplaceholder.typicode.com/todos');
  
    if (loading || error) {
      return loading ? 'Loading...' : error.message;
    }
  
    return (
      <div>
        <h1>Data Using Hooks</h1>
        <ul>
          {results.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </div>
    );
}

function useDataFetching(dataSource){
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');
    const [ loading, setLoading] = useState(true);

    useEffect(()=>{
          async function fetchData(){
              try {
                let response = await fetch(dataSource);
                response = await response.json();
                setLoading(false);
                setResults(response);
              } catch (err){
                setLoading(false);
                setError(err.message);
              }
          }
          fetchData();
        },[dataSource]);

    return [loading,results,error ];
}

export default DataList;
