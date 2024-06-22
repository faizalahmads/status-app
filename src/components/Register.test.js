import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Register from './Register';

describe('Komponen Register', () => {
  it('harus merender input username, email, dan password', () => {
    render(<Register register={() => {}} />);

    expect(screen.getByPlaceholderText('Masukkan Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Masukkan Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Masukkan Password')).toBeInTheDocument();
  });

  it('harus memanggil fungsi register dengan username, email, dan password yang benar', () => {
    const mockRegister = jest.fn();
    render(<Register register={mockRegister} />);

    fireEvent.change(screen.getByPlaceholderText('Masukkan Username'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText('Masukkan Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Masukkan Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText('Register'));

    expect(mockRegister).toHaveBeenCalledWith({ name: 'testuser', email: 'test@example.com', password: 'password123' });
  });
});
