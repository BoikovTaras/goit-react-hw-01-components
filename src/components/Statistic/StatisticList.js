import s from './Statistic.module.css';
export const StatisticList = ({ items }) => (
  <ul className={s.list}>
    {items.map(item => (
      <li key={item.id} className={s.item}>
        <span className={s.label}>{item.label}</span>
        <span className={s.percentage}>{item.percentage}%</span>
      </li>
    ))}
  </ul>
);
