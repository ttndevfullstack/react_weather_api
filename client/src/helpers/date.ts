export const now = (date: Date = new Date()) => {
  const addDays = (days: number): string => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate.toISOString().split('T')[0];
  };

  return {
    addDays,
    current: (): string => date.toISOString().split('T')[0],
  };
};

export const currentTime = (date: Date = new Date()): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes}`;
};

export const getDay = (date: Date = new Date()): string => {
  return date.toString().substring(0, 3);
};
