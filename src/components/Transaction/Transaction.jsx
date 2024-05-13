import style from "./Transaction.module.css"
export default function Transaction({ type, amount, currency }) {
  return (
    <tr className={style.string}>
      <td className={style.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
