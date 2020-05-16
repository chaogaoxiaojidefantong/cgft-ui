const defaultTheme = require('./default-theme.js');
const darkThemeSingle = {
  "theme": "dark",
  "blue-1": "mix(color(~`colorPalette('@{blue-base}', 8) `), @component-background, 15%)",
  "blue-2": "mix(color(~`colorPalette('@{blue-base}', 7) `), @component-background, 25%)",
  "blue-3": "mix(@blue-base, @component-background, 30%)",
  "blue-4": "mix(@blue-base, @component-background, 45%)",
  "blue-5": "mix(@blue-base, @component-background, 65%)",
  "blue-6": "mix(@blue-base, @component-background, 85%)",
  "blue-7": "mix(color(~`colorPalette('@{blue-base}', 5) `), @component-background, 90%)",
  "blue-8": "mix(color(~`colorPalette('@{blue-base}', 4) `), @component-background, 95%)",
  "blue-9": "mix(color(~`colorPalette('@{blue-base}', 3) `), @component-background, 97%)",
  "blue-10": "mix(color(~`colorPalette('@{blue-base}', 2) `), @component-background, 98%)",
  "purple-1": "mix(color(~`colorPalette('@{purple-base}', 8) `), @component-background, 15%)",
  "purple-2": "mix(color(~`colorPalette('@{purple-base}', 7) `), @component-background, 25%)",
  "purple-3": "mix(@purple-base, @component-background, 30%)",
  "purple-4": "mix(@purple-base, @component-background, 45%)",
  "purple-5": "mix(@purple-base, @component-background, 65%)",
  "purple-6": "mix(@purple-base, @component-background, 85%)",
  "purple-7": "mix(color(~`colorPalette('@{purple-base}', 5) `), @component-background, 90%)",
  "purple-8": "mix(color(~`colorPalette('@{purple-base}', 4) `), @component-background, 95%)",
  "purple-9": "mix(color(~`colorPalette('@{purple-base}', 3) `), @component-background, 97%)",
  "purple-10": "mix(color(~`colorPalette('@{purple-base}', 2) `), @component-background, 98%)",
  "cyan-1": "mix(color(~`colorPalette('@{cyan-base}', 8) `), @component-background, 15%)",
  "cyan-2": "mix(color(~`colorPalette('@{cyan-base}', 7) `), @component-background, 25%)",
  "cyan-3": "mix(@cyan-base, @component-background, 30%)",
  "cyan-4": "mix(@cyan-base, @component-background, 45%)",
  "cyan-5": "mix(@cyan-base, @component-background, 65%)",
  "cyan-6": "mix(@cyan-base, @component-background, 85%)",
  "cyan-7": "mix(color(~`colorPalette('@{cyan-base}', 5) `), @component-background, 90%)",
  "cyan-8": "mix(color(~`colorPalette('@{cyan-base}', 4) `), @component-background, 95%)",
  "cyan-9": "mix(color(~`colorPalette('@{cyan-base}', 3) `), @component-background, 97%)",
  "cyan-10": "mix(color(~`colorPalette('@{cyan-base}', 2) `), @component-background, 98%)",
  "green-1": "mix(color(~`colorPalette('@{green-base}', 8) `), @component-background, 15%)",
  "green-2": "mix(color(~`colorPalette('@{green-base}', 7) `), @component-background, 25%)",
  "green-3": "mix(@green-base, @component-background, 30%)",
  "green-4": "mix(@green-base, @component-background, 45%)",
  "green-5": "mix(@green-base, @component-background, 65%)",
  "green-6": "mix(@green-base, @component-background, 85%)",
  "green-7": "mix(color(~`colorPalette('@{green-base}', 5) `), @component-background, 90%)",
  "green-8": "mix(color(~`colorPalette('@{green-base}', 4) `), @component-background, 95%)",
  "green-9": "mix(color(~`colorPalette('@{green-base}', 3) `), @component-background, 97%)",
  "green-10": "mix(color(~`colorPalette('@{green-base}', 2) `), @component-background, 98%)",
  "magenta-1": "mix(color(~`colorPalette('@{magenta-base}', 8) `), @component-background, 15%)",
  "magenta-2": "mix(color(~`colorPalette('@{magenta-base}', 7) `), @component-background, 25%)",
  "magenta-3": "mix(@magenta-base, @component-background, 30%)",
  "magenta-4": "mix(@magenta-base, @component-background, 45%)",
  "magenta-5": "mix(@magenta-base, @component-background, 65%)",
  "magenta-6": "mix(@magenta-base, @component-background, 85%)",
  "magenta-7": "mix(color(~`colorPalette('@{magenta-base}', 5) `), @component-background, 90%)",
  "magenta-8": "mix(color(~`colorPalette('@{magenta-base}', 4) `), @component-background, 95%)",
  "magenta-9": "mix(color(~`colorPalette('@{magenta-base}', 3) `), @component-background, 97%)",
  "magenta-10": "mix(color(~`colorPalette('@{magenta-base}', 2) `), @component-background, 98%)",
  "pink-1": "mix(color(~`colorPalette('@{pink-base}', 8) `), @component-background, 15%)",
  "pink-2": "mix(color(~`colorPalette('@{pink-base}', 7) `), @component-background, 25%)",
  "pink-3": "mix(@pink-base, @component-background, 30%)",
  "pink-4": "mix(@pink-base, @component-background, 45%)",
  "pink-5": "mix(@pink-base, @component-background, 65%)",
  "pink-6": "mix(@pink-base, @component-background, 85%)",
  "pink-7": "mix(color(~`colorPalette('@{pink-base}', 5) `), @component-background, 90%)",
  "pink-8": "mix(color(~`colorPalette('@{pink-base}', 4) `), @component-background, 95%)",
  "pink-9": "mix(color(~`colorPalette('@{pink-base}', 3) `), @component-background, 97%)",
  "pink-10": "mix(color(~`colorPalette('@{pink-base}', 2) `), @component-background, 98%)",
  "red-1": "mix(color(~`colorPalette('@{red-base}', 8) `), @component-background, 15%)",
  "red-2": "mix(color(~`colorPalette('@{red-base}', 7) `), @component-background, 25%)",
  "red-3": "mix(@red-base, @component-background, 30%)",
  "red-4": "mix(@red-base, @component-background, 45%)",
  "red-5": "mix(@red-base, @component-background, 65%)",
  "red-6": "mix(@red-base, @component-background, 85%)",
  "red-7": "mix(color(~`colorPalette('@{red-base}', 5) `), @component-background, 90%)",
  "red-8": "mix(color(~`colorPalette('@{red-base}', 4) `), @component-background, 95%)",
  "red-9": "mix(color(~`colorPalette('@{red-base}', 3) `), @component-background, 97%)",
  "red-10": "mix(color(~`colorPalette('@{red-base}', 2) `), @component-background, 98%)",
  "orange-1": "mix(color(~`colorPalette('@{orange-base}', 8) `), @component-background, 15%)",
  "orange-2": "mix(color(~`colorPalette('@{orange-base}', 7) `), @component-background, 25%)",
  "orange-3": "mix(@orange-base, @component-background, 30%)",
  "orange-4": "mix(@orange-base, @component-background, 45%)",
  "orange-5": "mix(@orange-base, @component-background, 65%)",
  "orange-6": "mix(@orange-base, @component-background, 85%)",
  "orange-7": "mix(color(~`colorPalette('@{orange-base}', 5) `), @component-background, 90%)",
  "orange-8": "mix(color(~`colorPalette('@{orange-base}', 4) `), @component-background, 95%)",
  "orange-9": "mix(color(~`colorPalette('@{orange-base}', 3) `), @component-background, 97%)",
  "orange-10": "mix(color(~`colorPalette('@{orange-base}', 2) `), @component-background, 98%)",
  "yellow-1": "mix(color(~`colorPalette('@{yellow-base}', 8) `), @component-background, 15%)",
  "yellow-2": "mix(color(~`colorPalette('@{yellow-base}', 7) `), @component-background, 25%)",
  "yellow-3": "mix(@yellow-base, @component-background, 30%)",
  "yellow-4": "mix(@yellow-base, @component-background, 45%)",
  "yellow-5": "mix(@yellow-base, @component-background, 65%)",
  "yellow-6": "mix(@yellow-base, @component-background, 85%)",
  "yellow-7": "mix(color(~`colorPalette('@{yellow-base}', 5) `), @component-background, 90%)",
  "yellow-8": "mix(color(~`colorPalette('@{yellow-base}', 4) `), @component-background, 95%)",
  "yellow-9": "mix(color(~`colorPalette('@{yellow-base}', 3) `), @component-background, 97%)",
  "yellow-10": "mix(color(~`colorPalette('@{yellow-base}', 2) `), @component-background, 98%)",
  "volcano-1": "mix(color(~`colorPalette('@{volcano-base}', 8) `), @component-background, 15%)",
  "volcano-2": "mix(color(~`colorPalette('@{volcano-base}', 7) `), @component-background, 25%)",
  "volcano-3": "mix(@volcano-base, @component-background, 30%)",
  "volcano-4": "mix(@volcano-base, @component-background, 45%)",
  "volcano-5": "mix(@volcano-base, @component-background, 65%)",
  "volcano-6": "mix(@volcano-base, @component-background, 85%)",
  "volcano-7": "mix(color(~`colorPalette('@{volcano-base}', 5) `), @component-background, 90%)",
  "volcano-8": "mix(color(~`colorPalette('@{volcano-base}', 4) `), @component-background, 95%)",
  "volcano-9": "mix(color(~`colorPalette('@{volcano-base}', 3) `), @component-background, 97%)",
  "volcano-10": "mix(color(~`colorPalette('@{volcano-base}', 2) `), @component-background, 98%)",
  "geekblue-1": "mix(color(~`colorPalette('@{geekblue-base}', 8) `), @component-background, 15%)",
  "geekblue-2": "mix(color(~`colorPalette('@{geekblue-base}', 7) `), @component-background, 25%)",
  "geekblue-3": "mix(@geekblue-base, @component-background, 30%)",
  "geekblue-4": "mix(@geekblue-base, @component-background, 45%)",
  "geekblue-5": "mix(@geekblue-base, @component-background, 65%)",
  "geekblue-6": "mix(@geekblue-base, @component-background, 85%)",
  "geekblue-7": "mix(color(~`colorPalette('@{geekblue-base}', 5) `), @component-background, 90%)",
  "geekblue-8": "mix(color(~`colorPalette('@{geekblue-base}', 4) `), @component-background, 95%)",
  "geekblue-9": "mix(color(~`colorPalette('@{geekblue-base}', 3) `), @component-background, 97%)",
  "geekblue-10": "mix(color(~`colorPalette('@{geekblue-base}', 2) `), @component-background, 98%)",
  "lime-1": "mix(color(~`colorPalette('@{lime-base}', 8) `), @component-background, 15%)",
  "lime-2": "mix(color(~`colorPalette('@{lime-base}', 7) `), @component-background, 25%)",
  "lime-3": "mix(@lime-base, @component-background, 30%)",
  "lime-4": "mix(@lime-base, @component-background, 45%)",
  "lime-5": "mix(@lime-base, @component-background, 65%)",
  "lime-6": "mix(@lime-base, @component-background, 85%)",
  "lime-7": "mix(color(~`colorPalette('@{lime-base}', 5) `), @component-background, 90%)",
  "lime-8": "mix(color(~`colorPalette('@{lime-base}', 4) `), @component-background, 95%)",
  "lime-9": "mix(color(~`colorPalette('@{lime-base}', 3) `), @component-background, 97%)",
  "lime-10": "mix(color(~`colorPalette('@{lime-base}', 2) `), @component-background, 98%)",
  "gold-1": "mix(color(~`colorPalette('@{gold-base}', 8) `), @component-background, 15%)",
  "gold-2": "mix(color(~`colorPalette('@{gold-base}', 7) `), @component-background, 25%)",
  "gold-3": "mix(@gold-base, @component-background, 30%)",
  "gold-4": "mix(@gold-base, @component-background, 45%)",
  "gold-5": "mix(@gold-base, @component-background, 65%)",
  "gold-6": "mix(@gold-base, @component-background, 85%)",
  "gold-7": "mix(color(~`colorPalette('@{gold-base}', 5) `), @component-background, 90%)",
  "gold-8": "mix(color(~`colorPalette('@{gold-base}', 4) `), @component-background, 95%)",
  "gold-9": "mix(color(~`colorPalette('@{gold-base}', 3) `), @component-background, 97%)",
  "gold-10": "mix(color(~`colorPalette('@{gold-base}', 2) `), @component-background, 98%)",
  "primary-1": "mix(color(~`colorPalette('@{primary-color}', 8) `), @component-background, 15%)",
  "primary-2": "mix(color(~`colorPalette('@{primary-color}', 7) `), @component-background, 25%)",
  "primary-3": "mix(@primary-color, @component-background, 30%)",
  "primary-4": "mix(@primary-color, @component-background, 45%)",
  "primary-5": "mix(@primary-color, @component-background, 65%)",
  "primary-6": "@primary-color",
  "primary-7": "mix(color(~`colorPalette('@{primary-color}', 5) `), @component-background, 90%)",
  "primary-8": "mix(color(~`colorPalette('@{primary-color}', 4) `), @component-background, 95%)",
  "primary-9": "mix(color(~`colorPalette('@{primary-color}', 3) `), @component-background, 97%)",
  "primary-10": "mix(color(~`colorPalette('@{primary-color}', 2) `), @component-background, 98%)",
  "popover-background": "#1f1f1f",
  "popover-customize-border-color": "#3a3a3a",
  "body-background": "@black",
  "component-background": "#141414",
  "text-color": "fade(@white, 65%)",
  "text-color-secondary": "fade(@white, 45%)",
  "text-color-inverse": "@white",
  "icon-color-hover": "fade(@white, 75%)",
  "heading-color": "fade(@white, 85%)",
  "item-active-bg": "@primary-1",
  "item-hover-bg": "fade(@white, 8%)",
  "border-color-base": "#434343",
  "border-color-split": "#303030",
  "background-color-light": "fade(@white, 4%)",
  "background-color-base": "fade(@white, 8%)",
  "disabled-color": "fade(@white, 30%)",
  "disabled-bg": "@background-color-base",
  "disabled-color-dark": "fade(@white, 30%)",
  "tree-bg": "transparent",
  "list-customize-card-bg": "transparent",
  "shadow-color": "rgba(0, 0, 0, 0.45)",
  "shadow-color-inverse": "@component-background",
  "box-shadow-base": "@shadow-2",
  "shadow-1-up": "0 -6px 16px -8px rgba(0, 0, 0, 0.32), 0 -9px 28px 0 rgba(0, 0, 0, 0.2),\n  0 -12px 48px 16px rgba(0, 0, 0, 0.12)",
  "shadow-1-down": "0 6px 16px -8px rgba(0, 0, 0, 0.32), 0 9px 28px 0 rgba(0, 0, 0, 0.2),\n  0 12px 48px 16px rgba(0, 0, 0, 0.12)",
  "shadow-1-right": "6px 0 16px -8px rgba(0, 0, 0, 0.32), 9px 0 28px 0 rgba(0, 0, 0, 0.2),\n  12px 0 48px 16px rgba(0, 0, 0, 0.12)",
  "shadow-2": "0 3px 6px -4px rgba(0, 0, 0, 0.48), 0 6px 16px 0 rgba(0, 0, 0, 0.32),\n  0 9px 28px 8px rgba(0, 0, 0, 0.2)",
  "btn-shadow": "0 2px 0 rgba(0, 0, 0, 0.015)",
  "btn-primary-shadow": "0 2px 0 rgba(0, 0, 0, 0.045)",
  "btn-text-shadow": "0 -1px 0 rgba(0, 0, 0, 0.12)",
  "btn-default-bg": "transparent",
  "btn-default-ghost-color": "@text-color",
  "btn-default-ghost-border": "fade(@white, 25%)",
  "btn-link-ghost-color": "@text-color",
  "checkbox-check-bg": "transparent",
  "descriptions-bg": "@background-color-light",
  "modal-header-bg": "@popover-background",
  "modal-header-border-color-split": "@border-color-split",
  "modal-content-bg": "@popover-background",
  "modal-footer-border-color-split": "@border-color-split",
  "radtio-solid-checked-color": "@white",
  "radio-solid-checked-color": "@radtio-solid-checked-color",
  "radio-dot-disabled-color": "fade(@white, 20%)",
  "radio-disabled-button-checked-bg": "fade(@white, 20%)",
  "radio-disabled-button-checked-color": "@black",
  "layout-body-background": "@body-background",
  "layout-header-background": "@popover-background",
  "layout-trigger-background": "#262626",
  "input-bg": "transparent",
  "input-placeholder-color": "fade(@white, 30%)",
  "input-icon-color": "fade(@white, 30%)",
  "input-number-handler-bg": "transparent",
  "input-number-handler-active-bg": "@item-hover-bg",
  "input-icon-hover-color": "fade(@white, 85%)",
  "select-background": "transparent",
  "select-dropdown-bg": "@popover-background",
  "select-clear-background": "@component-background",
  "select-selection-item-bg": "fade(@white, 8)",
  "select-selection-item-border-color": "@border-color-split",
  "cascader-bg": "transparent",
  "cascader-menu-bg": "@popover-background",
  "cascader-menu-border-color-split": "@border-color-split",
  "tooltip-bg": "#434343",
  "menu-dark-submenu-bg": "@component-background",
  "menu-dark-bg": "@popover-background",
  "menu-popup-bg": "@popover-background",
  "message-notice-content-bg": "@popover-background",
  "notification-bg": "@popover-background",
  "link-hover-color": "@primary-5",
  "link-active-color": "@primary-7",
  "table-header-bg": "#1d1d1d",
  "table-body-sort-bg": "fade(@white, 1%)",
  "table-row-hover-bg": "#262626",
  "table-header-sort-bg": "#262626",
  "table-header-filter-active-bg": "#434343",
  "table-header-sort-active-bg": "#303030",
  "table-filter-btns-bg": "@popover-background",
  "table-expanded-row-bg": "@table-header-bg",
  "table-filter-dropdown-bg": "@popover-background",
  "table-expand-icon-bg": "transparent",
  "picker-basic-cell-hover-with-range-color": "darken(@primary-color, 35%)",
  "picker-basic-cell-disabled-bg": "#303030",
  "picker-border-color": "@border-color-split",
  "picker-bg": "transparent",
  "picker-date-hover-range-border-color": "darken(@primary-color, 20%)",
  "dropdown-menu-bg": "@popover-background",
  "dropdown-menu-submenu-disabled-bg": "transparent",
  "steps-nav-arrow-color": "fade(@white, 20%)",
  "steps-background": "transparent",
  "avatar-bg": "fade(@white, 30%)",
  "progress-steps-item-bg": "fade(@white, 8%)",
  "calendar-bg": "@popover-background",
  "calendar-input-bg": "@calendar-bg",
  "calendar-border-color": "transparent",
  "calendar-full-bg": "@component-background",
  "badge-text-color": "@white",
  "popover-bg": "@popover-background",
  "drawer-bg": "@popover-background",
  "card-actions-background": "@background-color-light",
  "card-skeleton-bg": "#303030",
  "card-shadow": "0 1px 2px -2px rgba(0, 0, 0, 0.64), 0 3px 6px 0 rgba(0, 0, 0, 0.48),\n  0 5px 12px 4px rgba(0, 0, 0, 0.36)",
  "transfer-item-hover-bg": "#262626",
  "comment-bg": "transparent",
  "comment-author-time-color": "fade(@white, 30%)",
  "comment-action-hover-color": "fade(@white, 65%)",
  "rate-star-bg": "fade(@white, 12%)",
  "switch-bg": "@white",
  "pagination-item-bg": "transparent",
  "pagination-item-bg-active": "transparent",
  "pagination-item-link-bg": "transparent",
  "pagination-item-disabled-bg-active": "fade(@white, 25%)",
  "pagination-item-disabled-color-active": "@black",
  "pagination-item-input-bg": "@pagination-item-bg",
  "page-header-back-color": "@icon-color",
  "page-header-ghost-bg": "transparent",
  "slider-rail-background-color": "#262626",
  "slider-rail-background-color-hover": "@border-color-base",
  "slider-dot-border-color": "@border-color-split",
  "slider-dot-border-color-active": "@primary-4",
  "skeleton-color": "#303030",
  "skeleton-to-color": "fade(@white, 16%)",
  "alert-success-border-color": "@green-3",
  "alert-success-bg-color": "@green-1",
  "alert-success-icon-color": "@success-color",
  "alert-info-border-color": "@primary-3",
  "alert-info-bg-color": "@primary-1",
  "alert-info-icon-color": "@info-color",
  "alert-warning-border-color": "@gold-3",
  "alert-warning-bg-color": "@gold-1",
  "alert-warning-icon-color": "@warning-color",
  "alert-error-border-color": "@red-3",
  "alert-error-bg-color": "@red-1",
  "alert-error-icon-color": "@error-color",
  "timeline-color": "@border-color-split",
  "timeline-dot-color": "@primary-color",
  "mentions-dropdown-bg": "@popover-background"
};
const compactThemeSingle = {
  "line-height-base": "1.66667",
  "mode": "compact",
  "font-size-base": "12px",
  "font-size-lg": "@font-size-base + 2px",
  "default-padding-lg": "24px",
  "default-padding-md": "16px",
  "default-padding-sm": "12px",
  "default-padding-xs": "8px",
  "default-padding-xss": "4px",
  "padding-lg": "16px",
  "padding-md": "8px",
  "padding-sm": "8px",
  "padding-xs": "4px",
  "padding-xss": "0px",
  "control-padding-horizontal": "@padding-sm",
  "control-padding-horizontal-sm": "@default-padding-xs",
  "margin-lg": "16px",
  "margin-md": "8px",
  "margin-sm": "8px",
  "margin-xs": "4px",
  "margin-xss": "0px",
  "height-base": "28px",
  "height-lg": "32px",
  "height-sm": "22px",
  "btn-padding-horizontal-base": "@default-padding-sm - 1px",
  "btn-padding-horizontal-lg": "@btn-padding-horizontal-base",
  "btn-padding-horizontal-sm": "@default-padding-xs - 1px",
  "btn-square-only-icon-size": "14px",
  "btn-square-only-icon-size-sm": "14px",
  "btn-square-only-icon-size-lg": "16px",
  "breadcrumb-font-size": "@font-size-base",
  "breadcrumb-icon-font-size": "@font-size-base",
  "dropdown-line-height": "18px",
  "menu-item-padding": "0 12px",
  "menu-horizontal-line-height": "38px",
  "menu-inline-toplevel-item-height": "32px",
  "menu-item-height": "32px",
  "menu-item-vertical-margin": "0px",
  "menu-item-boundary-margin": "0px",
  "menu-item-icon-margin-right": "8px",
  "checkbox-size": "14px",
  "checkbox-group-item-margin-right": "6px",
  "picker-panel-cell-height": "22px",
  "picker-panel-cell-width": "32px",
  "picker-text-height": "32px",
  "picker-time-panel-cell-height": "24px",
  "picker-panel-without-time-cell-height": "48px",
  "form-item-margin-bottom": "16px",
  "form-vertical-label-padding": "0 0 4px",
  "rate-star-size": "16px",
  "radio-size": "14px",
  "radio-top": "-2px",
  "radio-wrapper-margin-right": "6px",
  "switch-height": "20px",
  "switch-sm-height": "14px",
  "switch-min-width": "40px",
  "switch-sm-min-width": "24px",
  "switch-inner-margin-min": "4px",
  "switch-inner-margin-max": "22px",
  "slider-handle-size": "12px",
  "slider-handle-margin-top": "-4px",
  "input-padding-vertical-base": "round(\n  max(\n    round((@input-height-base - @font-size-base * @line-height-base) / 2 * 10) / 10 -\n      @border-width-base,\n    2px\n  )\n)",
  "input-padding-horizontal-lg": "11px",
  "page-header-padding": "16px",
  "page-header-padding-vertical": "8px",
  "page-header-heading-title": "16px",
  "page-header-heading-sub-title": "12px",
  "page-header-tabs-tab-font-size": "14px",
  "pagination-mini-options-size-changer-top": "1px",
  "pagination-item-size-sm": "22px",
  "cascader-dropdown-line-height": "@dropdown-line-height",
  "select-dropdown-height": "@height-base",
  "select-single-item-height-lg": "32px",
  "select-multiple-item-height": "@input-height-base - max(@input-padding-vertical-base, 4) * 2",
  "select-multiple-item-height-lg": "24px",
  "select-multiple-item-spacing-half": "3px",
  "tree-title-height": "20px",
  "transfer-item-padding-vertical": "3px",
  "transfer-list-search-icon-top": "8px",
  "transfer-header-height": "36px",
  "comment-actions-margin-bottom": "0px",
  "comment-actions-margin-top": "@margin-xs",
  "comment-content-detail-p-margin-bottom": "0px",
  "steps-icon-size": "24px",
  "steps-icon-custom-size": "20px",
  "steps-icon-custom-font-size": "20px",
  "steps-icon-custom-top": "2px",
  "steps-icon-margin": "2px 8px 2px 0",
  "steps-icon-font-size": "@font-size-base",
  "steps-dot-top": "4px",
  "steps-icon-top": "0px",
  "steps-small-icon-size": "20px",
  "steps-vertical-icon-margin": "0 12px 0 0",
  "collapse-content-padding": "@padding-md @padding-lg",
  "list-item-meta-description-font-size": "@font-size-sm",
  "list-item-padding-sm": "4px 12px",
  "list-item-padding-lg": "12px 16px",
  "drawer-header-padding": "11px @padding-lg",
  "drawer-footer-padding-vertical": "@padding-sm",
  "drawer-header-close-size": "44px",
  "modal-header-padding": "11px @padding-lg",
  "modal-footer-padding-vertical": "@padding-sm",
  "modal-header-close-size": "44px",
  "modal-confirm-body-padding": "24px 24px 16px",
  "message-notice-content-padding": "8px 16px",
  "popover-min-height": "28px",
  "popover-padding-horizontal": "@default-padding-sm",
  "card-padding-base": "12px",
  "card-head-height": "36px",
  "card-head-font-size": "@card-head-font-size-sm",
  "card-head-padding": "8.5px",
  "card-padding-base-sm": "@card-padding-base",
  "card-head-height-sm": "30px",
  "card-head-padding-sm": "6px",
  "card-actions-li-margin": "4px 0",
  "card-head-tabs-margin-bottom": "-9px",
  "table-padding-vertical": "12px",
  "table-padding-horizontal": "8px",
  "table-padding-vertical-md": "8px",
  "table-padding-horizontal-md": "8px",
  "table-padding-vertical-sm": "4px",
  "table-padding-horizontal-sm": "4px",
  "table-selection-column-width": "54px",
  "table-selection-extra-right": "-4px",
  "statistic-content-font-size": "20px",
  "alert-with-description-no-icon-padding-vertical": "7px",
  "alert-with-description-padding-vertical": "11px",
  "alert-with-description-padding": "@alert-with-description-padding-vertical 15px\n  @alert-with-description-padding-vertical 48px",
  "alert-icon-top": "7px + @font-size-base * @line-height-base / 2 - @font-size-base / 2",
  "alert-with-description-icon-size": "20px",
  "alert-with-description-icon-top": "@alert-with-description-padding-vertical",
  "skeleton-paragraph-margin-top": "20px",
  "skeleton-paragraph-li-margin-top": "12px",
  "skeleton-paragraph-li-height": "14px",
  "skeleton-title-height": "14px",
  "skeleton-title-paragraph-margin-top": "20px",
  "descriptions-title-margin-bottom": "8px",
  "descriptions-default-padding": "12px @padding-lg",
  "descriptions-item-padding-bottom": "@padding-xs",
  "avatar-size-base": "28px",
  "avatar-size-lg": "32px",
  "avatar-size-sm": "22px",
  "avatar-font-size-base": "16px",
  "avatar-font-size-lg": "20px",
  "avatar-font-size-sm": "12px",
  "badge-height": "18px",
  "tag-line-height": "18px",
  "notification-padding-vertical": "12px",
  "notification-padding-horizontal": "16px",
  "result-title-font-size": "20px",
  "result-icon-font-size": "64px",
  "result-extra-margin": "24px 0 0 0",
  "anchor-link-padding": "4px 0 4px 16px",
  "tabs-card-horizontal-padding": "4px @padding-md",
  "progress-circle-text-font-size": "0.833333em"
};

function getThemeVariables(options = {}) {
  let themeVar = {
    'hack': `true;@import "${require.resolve('antd/lib/style/color/colorPalette.less')}";`,
    ...defaultTheme
  };
  if(options.dark) {
    themeVar = {
      ...themeVar,
      ...darkThemeSingle
    }
  }
  if(options.compact){
    themeVar = {
      ...themeVar,
      ...compactThemeSingle
    }
  }
  return themeVar;
}

module.exports = {
  darkThemeSingle,
  compactThemeSingle,
  getThemeVariables
}