import { StatisticList } from './StatisticList';
import datas from '../source/data.json';

export const Statistic = ({ title }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <StatisticList items={datas} />
  </section>
);
