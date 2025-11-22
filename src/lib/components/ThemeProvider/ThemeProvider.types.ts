export type ThemeVars = Record<string, string | number>;

export interface ITheme {
  '--panel-base': string;
  '--panel-primary': string;
  '--panel-success': string;
  '--panel-danger': string;
  '--panel-secondary': string;

  '--line-base': string;
  '--line-control-100': string;
  '--line-base-emp': string;
  '--line-primary': string;
  '--line-primary-emp': string;
  '--line-success': string;
  '--line-danger': string;
  '--line-secondary': string;
  

  '--bg-base': string;

  '--bg-base-100': string;
  '--bg-base-200': string;
  '--bg-base-300': string;
  '--bg-base-emp-100': string;
  '--bg-base-emp-200': string;
  '--bg-base-emp-300': string;

  '--bg-primary-100': string;
  '--bg-primary-200': string;
  '--bg-primary-300': string;
  '--bg-primary-emp-100': string;
  '--bg-primary-emp-200': string;
  '--bg-primary-emp-300': string;

  '--bg-success-100': string;
  '--bg-success-200': string;
  '--bg-success-300': string;
  '--bg-success-emp-100': string;
  '--bg-success-emp-200': string;
  '--bg-success-emp-300': string;

  '--bg-danger-100': string;
  '--bg-danger-200': string;
  '--bg-danger-300': string;
  '--bg-danger-emp-100': string;
  '--bg-danger-emp-200': string;
  '--bg-danger-emp-300': string;

  '--bg-secondary-100': string;
  '--bg-secondary-200': string;
  '--bg-secondary-300': string;
  '--bg-secondary-emp-100': string;
  '--bg-secondary-emp-200': string;
  '--bg-secondary-emp-300': string;

  '--text-base-main': string;
  '--text-base-inv': string;
  '--text-base-muted': string;
  '--text-base-inv-muted': string;
  '--text-base-placeholder': string;
  '--text-base-link': string;
  '--text-secondary-main': string;
  '--text-primary-main': string;
  '--text-success-main': string;
  '--text-danger-main': string;

  '--icon-base-main': string;
  '--icon-base-inv': string;
  '--icon-base-muted': string;
  '--icon-base-inv-muted': string;
  '--icon-base-placeholder': string;
  '--icon-base-link': string;
  '--icon-secondary-main': string;
  '--icon-primary-main': string;
  '--icon-success-main': string;
  '--icon-danger-main': string;

  '--border-radius-button-sm': string;
  '--border-radius-button': string;
  '--border-radius-panel': string;
  '--border-radius-window': string;

  '--stroke-base': string;
  '--stroke-button': string;

  '--spacing-xs-1': string;
  '--spacing-xs-1-5': string;
  '--spacing-sm-2': string;
  '--spacing-md-3': string;
  '--spacing-lg-5': string;
  '--spacing-xl-10': string;

  '--zindex-dropdown': string;
  '--zindex-sticky': string;
  '--zindex-fixed': string;
  '--zindex-sheet': string;
  '--zindex-offcanvas-backdrop': string;
  '--zindex-offcanvas': string;
  '--zindex-modal-backdrop': string;
  '--zindex-modal': string;
  '--zindex-popover': string;
  '--zindex-tooltip': string;
  '--zindex-toast': string;

  '--font-size-sm': string;
  '--line-height-sm': string;
  '--font-size-md': string;
  '--line-height-md': string;
  '--font-size-lg': string;
  '--line-height-lg': string;
};
