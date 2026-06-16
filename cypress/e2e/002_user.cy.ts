/** 002_USER.CY.TS TEST RANGE
 * CASE 1: [User] - Create user with valid data
 * CASE 2: [User] - Attempt to create user with already existing data
 * CASE 3: [User] - Deactivate / Activate user
 * CASE 4: [User] - Login as user without admin privileges
 * CASE 5: [User] - Update user details
 * CASE 6: [User] - Login as updated user with admin privileges
 * CASE 7: [User] - Delete user
 */

import LoginPage from '../pageObject/loginPage'
import MainPage from '../pageObject/mainPage'
import EditUserPage from '../pageObject/editUserPage'
import UserDetailsPage from '../pageObject/userDetailsPage'
import { TestData_002 } from '../support/testData'

describe('002_User Tests', () => {
	beforeEach(() => {
		cy.env(['loginData'], { log: false }).then(({ loginData }) => {
			LoginPage.login(loginData.email, loginData.password)
		})
	})

	it('002_CASE 1: [User] - Create user with valid data', () => {
		MainPage.clickAddUser()
		EditUserPage.inputData(TestData_002.originalUserData)
		EditUserPage.clickSubmit()
		MainPage.wait()
		MainPage.verifyUserExists(TestData_002.originalUserData.email)
		MainPage.clickUserDetails(`${TestData_002.originalUserData.name} ${TestData_002.originalUserData.surname}`)
		UserDetailsPage.verifyData(TestData_002.originalUserData)
	})

	it('002_CASE 2: [User] - Attempt to create user with already existing data', () => {
		MainPage.clickAddUser()
		EditUserPage.inputData(TestData_002.originalUserData)
		EditUserPage.clickSubmit()
		EditUserPage.getErrorMessage().should('eq', 'Email already exists')
	})

	it('002_CASE 3: [User] - Deactivate / Activate user', () => {
		MainPage.clickDeactivateUser(TestData_002.originalUserData.email)
		MainPage.clickActivateUser(TestData_002.originalUserData.email)
	})

	it('002_CASE 4: [User] - Login as user without admin privileges', () => {
		MainPage.verifyUserExists(TestData_002.originalUserData.email)
		MainPage.clickLogout()
		LoginPage.login(TestData_002.originalUserData.email, TestData_002.originalUserData.password)
		UserDetailsPage.verifyURL()
	})

	it('002_CASE 5: [User] - Update user details', () => {
		MainPage.clickUpdateUser(TestData_002.originalUserData.email)
		EditUserPage.inputData(TestData_002.changedUserData)
		EditUserPage.clickSubmit()
		MainPage.wait()
		MainPage.verifyUserExists(TestData_002.changedUserData.email)
		MainPage.verifyUserDoesNotExists(TestData_002.originalUserData.email)
		MainPage.clickUserDetails(`${TestData_002.changedUserData.name} ${TestData_002.changedUserData.surname}`)
		UserDetailsPage.verifyData(TestData_002.changedUserData)
	})

	it('002_CASE 6: [User] - Login as updated user with admin privileges', () => {
		MainPage.verifyUserExists(TestData_002.changedUserData.email)
		MainPage.clickLogout()
		LoginPage.login(TestData_002.changedUserData.email, TestData_002.originalUserData.password)
		MainPage.verifyUserExists(TestData_002.changedUserData.email)
	})

	it('002_CASE 7: [User] - Delete user', () => {
		MainPage.clickDeleteUser(TestData_002.changedUserData.email)
		MainPage.verifyUserDoesNotExists(TestData_002.changedUserData.email)
	})
})
