import usersReducer from './reducer';
import { ActionType } from './action';

describe('usersReducer', () => {
  it('harus mengatur daftar pengguna ketika menerima RECEIVE_USERS', () => {
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_USERS,
      payload: [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }]
    };
    const expectedState = [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }];

    expect(usersReducer(initialState, action)).toEqual(expectedState);
  });

  it('harus mengembalikan state awal ketika menerima action yang tidak dikenal', () => {
    const initialState = [{ id: 1, name: 'User 1' }];
    const action = { type: 'UNKNOWN_ACTION' };
    const expectedState = initialState;

    expect(usersReducer(initialState, action)).toEqual(expectedState);
  });
});
