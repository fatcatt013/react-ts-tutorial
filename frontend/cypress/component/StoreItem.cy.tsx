import StoreItem from '../../src/components/StoreItem';
import * as React from 'react';
import { mount } from 'cypress/react';
import { RecoilRoot } from 'recoil';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProductById } from '../../src/data/func';

describe('Navbar', () => {
  it('mounts', () => {
    cy.get('html').then(() => {
      const obj = getProductById(1);
      mount(
        <RecoilRoot>
          <StoreItem {...obj} />
        </RecoilRoot>,
      );
    });
    cy.contains('Book');
    cy.contains('+Add to cart');
    cy.contains('$10.99');
    cy.get('img');
  });
});
