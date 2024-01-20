export interface ResponsiveProps<T> {
  isMobile: boolean;
  isBot: boolean;
  data: T;
}


export interface HistoryRecord {
  l1State: string,
  hash: string
  network: string
  block?: number
  from?: string
  to?: string
  value: string,
  state: string,
  time: string,
  hash_l2?: string,
  network_l2?: string
  time_l2?: string
}

export interface HistoryResponse {
  retCode: number,
  retMsg: string,
  data: HistoryRecord[],
  total: number,
  pageNum: number,
  pageSize: number
}

export enum HistoryTab {
  Withdraw = 'withdraw',
  Deposit='deposit'
 }