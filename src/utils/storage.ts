const HISTORY_KEY = 'qrHistory';
const MAX_HISTORY_ITEMS = 5;

export const getHistory = (): string[] => {
  const saved = localStorage.getItem(HISTORY_KEY);
  return saved ? JSON.parse(saved) : [];
};

export const saveToHistory = (url: string): void => {
  const history = getHistory();
  const newHistory = [url, ...history.filter(item => item !== url)].slice(0, MAX_HISTORY_ITEMS);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
};