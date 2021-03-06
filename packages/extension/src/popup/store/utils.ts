import { useContext, createContext } from 'react';
import { Storage } from '../../utils';

const context = createContext<Store>({} as Store);

export const StoreContextProvider = context.Provider;

export const useLanguages = () => {
  return useContext(context).languages;
};

export const useText = () => {
  const { text, setText } = useContext(context);

  return [text, setText] as const;
};

export const useToLanguage = () => {
  const { to, setTo } = useContext(context);

  const updateTo = (langKey: string) => {
    Storage.setItems({ to: langKey });
    setTo(langKey);
  };

  return [to, updateTo] as const;
};

export const useFromLanguage = () => {
  const { from, setFrom } = useContext(context);

  return [from, setFrom] as const;
};

export const useTranslation = () => {
  return useContext(context).translation;
};

export const useStoreUpdater = () => {
  const { setFrom, setTo, setText } = useContext(context);

  return ({ to, from, text }: Record<string, string>) => {
    setFrom(from);
    setTo(to);
    setText(text);
  };
};

export const useError = () => useContext(context).error;
