import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../../js/getRandomHexColor ';
import s from './StatList.module.css';

export const StatList = ({ stats }) => {
  return (
    <ul className={s.list}>
      {stats.map(({ id, label, percentage }) => {
        return (
          <li
            key={id}
            className={s.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage + '%'}</span>
          </li>
        );
      })}
    </ul>
  );
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
