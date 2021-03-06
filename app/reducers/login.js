import * as types from '../actions/actionsTypes';

const initialState = {
	isAuthenticated: false,
	isFetching: false,
	isRegistering: false,
	token: '',
	user: {},
	error: ''
};

export default function login(state = initialState, action) {
	switch (action.type) {
		case types.LOGIN.REQUEST:
			return { ...state,
				isFetching: true,
				isAuthenticated: false,
				failure: false,
				error: ''
			};
		case types.LOGIN.SUCCESS:
			return { ...state,
				isFetching: false,
				isAuthenticated: true,
				user: action.user,
				token: action.user.token,
				failure: false,
				error: ''
			};
		case types.LOGIN.FAILURE:
			return { ...state,
				isFetching: false,
				isAuthenticated: false,
				failure: true,
				error: action.err
			};
		case types.LOGOUT:
			return initialState;
		case types.LOGIN.SET_TOKEN:
			return { ...state,
				token: action.token,
				user: action.user
			};
		case types.LOGIN.REGISTER_SUBMIT:
			return {
				...state,
				isFetching: true,
				isAuthenticated: false,
				isRegistering: true,
				failure: false,
				error: ''
			};
		case types.LOGIN.REGISTER_SUCCESS:
			return {
				...state,
				isFetching: false,
				isAuthenticated: false,
				failure: false,
				error: ''
			};
		case types.LOGIN.SET_USERNAME_SUBMIT:
			return {
				...state,
				isFetching: true
			};
		case types.LOGIN.SET_USERNAME_SUCCESS:
			return {
				...state,
				isFetching: false,
				isRegistering: false
			};
		default:
			return state;
	}
}
