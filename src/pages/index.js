import React from 'react';
import { connect } from 'react-redux';
import { selectA, selectB } from '../state/slice';
import { Link } from 'gatsby';

const Index = props => {
  console.log({ Index_props: props });

  return (
    <div>
      <h1>Home</h1>

      <h2>A: {props.a}</h2>
      <h2>B: {props.b}</h2>

      <div>
        <Link to={'/page1'}>Go to Page 1</Link>
      </div>
      <div>
        <Link to={'/page2'}>Go to Page 2</Link>
      </div>
    </div>
  );
};

export default connect(state => ({
  a: selectA(state),
  b: selectB(state),
}))(Index);
