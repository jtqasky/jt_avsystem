class UserDetailsPage {
    private pageURL = '/userDetails/:id'

    private selectors = {
        cardBodyView: '.card-body',
        userDetailsPartialText: '#user-details-'
    }

    visit(userId: string): void {
        const url = this.pageURL.replace(':id', userId)
        cy.visit(url)
	}

    verifyURL(): void {
        cy.url().should('contain', 'userDetails')
    }

    verifyData(userDataObject: { [key: string]: string | boolean }) {
        const unavailableDataSelectors = ['password', 'confirmPassword']

        const booleanSelectors = ['isActivated', 'isAdmin']

        const selectorsMap: Record<string, string> = {
            'phoneNumber': 'phone-number',
            'birthDate': 'birth-date',
            'contractType': 'contract-type',
            'startTime': 'start-time',
            'endTime': 'end-time',
            'isActivated': 'activated',
            'isAdmin': 'admin'
        }

        for (const field of Object.keys(userDataObject)) {
            const value = userDataObject[field]

            if(unavailableDataSelectors.indexOf(field) === -1) {
                // Boolean check
                if(booleanSelectors.indexOf(field) !== -1) {
                    let checkValue = value ? 'Yes' : 'No'
                    cy.get(`${this.selectors.userDetailsPartialText}${selectorsMap[field]}`).should('contain', checkValue)
                } 
                // Other
                else {
                    const selectorKey = selectorsMap[field] ?? field
                    cy.get(`${this.selectors.userDetailsPartialText}${selectorKey}`).should('contain', String(value))
                }
            }
        }

    }
}

export default new UserDetailsPage()