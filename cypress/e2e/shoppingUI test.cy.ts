import * as cypress from 'cypress';

describe('Shopping UI test', () => {
  it('Testing the Home page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[testid=login-email-input]').invoke(
      'attr',
      'value',
      'admin@gmail.com',
    );
    cy.get('[testid=login-password-input]').invoke('attr', 'value', 'admin');
    cy.contains('Log In').click();
    cy.contains('Welcome to Little Happy Shop');
    cy.contains('Why you should shop here?');
    cy.contains('Returning things is simple');
    cy.contains('It is about trust');
  });
  describe('Testing the store page', () => {
    it('Testing the stuff list', () => {
      cy.visit('http://localhost:3000/');
      cy.get('[testid=login-email-input]').invoke(
        'attr',
        'value',
        'admin@gmail.com',
      );
      cy.get('[testid=login-password-input]').invoke('attr', 'value', 'admin');
      cy.contains('Log In').click();
      cy.contains('Store').click();
      cy.contains('+Add to cart').click();
      cy.contains('1 in cart');
      cy.contains('+').click();
      cy.contains('1 in cart').should('not.exist');
      cy.contains('-').click();
      cy.contains('1 in cart');
      cy.contains('Remove').click();
      cy.contains('1 in cart').should('not.exist');
    });
    it('Testing the cart reactivity', () => {
      cy.get('[testid=cartBtn]').as('cartBtn').click();
      cy.contains('Total $0.00');
      cy.contains('Cart');
      cy.get('html').click(0, 0);
      cy.contains('+Add to cart').click();
      cy.get('@cartBtn').click();
      cy.get('[testid=cartItem]').contains('×');
      cy.get('html').click(0, 0);
      cy.contains('+Add to cart').click();
      cy.get('@cartBtn').click();
      cy.get('.offcanvas-body').as('cartPanel');
      cy.get('@cartPanel').contains('Book');
      cy.get('@cartPanel').contains('Computer');
      cy.get('@cartPanel').contains('Total $1,109.99');
      cy.get('[testid=cartItem]').contains('×').click();
      cy.get('@cartPanel').contains('Total $1,099.00');
      cy.get('[testid=cartItem]').contains('×').click();
      cy.get('@cartPanel').contains('Total $0.00');
    });
  });
});
