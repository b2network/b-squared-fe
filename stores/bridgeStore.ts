'use client';

import { proxy } from 'valtio';

export type ResultData = {
  fromChain: string,
  toChain: string,
  toAddress: string,
  amount: string
}

export interface ICartStore {
  showResult: boolean,
  result: ResultData,
  status: 'pendding'|'success'|'failed'|string
}

export const store = proxy<ICartStore>({
  showResult: false,
  result: {
    fromChain: '',
    toChain: '',
    toAddress: '',
    amount: ''
  },
  status: ''
});


export const setShowResult =(showResult:boolean) => {
  store.showResult = showResult;
};

export const setResult = (r:ResultData) => {
  store.result = r
}

export const setStatus = (s:string) => {
  store.status = s;
}
