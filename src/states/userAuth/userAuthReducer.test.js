/**
 * Skenario Pengujian:
 * 
 * userAuthReducer:
 * - Mengatur userAuth ketika menerima action dengan tipe SET_USER_AUTH.
 * - Menghapus userAuth ketika menerima action dengan tipe UNSET_USER_AUTH.
 * - Mengembalikan state awal ketika menerima action dengan tipe yang tidak dikenal.
 */

import userAuthReducer from './reducer';
import { ActionType } from './action';

describe('userAuthReducer', () => {
  it('should set userAuth when receiving SET_USER_AUTH action', () => {
    const initialState = null;
    const action = {
      type: ActionType.SET_USER_AUTH,
      payload: { userAuth: { id: 1, name: 'Test User' } }
    };
    const expectedState = { id: 1, name: 'Test User' };

    expect(userAuthReducer(initialState, action)).toEqual(expectedState);
  });

  it('should unset userAuth when receiving UNSET_USER_AUTH action', () => {
    const initialState = { id: 1, name: 'Test User' };
    const action = { type: ActionType.UNSET_USER_AUTH };
    const expectedState = null;

    expect(userAuthReducer(initialState, action)).toEqual(expectedState);
  });

  it('should return initial state when receiving unknown action', () => {
    const initialState = { id: 1, name: 'Test User' };
    const action = { type: 'UNKNOWN_ACTION' };
    const expectedState = initialState;

    expect(userAuthReducer(initialState, action)).toEqual(expectedState);
  });
});
