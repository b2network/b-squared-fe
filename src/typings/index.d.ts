type Provider =
  | HttpProvider
  | IpcProvider
  | WebsocketProvider
  | AbstractProvider
  | null;

interface Window {
  ethereum: Provider;
  unisat: any;
  okxwallet: any
}
