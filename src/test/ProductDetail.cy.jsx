/* Component Testing with Cypress*/

import React from 'react'
import ProductDetail from '../products/detail/ProductDetail'


describe('<ProductDetail />', () => {
  it('renders', (done) => {
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('Invariant failed')
      done()
      return false
  })
    cy.mount(<ProductDetail />)
  })

  it('questionOne should default to 0', (done) => {
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('uncaught:exception')
      done()
      return false
  })
    cy.mount(<ProductDetail />)
    cy.get(ProductDetail).its('questionOne').should('have.text', '0')
  })

  it('questionTwo should default to 0', (done) => {
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('uncaught:exception')
      done()
      return false
  })
    cy.mount(<ProductDetail />)
    cy.get(ProductDetail).its('questionTwo').should('have.text', '0')
  })

  it('questionThree should default to 0', (done) => {
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('uncaught:exception')
      done()
      return false
  })
    cy.mount(<ProductDetail />)
    cy.get(ProductDetail).its('questionThree').should('have.text', '0')
  })

})