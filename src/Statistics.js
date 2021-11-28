import PropTypes from 'prop-types';
export const Statistic = ({ title }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
  </section>
);
