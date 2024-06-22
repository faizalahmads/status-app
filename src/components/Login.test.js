import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';

describe('Komponen Login', () => {
  it('harus merender input email dan password', () => {
    render(<Login login={() => {}} />);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('harus memanggil fungsi login dengan email dan password yang benar', () => {
    const mockLogin = jest.fn();
    render(<Login login={mockLogin} />);

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText('Login'));

    expect(mockLogin).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password123' });
  });
});
