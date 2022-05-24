import { LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL } from './actionTypes';

let token = localStorage.getItem('token');
const initialState = token ? { loggedIn: true, token } : {};

export const authentication = (state = initialState, action: any) => {
	switch (action.type) {
		case LOGIN_START:
			return {
				loggingIn: false,
			};
		case LOGIN_SUCCESS:
			return {
				loggedIn: true,
				token: action.token,
			};
		case LOGIN_FAIL:
			return {};
		case LOGIN_FAIL:
			return {};
		default:
			return state;
	}
};

export const registration = (state = {}, action: any) => {
	switch (action.type) {
		case REGISTER_START:
			return { registering: true };
		case REGISTER_SUCCESS:
			return {};
		case REGISTER_FAIL:
			return {};
		default:
			return state;
	}
};
