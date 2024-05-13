import Transaction from '../Transaction/Transaction';
import style from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={style.table}>
      <thead className={style.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={style.tbody}>
        {items.map(item => {
          return (
            <Transaction
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}
