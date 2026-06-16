class MainPage {
	private pageURL = '/'

	private selectors = {
		// MENU
		searchInput: '#search-input',
		addUserButton: '#add-user-button',
		logoutButton: '#logout-button',
		// USER
		userRow: '#table-user-row',
		userEmailRow: '#user-row-email',
		userNameAndSurnameRow: '#user-name-and-surname',
		updateUserButton: '#table-user-row-update-button',
		deleteUserButton: '#table-user-row-delete-button',
		deleteUserModalButton: '#delete-modal-delete-button',
		deactivateUserButton: '#table-user-row-deactivate-button',
		activateUserButton: '#table-user-row-activate-button',
		activationUserStatus: '#user-row-status > span'
	}

	visit(): void {
		cy.visit(this.pageURL)
	}

	/* GENERAL */
	wait(): void {
		cy.intercept('GET', '**/api/users').as('API_users_200')
		cy.wait(['@API_users_200'])
	}

	/* MENU */

	search(searchPhrase: string): void {
		cy.get(this.selectors.searchInput).clear().type(searchPhrase)
	}

	clickAddUser(): void {
		cy.get(this.selectors.addUserButton).click()
	}

	clickLogout(): void {
		cy.get(this.selectors.logoutButton).click()
	}

	/* USER INTERACTION */

	verifyUserExists(userMail: string): void {
		cy.contains(this.selectors.userRow, userMail).should('exist')
	}

	verifyUserDoesNotExists(userMail: string): void {
		cy.contains(this.selectors.userRow, userMail).should('not.exist')
	}

	clickUserDetails(userName: string): void {
		cy.contains(this.selectors.userNameAndSurnameRow, userName).should('exist').click()
	}

	clickUpdateUser(userMail: string): void {
		cy.contains(this.selectors.userRow, userMail).should('exist').find(this.selectors.updateUserButton).click()
	}

	clickDeleteUser(userMail: string): void {
		cy.contains(this.selectors.userRow, userMail).should('exist').find(this.selectors.deleteUserButton).click()
		cy.get(this.selectors.deleteUserModalButton).click()
	}

	clickDeactivateUser(userMail: string): void {
		cy.contains(this.selectors.userRow, userMail).should('exist').find(this.selectors.deactivateUserButton).should('have.text', 'Deactivate').click()
		cy.get(this.selectors.activationUserStatus).should('have.class', 'text-danger')
	}

	clickActivateUser(userMail: string): void {
		cy.contains(this.selectors.userRow, userMail).should('exist').find(this.selectors.deactivateUserButton).should('have.text', 'Activate').click()
		cy.get(this.selectors.activationUserStatus).should('have.class', 'text-success')
	}
}

export default new MainPage()
