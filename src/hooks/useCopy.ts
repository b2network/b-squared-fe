import { useState } from 'react';

type CopyHandlerType = (text: string) => Promise<void>;
type CopyHookReturnType = [boolean, CopyHandlerType];
type CopyHookType = (timeout?: number) => CopyHookReturnType;

export const useCopy: CopyHookType = (timeout) => {
  const [isCopy, setCopy] = useState<boolean>(false);

  const copyHandler: CopyHandlerType = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopy(true);

      setTimeout(() => {
        setCopy(false);
      }, timeout || 1000);
    } catch (e) {
      setCopy(false);
    }
  };

  return [isCopy, copyHandler];
};
