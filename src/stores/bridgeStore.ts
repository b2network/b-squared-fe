'use client';

import { KernelSmartContractAccount } from '@b2network/aa-sdk';
import { proxy,subscribe } from 'valtio';

export type ResultData = {
  fromChain: string,
  toChain: string,
  toAddress: string,
  amount: string
}

export interface IBridgeStore {
  sca: KernelSmartContractAccount | null,
  showResult: boolean,
  result: ResultData,
  status: 'pendding'|'success'|'failed'|string
}

export const store = proxy< IBridgeStore>({
  showResult: false,
  sca: null,
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

export const setSCA = (s: KernelSmartContractAccount) => {
  store.sca = s;
}