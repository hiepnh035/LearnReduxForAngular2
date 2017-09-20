export function benh(state: any = [], { type, payload }) {
  switch (type) {
    case 'LOAD_BENH':
      return payload;
    case 'ADD_BENH':
      return [...state, payload];
    case 'UPDATE_BENH':
      return state.map(benh => {
        return benh._id === payload._id ? Object.assign({}, benh, payload) : benh;
      });
    case 'DELETE_BENH':
      return state.filter(benh => {
        return benh.token !== payload.token;
      });
    default:
      return state;
  }
}
