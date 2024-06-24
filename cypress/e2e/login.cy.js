/**
 * Skenario Pengujian:
 * 
 * Alur Login:
 * - Mengisi formulir login dengan informasi yang benar dan berhasil masuk, kemudian tombol sign out muncul.
 * - Mengisi formulir login dengan informasi yang salah dan pesan error ditampilkan.
 */

describe('Alur Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should fill the login form and log in successfully', () => {
    cy.get('input[name="email"]').type('faizal18@gmail.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button[type="button"]').click();
    cy.get('[data-cy="btn-signout"]').should('exist');
    cy.get('[data-cy="btn-signout"]').click();
  });

  it('should display error message when filling login form with incorrect information', () => {
    cy.get('input[name="email"]').type('faizal18@gmail.com');
    cy.get('input[name="password"]').type('12345678');
    cy.get('button[type="button"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`email or password is wrong`)
    })
  });
});
