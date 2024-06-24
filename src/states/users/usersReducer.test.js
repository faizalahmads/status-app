/**
 * Skenario Pengujian:
 * 
 * usersReducer:
 * - Mengatur daftar pengguna ketika menerima action dengan tipe RECEIVE_USERS.
 * - Mengembalikan state awal ketika menerima action dengan tipe yang tidak dikenal.
 */

import usersReducer from './reducer';
import { ActionType } from './action';

describe('usersReducer', () => {
  it('should set users list when receiving RECEIVE_USERS action', () => {
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_USERS,
      payload: [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }]
    };
    const expectedState = [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }];

    expect(usersReducer(initialState, action)).toEqual(expectedState);
  });

  it('should return initial state when receiving unknown action', () => {
    const initialState = [{ id: 1, name: 'User 1' }];
    const action = { type: 'UNKNOWN_ACTION' };
    const expectedState = initialState;

    expect(usersReducer(initialState, action)).toEqual(expectedState);
  });
});
