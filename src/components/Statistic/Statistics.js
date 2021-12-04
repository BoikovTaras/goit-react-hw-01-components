import { StatisticList } from './StatisticList';
import datas from '../../source/data.json';
import s from './Statistic.module.css';

export const Statistic = ({ title }) => (
  <section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}
    <StatisticList items={datas} />
  </section>
);
