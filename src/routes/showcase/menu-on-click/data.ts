export interface IMainMenuItem {
  link: string;
  label: string;
}

export let menuLinks: (IMainMenuItem | string)[] = [
  'Город',
  {
    link: '/bangkok',
    label: 'Бангкок'
  }, {
    link: '/pattaya',
    label: 'Паттайя'
  }, {
    link: '/Phuket',
    label: 'Пхукет'
  }, {
    link: '/hua-hin',
    label: 'Хуа Хин'
  }, {
    link: '/chiang-mai',
    label: 'Чианг Май'
  }, {
    link: '/samui',
    label: 'Самуи'
  }
]