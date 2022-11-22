import { useDispatch, useSelector } from 'react-redux';
import './MeLeftBar.css';
import * as sessionActions from '../../store/session';

function MeLeftBar() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    
    const logout = () =>  {
        return dispatch(sessionActions.logout());
    }

    return (
        <div id='me-left-bar-container'>
            <div id='me-left-bar-search-container'>
                <input type='text'></input>
            </div>
            <div id='me-left-bar-middle-container'>
                <div id='me-left-bar-direct-messages'>
                </div>
            </div>
            <div id='userBar'>
                <div id='nameTag'><div id='userIcon'></div><div id='nameDisplay'>{sessionUser ? sessionUser.username : ""}</div></div>
                <div id='userMenus'>
                    <div id='userSettings' onClick={logout}>
                        <svg aria-hidden='true' role='img'>
                            <path fill="white" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z">

                            </path>

                        </svg>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MeLeftBar