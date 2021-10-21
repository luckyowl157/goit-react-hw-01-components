import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Friends.module.css';

let Friends = (props) => {
    let {friends} = props;
    return (
        <div>
            <h1 className={styles.title}>Task 3</h1>
            <ul className={styles.friendsList}>
                {friends.map(friend => (
                    <li className={styles.singleFriend} key={friend.id}>
                        <span className={!friend.isOnline ? styles.offline : styles.online} title={!friend.isOnline ? 'offline' : 'online'}>{friend.isOnline}</span>
                        <img className={styles.avatar} src={friend.avatar} alt="" />
                        <p className={styles.name}>{friend.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )   
}

Friends.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}


export default Friends;