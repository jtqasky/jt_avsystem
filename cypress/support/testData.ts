export const TestData_001 = {
	// CASE 1: [Login] - Negative - Empty credentials
	case1: {
		email: '',
		password: '',
	},
	// CASE 2: [Login] - Negative - Empty email
	case2: {
		email: '',
		password: 'Password123',
	},
	// CASE 3: [Login] - Negative - Empty password
	case3: {
		email: 'validEmail@example.com',
		password: '',
	},
	// CASE 4: [Login] - Negative - Correct but invalid credentials
	case4: {
		email: 'validEmail@example.com',
		password: 'Password123',
	},
    // Error message for all negative cases
    errorMessage: 'Invalid email or password.',
}

export const TestData_002 = {
    originalUserData: {
		name: 'Jacek',
		surname: 'Tester',
		email: 'test@example.com',
		password: 'Password123!@#$',
		confirmPassword: 'Password123!@#$',
		phoneNumber: '123456789',
		birthDate: '1980-12-12',
		position: 'Accountant',
		salary: '5000',
		contractType: 'Mandate',
		startTime: '2026-06-10',
		endTime: '2027-06-11',
		notes: 'This is a note',
		isActivated: true,
		isAdmin: false,
	},
	changedUserData: {
		name: 'Marek',
		surname: 'Kowalski',
		email: 'example@test.com',
		phoneNumber: '987654321',
		birthDate: '1980-12-02',
		position: 'IT',
		salary: '10000',
		contractType: 'B2B',
		startTime: '2026-06-10',
		endTime: '2028-06-10',
		notes: 'This is an updated note',
		isActivated: true,
		isAdmin: true,
	}
}
