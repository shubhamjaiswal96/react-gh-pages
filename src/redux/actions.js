// actions.js
export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';

export const incrementCount = () => {
  return {
    type: INCREMENT_COUNT,
  };
};

export const decrementCount = () => {
  return {
    type: DECREMENT_COUNT,
  };
};
