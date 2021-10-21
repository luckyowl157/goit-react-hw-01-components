import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Transactions.module.css'


let Transactions = (props) => {
    let {items} = props;

    return (
        <>
            <h1 className={styles.title}>Task 4</h1>
        <table className={styles.history}>
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

Transactions.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}



export default Transactions;