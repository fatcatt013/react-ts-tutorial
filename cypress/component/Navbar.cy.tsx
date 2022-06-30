import Navbar from '../../src/components/Navbar';
import * as React from 'react';
import { mount } from 'cypress/react';
import { RecoilRoot } from 'recoil';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
  it('mounts', () => {
    mount(
      <RecoilRoot>
        <BrowserRouter>
          <Navbar openCart={() => true} closeCart={() => false} />
        </BrowserRouter>
      </RecoilRoot>,
    );
    cy.contains('Home').click().should('have.class', 'nav-link active');
    cy.contains('Store').click().should('have.class', 'nav-link active');
    cy.contains('About');
    cy.contains('Home').click().should('have.class', 'nav-link');
    cy.get('[testid=cartBtn]');
  });
});
