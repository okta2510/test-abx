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