import * as React from 'react';
import { mount } from 'cypress/react';
import ShoppingCart from '../../src/components/ShoppingCart';
import { RecoilRoot, useRecoilState } from 'recoil';
import { props } from 'cypress/types/bluebird';
import { shoppingCart } from '../../src/recoil/store';
import 'bootstrap/dist/css/bootstrap.min.css';

describe('ShoppingCart component', () => {
  it('mounts', () => {
    mount(
      <RecoilRoot>
        <ShoppingCart closeCart={() => false} isOpen={true} />
      </RecoilRoot>,
    );
    cy.get('html')
      .should('contain.text', 'Cart')
      .and('contain.text', 'Total $0.00');
  });
});
