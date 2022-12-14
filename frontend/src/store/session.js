import csrfFetch from './csrfFetch'

const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
};

const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    };
}; 

export const storeCSRFToken = (res) => {
    const csrfToken = res.headers.get('X-CSRF-Token');
    if (csrfToken) {
        sessionStorage.setItem('X-CSRF-Token', csrfToken)
    }
}

export const storeCurrentUser = (user) => {
    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user))
    } else {
        sessionStorage.removeItem('currentUser')
    }
}

export const restoreSession = () => async dispatch => {
    const res = await csrfFetch("/api/session");
    storeCSRFToken(res)
    const data = await res.json();
    storeCurrentUser(data.user)
    dispatch(setCurrentUser(data.user))
    return res
}

export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password
        })
    });

    const data = await res.json();
    storeCurrentUser(data.user)
    dispatch(setCurrentUser(data.user));
    return res
}

export const logout = () => async (dispatch) => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE'
    })

    sessionStorage.removeItem('currentUser')
    sessionStorage.removeItem('X-CSRF-Token')
    const data = await res.json();
    dispatch(removeCurrentUser());
    return res;
}

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return { ...state, user: action.payload };
        case REMOVE_CURRENT_USER:
            return { ...state, user: null };
        default:
            return state;
    }
}

export default sessionReducer;
