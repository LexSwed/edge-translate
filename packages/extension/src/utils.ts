import { BrowserClient } from '@sentry/browser';

export const userLang =
  window.navigator.language.slice(0, 2) ||
  window.navigator.languages[0].slice(0, 2);

export const getTranslatorLink = ({
  to,
  text,
}: {
  to?: string;
  text?: string;
}) => `https://www.bing.com/translator?to=${to}&text=${text}`;

const makeRequest = <T = any>(request: AsyncRequest): Promise<T> =>
  new Promise((resolve) => chrome.runtime.sendMessage(request, resolve));

export const API = {
  getLanguages: () => makeRequest<Languages>({ request: 'getLanguages' }),
  translate: (params: TranslateQuery) =>
    makeRequest<TranslateResponse>({ request: 'translateBing', params }),
  dictionaryLookup: (params: Required<TranslateQuery>) =>
    makeRequest<DictLookup>({ request: 'dictionaryLookup', params }),
};

export const Storage = {
  getItems: <T extends Record<string, any>>(
    key: StorageKey,
    storageType: 'local' | 'sync' = 'local'
  ): Promise<T> => {
    return new Promise((resolve) => {
      chrome.storage[storageType].get(key, (caches) => resolve(caches as T));
    });
  },
  setItems: (item: object, storageType: 'local' | 'sync' = 'local') => {
    return new Promise((resolve) =>
      chrome.storage[storageType].set(item, () => resolve())
    );
  },
  getSyncItems: <T>(key: StorageKey) => Storage.getItems<T>(key, 'sync'),
  setSyncItems: (item: object) => Storage.setItems(item, 'sync'),
};

export async function deleteMemoryEntry(id: MemoryItem['id']) {
  const { memory } = await Storage.getSyncItems<{ memory: MemoryItems }>(
    'memory'
  );

  const items = memory.filter((entry) => entry.id !== id);

  await Storage.setSyncItems({ memory: items });

  return items;
}

type StorageKey = Parameters<typeof chrome.storage['local']['get']>[0];

export const Sentry = new BrowserClient({
  dsn:
    'https://dffd96a87e8f47e8a2921033d3d53e05@o383828.ingest.sentry.io/5214268',
});
