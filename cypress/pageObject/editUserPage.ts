class EditUserPage {
	private editUserPageURL = '/edit/:id'
	private createUserPageURL = '/create'

	private selectors = {
		cancelButton: '#cancel-button',
		submitButton: '#submit-button',
		errorText: '.text-danger',
	}

	visit(userId: string | null): void {
		if (userId == null) {
			cy.visit(this.createUserPageURL)
		} else {
			const url = this.editUserPageURL.replace(':id', userId)
			cy.visit(url)
		}
	}

	clickCancel(): void {
		cy.get(this.selectors.cancelButton).click()
	}

	clickSubmit(): void {
		cy.get(this.selectors.submitButton).click()
	}

	inputData(userDataObject: { [key: string]: string | boolean }): void {
		const selectSelectors = ['position', 'contractType']

		const checkboxSelectors = ['isActivated', 'isAdmin']

		for (const field of Object.keys(userDataObject)) {
			const value = userDataObject[field]
			// Selects
			if (selectSelectors.indexOf(field) !== -1) {
				cy.get(`#${field}`).select(String(value))
			}
			// Checkboxes
			else if (checkboxSelectors.indexOf(field) !== -1) {
				if (value == true) {
					cy.get(`#${field}`).check()
				}
			}
			// Inputs
			else {
				cy.get(`#${field}`).clear().type(String(value))
			}
		}
	}

	getErrorMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
		return cy.get(this.selectors.errorText).invoke('text')
	}
}

export default new EditUserPage()
