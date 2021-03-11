import React from 'react';
import { connect } from 'react-redux';
import { incB, selectB } from '../state/slice';
import { Link } from 'gatsby';

const Page2 = props => {
  console.log({ Page2_props: props });

  return (
    <div>
      <h1>Page 2</h1>

      <h2>B: {props.b}</h2>

      <button
        onClick={() => {
          props.incB();
        }}
      >
        Increment B
      </button>

      <div>
        <Link to={'/'}>Go to Home</Link>
      </div>
      <div>
        <Link to={'/page1'}>Go to Page 1</Link>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    b: selectB(state),
  }),
  { incB },
)(Page2);
