import React from 'react';
import { connect } from 'react-redux';
import { incA, selectA } from '../state/slice';
import { Link } from 'gatsby';

const Page1 = props => {
  console.log({ Page1_props: props });

  return (
    <div>
      <h1>Page 1</h1>

      <h2>A: {props.a}</h2>

      <button
        onClick={() => {
          props.incA();
        }}
      >
        Increment A
      </button>

      <div>
        <Link to={'/'}>Go to Home</Link>
      </div>
      <div>
        <Link to={'/page2'}>Go to Page 2</Link>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    a: selectA(state),
  }),
  { incA },
)(Page1);
