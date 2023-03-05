export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const;

export type TodoFilter = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
