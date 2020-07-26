describe('App', () => {
    it('shows the title', () => {
        cy.visit('/')
        cy.get('e2e:app-title').should('contain.text', 'GitLab deployment summary')
            .and('have.class', 'text-uppercase')
        cy.get('e2e:options-title').should('contain.text', 'Choose your options')
        cy.get('e2e:summary-title').should('contain.text', 'Summary')
    });
});
