export function numFormat(num: number | string | undefined) {
  if (!num) {
    return '0';
  }
  const arr = num.toString().split('.');
  arr[0] = arr[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  return arr.join('.');
}

const isDev = process.env.NODE_ENV === 'development';



// export const pxTovw = (px: number): string => {
//   const base = 375;
//   return px * 100 / base + 'vw'
// }
