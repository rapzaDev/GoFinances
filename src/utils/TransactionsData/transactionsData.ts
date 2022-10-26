import { DataTransactionCard } from '../../components/TransactionCard/transactionCard.component'

export const data: DataTransactionCard[] = [
  {
    id: '0',
    type: 'entrada',
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: 'Development',
    date: '25/10/2022',
  },
  {
    id: '1',
    type: 'saida',
    title: 'Ração dos Gatos',
    amount: 'R$ 100,00',
    category: 'Casa',
    date: '15/10/2022',
  },
  {
    id: '2',
    type: 'saida',
    title: 'Aluguel',
    amount: 'R$ 1.200,00',
    category: 'Casa',
    date: '03/10/2022',
  },
  {
    id: '3',
    type: 'entrada',
    title: 'Salario Araras',
    amount: 'R$ 5.000,00',
    category: 'Development',
    date: '02/10/2022',
  },
  {
    id: '4',
    type: 'entrada',
    title: 'Consultoria',
    amount: 'R$ 400,00',
    category: 'Vendas',
    date: '01/10/2022',
  },
]
