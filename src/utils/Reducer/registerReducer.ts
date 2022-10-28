export interface TypesState {
  income: boolean
  outcome: boolean
}

export type Action = { type: 'INCOME' } | { type: 'OUTCOME' }

export const initialState: TypesState = {
  income: true,
  outcome: false,
}

export function buttonTypeReducer(
  state: TypesState,
  action: Action,
): TypesState {
  const { type } = action

  switch (type) {
    case 'INCOME':
      return { ...state, income: !state.income, outcome: false }
    case 'OUTCOME':
      return { ...state, income: false, outcome: !state.outcome }
    default:
      return state
  }
}
