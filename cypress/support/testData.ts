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