import PropTypes from 'prop-types';
import { StatList } from './StatList/';
import s from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <StatList stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(Object),
};

// export const Statistics = ({ title, stats }) => {
//   return (
//     <section class="statistics">
//       <h2 class="title">{title}</h2>
//       <ul class="stat-list">
//         {stats.map(({ id, label, percentage }) => {
//           return (
//             <li key={id} class="item">
//               <span class="label">{label}</span>
//               <span class="percentage">{percentage}</span>
//             </li>
//           );
//         })}
//       </ul>
//       {/* <StatList>{stats.map(stat => console.log(stat))}</StatList> */}
//     </section>
//   );
// };
