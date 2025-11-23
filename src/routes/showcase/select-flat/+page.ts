import type { PageLoad } from './$types';
import type { ISelectItem } from "@lib";

export const load: PageLoad = async () => {

  const selectData: ISelectItem[] = [{
    title: 'United Kingdom',
    value: 'UK'
  }, {
    title: 'France',
    value: 'FRA'
  }, {
    title: 'Germany',
    value: 'Ger'
  }, {
    title: 'Estonia',
    value: 'EST'
  }, {
    title: 'Finland',
    value: 'FIN'
  }, {
    title: 'Japan',
    value: 'JAP'
  }];

  const selectDataMin: ISelectItem[] = [{
    title: 'United Kingdom',
    value: 'UK'
  }]

  return {
    selectData,
    selectDataMin
  };

}
