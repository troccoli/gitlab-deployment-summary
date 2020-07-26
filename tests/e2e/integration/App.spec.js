describe('App', () => {
    it('shows the title', () => {
        cy.visit('/')
        cy.get('e2e:app-title').should('contain.text', 'GitLab Deployment Summary')
        cy.get('e2e:slack-button')
            .should('contain.text', 'Slack it!')
            .and('be.visible')
            .and('be.disabled')
    });
});
