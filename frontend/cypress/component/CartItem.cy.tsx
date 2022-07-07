import CartItem from '../../src/components/CartItem';
import * as React from 'react';
import { mount } from 'cypress/react';
import { RecoilRoot } from 'recoil';
import 'bootstrap/dist/css/bootstrap.min.css';

describe('CartItem.cy.ts', () => {
  it('mounts', () => {
    mount(
      <RecoilRoot>
        <CartItem id={1} quantity={3} key={1} />
      </RecoilRoot>,
    );
    cy.contains('Book');
    cy.contains('3x');
    cy.get('img');
    cy.contains('$10.99');
    cy.contains('$32.97');
  });
});
