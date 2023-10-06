type Provider =
  | HttpProvider
  | IpcProvider
  | WebsocketProvider
  | AbstractProvider
  | null;

interface Window {
  ethereum: Provider;
  BinanceChain: Provider;
  web3: Provider;
  celo: Provider;
}
