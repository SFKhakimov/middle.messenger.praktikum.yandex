export default function last<T>(list: T[]) {
  if (Array.isArray(list)) {
    return list[list.length - 1];
  }
}
