import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Statistic.module.css';

function Statistics({title, stats}) {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
                {stats.map((stat) => (
                    <li key={stat.id} className="item">
                        <span>{stat.label} </span>
                        <span>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.protoTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }),
    ),
}

export default Statistics;