describe('Alur Login', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173');
  });

  it('Mengisi formulir login dan berhasil masuk', () => {
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');

    cy.get('.welcome-message').should('contain', 'Welcome, User');
  });

  it('Mengisi formulir login dengan informasi salah', () => {
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('wrongpassword');

    cy.get('button[type="submit"]').click();

    cy.get('.error-message').should('exist');
  });
});
