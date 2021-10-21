import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Profile.module.css';


let Profile = (props) => {
    let {name, tag, location, avatar, stats} = props;

    return (
        <>
            <div className={styles.profile}>
                <div className="description">
                    <div className="avatarWr"><img src={avatar} alt={name} className={styles.avatarWr__img} /></div>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.tag}>@{tag}</p>
                    <p className={styles.location}>{location}</p>
                </div>
                <ul className={styles.stats}>
                    <li>
                    <span className={styles.label}>Followers</span>
                    <span className="quantity">{stats.followers}</span>
                    </li>
                    <li>
                    <span className={styles.label}>Views</span>
                    <span className="quantity">2000</span>
                    </li>
                    <li>
                    <span className={styles.label}>Likes</span>
                    <span className="quantity">3000</span>
                    </li>
                </ul>
            </div>
        </>
    )
}


Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}

export default Profile;

