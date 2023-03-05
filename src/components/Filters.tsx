import { TODO_FILTERS } from '../constants';
import { useTodosStore } from '../hooks';

const todoFilters = [
  {
    text: 'All',
    value: TODO_FILTERS.ALL,
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  {
    text: 'Active',
    value: TODO_FILTERS.ACTIVE,
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  {
    text: 'Completed',
    value: TODO_FILTERS.COMPLETED,
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
];

export const Filters: React.FC = () => {
  const { filterSelected, changeFilter } = useTodosStore();

  return (
    <ul className="filters">
      {todoFilters.map(({ value, text, href }) => {
        return (
          <li key={value}>
            <a
              href={href}
              className={`${filterSelected === value ? 'selected' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                changeFilter(value);
              }}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
