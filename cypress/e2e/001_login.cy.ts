/** 001_LOGIN.CY.TS TEST RANGE
 * CASE 1: [Login] - Negative - Empty credentials
 * CASE 2: [Login] - Negative - Empty email
 * CASE 3: [Login] - Negative - Empty password
 * CASE 4: [Login] - Negative - Correct but invalid credentials
 * CASE 5: [Login] - Positive - Valid credentials + logout
 */

import LoginPage from '../pageObject/loginPage'
import { TestData_001 } from '../support/testData'

describe('001_Login Tests', () => {
	it('001_CASE 1: [Login] - Negative - Empty credentials', () => {
		LoginPage.login(TestData_001.case1.email, TestData_001.case1.password)
		LoginPage.getErrorMessage().should('eq', TestData_001.errorMessage)
	})

	it('001_CASE 2: [Login] - Negative - Empty email', () => {
		LoginPage.login(TestData_001.case2.email, TestData_001.case2.password)
		LoginPage.getErrorMessage().should('eq', TestData_001.errorMessage)
	})

	it('001_CASE 3: [Login] - Negative - Empty password', () => {
		LoginPage.login(TestData_001.case3.email, TestData_001.case3.password)
		LoginPage.getErrorMessage().should('eq', TestData_001.errorMessage)
	})

	it('001_CASE 4: [Login] - Negative - Correct but invalid credentials', () => {
		LoginPage.login(TestData_001.case4.email, TestData_001.case4.password)
		LoginPage.getErrorMessage().should('eq', TestData_001.errorMessage)
	})

	it('001_CASE 5: [Login] - Positive - Valid credentials', () => {
		cy.env(['loginData'], { log: false }).then(({ loginData }) => {
			LoginPage.login(loginData.email, loginData.password)
		})
	})
})
