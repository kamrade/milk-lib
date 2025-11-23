import type { PageLoad } from './$types';
import type { ISelectGroupData } from "@lib";

export const load: PageLoad = async () => {

  const selectData: ISelectGroupData[] = [{
    heading: 'United Kingdom',
    items: [{
      title: 'London',
      value: 'LND'
    }, {
      title: 'Birmingham',
      value: 'BMG'
    }, {
      title: 'Liverpool',
      value: 'LVP'
    }]
  }, {
    heading: 'France',
    items: [{
      title: 'Paris',
      value: 'PRS'
    }, {
      title: 'Marcelle',
      value: 'MRC'
    }, {
      title: 'Lion',
      value: 'LIN'
    }]
  }];

  return {
    selectData
  };

}
