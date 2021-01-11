import React from 'react';

function DataList(props) {
  // CH01 : add component returning UI
}

const withDataFetching = (WrappedComponent) => {
 return class WithDataFetching extends React.Component {
    // HOC03 : state defined and lifecycle call
  }
};

export default withDataFetching(DataList);
