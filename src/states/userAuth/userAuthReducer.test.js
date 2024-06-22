import userAuthReducer from './reducer';
import { ActionType } from './action';

describe('userAuthReducer', () => {
  it('harus mengatur userAuth ketika menerima SET_USER_AUTH', () => {
    const initialState = null;
    const action = {
      type: ActionType.SET_USER_AUTH,
      payload: { userAuth: { id: 1, name: 'Test User' } }
    };
    const expectedState = { id: 1, name: 'Test User' };

    expect(userAuthReducer(initialState, action)).toEqual(expectedState);
  });

  it('harus menghapus userAuth ketika menerima UNSET_USER_AUTH', () => {
    const initialState = { id: 1, name: 'Test User' };
    const action = { type: ActionType.UNSET_USER_AUTH };
    const expectedState = null;

    expect(userAuthReducer(initialState, action)).toEqual(expectedState);
  });

  it('harus mengembalikan state awal ketika menerima action yang tidak dikenal', () => {
    const initialState = { id: 1, name: 'Test User' };
    const action = { type: 'UNKNOWN_ACTION' };
    const expectedState = initialState;

    expect(userAuthReducer(initialState, action)).toEqual(expectedState);
  });
});
