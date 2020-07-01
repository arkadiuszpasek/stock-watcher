export const INPUT_CHANGE = 'INPUT_CHANGE';
export const FETCH_STOCK = 'FETCH_STOCK';
export const FETCH_ALL_STOCKS = 'FETCH_ALL_STOCKS';

export const updateInput = (input: string) => {
  return {
    type: INPUT_CHANGE,
    payload: input,
  };
};

export const fetchStock = (ticker: string) => async (dispatch: any) => {
  try {
    const response = await fetch(`http://localhost:5000/stocks/${ticker}`);

    const json = await response.json();

    dispatch({
      type: FETCH_STOCK,
      payload: json ? json : {},
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchAllStocks = (ticker: string) => async (dispatch: any) => {
  try {
    const response = await fetch('http://localhost:5000/stocks/');
    const json = await response.json();

    dispatch({
      type: FETCH_ALL_STOCKS,
      payload: json ? json : {},
    });
  } catch (err) {
    console.log(err);
  }
};
