export const INPUT_CHANGE = 'INPUT_CHANGE';
export const FETCH_DAILY = 'FETCH_DAILY';

export const updateInput = (input) => {
  return {
    type: INPUT_CHANGE,
    payload: input,
  };
};

export const fetchDailyEntries = (ticker) => async (dispatch) => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=LDHSD4FVSJ9P7FCX`,
  );

  const json = await response.json();

  dispatch({
    type: FETCH_DAILY,
    payload: json ? json : {},
  });
};
