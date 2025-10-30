import type { LayoutLoad } from './$types';
import { navigationData } from './nav-data';

export const load: LayoutLoad = async () => {
  return {
    navigationData
  }
};
