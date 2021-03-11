import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  a: 0,
  b: 0,
};

const reducers = {
  incA: state => {
    state.a++;
  },
  incB: state => {
    state.b++;
  },
};

const { reducer, actions } = createSlice({
  name: 'app',
  initialState,
  reducers,
});

const { incA, incB } = actions;

const selectA = ({ app: { a } }) => a;
const selectB = ({ app: { b } }) => b;

export default reducer;
export { incA, incB, selectA, selectB };
