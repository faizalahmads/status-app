describe('Alur Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('Mengisi formulir login dan berhasil masuk', () => {
    cy.get('input[name="email"]').type('faizal18@gmail.com');
    cy.get('input[name="password"]').type('123456');

    cy.get('button[type="button"]').click();

    cy.get('[data-cy="btn-signout"]').should('exist');

    cy.get('[data-cy="btn-signout"]').click();
  });

  it('Mengisi formulir login dengan informasi salah', () => {
    cy.get('input[name="email"]').type('faizal18@gmail.com');
    cy.get('input[name="password"]').type('12345678');

    cy.get('button[type="button"]').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal(`email or password is wrong`)
    })
  });
});
