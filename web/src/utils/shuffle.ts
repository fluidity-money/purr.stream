export function shuffleList<T>(list: T[]): T[] {
  for (let i = list.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}
