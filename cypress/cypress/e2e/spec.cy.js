describe('my primero ejercicio de testing automation', () => {
  it('Visita una página web y verifica un elemento', () => {
    cy.visit('https://example.cypress.io')
     // Verificar que el título de la página sea correcto
     cy.title().should('eq', 'Example Domain');

     // Verificar que el encabezado principal contenga un texto específico
     cy.get('h1').should('contain', 'Example Domain');
  })
})  