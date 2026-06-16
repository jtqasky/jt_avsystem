class LoginPage {
	private pageURL = '/login'

	private selectors = {
		emailInput: 'input#email',
		passwordInput: 'input#password',
		submitButton: 'button[type="submit"]',
		errorText: '.text-danger',
	}

	visit(): void {
		cy.visit(this.pageURL)
	}

	enterEmail(email: string): void {
		cy.get(this.selectors.emailInput).clear()
        if (email) {
            cy.get(this.selectors.emailInput).type(email)
        }
	}

	enterPassword(password: string): void {
		cy.get(this.selectors.passwordInput).clear()
        if (password) {
            cy.get(this.selectors.passwordInput).type(password)
        }
	}

	submit(): void {
		cy.get(this.selectors.submitButton).click()
	}

	login(email: string, password: string): void {
		this.visit()
		this.enterEmail(email)
		this.enterPassword(password)
		this.submit()
	}

	getErrorMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
		return cy.get(this.selectors.errorText).invoke('text')
	}
}

export default new LoginPage()
