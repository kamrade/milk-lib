import type { Snippet } from 'svelte';

interface ISelectGroupData {
  heading: string;
  content: Snippet;
}

export const groupList = [{
  heading: 'Suggestions',
  items: [{
    title: 'Calendar'
  }, {
    title: 'Search Emoji'
  }, {
    title: 'Calculator'
  }]
}, {
  heading: 'Settings',
  items: [{
    title: 'Profile'
  }, {
    title: 'Billing'
  }, {
    title: 'Options'
  }]
}]
