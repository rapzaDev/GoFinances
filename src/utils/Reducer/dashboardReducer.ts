export interface LastTransactionsState {
  income: string
  outcome: string
  total: string
}

export type Action =
  | { type: 'INCOME'; payload: string }
  | { type: 'OUTCOME'; payload: string }
  | { type: 'TOTAL'; payload: string }

export const initialState: LastTransactionsState = {
  income: '',
  outcome: '',
  total: '',
}

export function lastTransactionReducer(
  state: LastTransactionsState,
  action: Action,
): LastTransactionsState {
  const { type, payload } = action

  switch (type) {
    case 'INCOME':
      return { ...state, income: payload }
    case 'OUTCOME':
      return { ...state, outcome: payload }
    case 'TOTAL':
      return { ...state, total: payload }
    default:
      return state
  }
}
