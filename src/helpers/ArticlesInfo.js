import { format } from 'date-fns'

export const mapContributorsToNames = (contributors) => {
  return contributors.map(x => {
    return {
      names: x.names.full,
      url: x.canonicalURL
    }
  });
};
export const dateFormat = (date) => {
  return format(date, 'eee dd MMM yyyy') + ' at ' + format(date, 'hh:mmaaa')
};
export const printContributors = (items) => {
  console.log(items)
  if (items.length === 0) {
    return '';
  }
  if (items.length === 1) {
    return items[0].name;
  }
  if (items.length === 2) {
    return items.join(' and ');
  }
  const lastItem = items.pop();
  return `${items.join(', ')}, and ${lastItem}`;
};