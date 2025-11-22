export interface ISelectItem {
  title: string;
  value: string;
}

interface ISelectGroupData {
  heading: string;
  items: ISelectItem[];
}

export const groupList: ISelectGroupData[] = [{
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
    value: 'LLN'
  }]
}]
