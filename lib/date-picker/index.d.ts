/// <reference types="react" />
import { Moment } from 'moment';
import { PickerProps, PickerDateProps, RangePickerProps as BaseRangePickerProps } from './generatePicker';
export declare type DatePickerProps = PickerProps<Moment>;
export declare type MonthPickerProps = Omit<PickerDateProps<Moment>, 'picker'>;
export declare type WeekPickerProps = Omit<PickerDateProps<Moment>, 'picker'>;
export declare type RangePickerProps = BaseRangePickerProps<Moment>;
declare const DatePicker: import("react").ComponentClass<PickerProps<Moment>, any> & {
    WeekPicker: import("react").ComponentClass<Pick<Pick<import("rc-picker/lib/Picker").PickerDateProps<Moment>, "style" | "direction" | "prefixCls" | "className" | "disabled" | "open" | "aria-label" | "autoComplete" | "autoFocus" | "name" | "placeholder" | "value" | "defaultValue" | "id" | "tabIndex" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onBlur" | "onChange" | "onClick" | "onContextMenu" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onSelect" | "picker" | "mode" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "dropdownClassName" | "dropdownAlign" | "popupStyle" | "transitionName" | "allowClear" | "defaultOpen" | "inputReadOnly" | "format" | "suffixIcon" | "clearIcon" | "getPopupContainer" | "onOpenChange" | "pickerRef" | "showToday" | "showTime" | "disabledTime"> & {
        locale?: import("./generatePicker").PickerLocale | undefined;
        size?: import("../button").ButtonSize;
        bordered?: boolean | undefined;
    }, "size" | "style" | "direction" | "prefixCls" | "className" | "disabled" | "open" | "aria-label" | "autoComplete" | "autoFocus" | "name" | "placeholder" | "value" | "defaultValue" | "id" | "tabIndex" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onBlur" | "onChange" | "onClick" | "onContextMenu" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onSelect" | "locale" | "mode" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "dropdownClassName" | "dropdownAlign" | "popupStyle" | "transitionName" | "allowClear" | "defaultOpen" | "inputReadOnly" | "format" | "suffixIcon" | "clearIcon" | "getPopupContainer" | "onOpenChange" | "pickerRef" | "showToday" | "showTime" | "disabledTime" | "bordered">, any>;
    MonthPicker: import("react").ComponentClass<Pick<Pick<import("rc-picker/lib/Picker").PickerDateProps<Moment>, "style" | "direction" | "prefixCls" | "className" | "disabled" | "open" | "aria-label" | "autoComplete" | "autoFocus" | "name" | "placeholder" | "value" | "defaultValue" | "id" | "tabIndex" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onBlur" | "onChange" | "onClick" | "onContextMenu" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onSelect" | "picker" | "mode" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "dropdownClassName" | "dropdownAlign" | "popupStyle" | "transitionName" | "allowClear" | "defaultOpen" | "inputReadOnly" | "format" | "suffixIcon" | "clearIcon" | "getPopupContainer" | "onOpenChange" | "pickerRef" | "showToday" | "showTime" | "disabledTime"> & {
        locale?: import("./generatePicker").PickerLocale | undefined;
        size?: import("../button").ButtonSize;
        bordered?: boolean | undefined;
    }, "size" | "style" | "direction" | "prefixCls" | "className" | "disabled" | "open" | "aria-label" | "autoComplete" | "autoFocus" | "name" | "placeholder" | "value" | "defaultValue" | "id" | "tabIndex" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onBlur" | "onChange" | "onClick" | "onContextMenu" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onSelect" | "locale" | "mode" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "dropdownClassName" | "dropdownAlign" | "popupStyle" | "transitionName" | "allowClear" | "defaultOpen" | "inputReadOnly" | "format" | "suffixIcon" | "clearIcon" | "getPopupContainer" | "onOpenChange" | "pickerRef" | "showToday" | "showTime" | "disabledTime" | "bordered">, any>;
    YearPicker: import("react").ComponentClass<Pick<Pick<import("rc-picker/lib/Picker").PickerDateProps<Moment>, "style" | "direction" | "prefixCls" | "className" | "disabled" | "open" | "aria-label" | "autoComplete" | "autoFocus" | "name" | "placeholder" | "value" | "defaultValue" | "id" | "tabIndex" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onBlur" | "onChange" | "onClick" | "onContextMenu" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onSelect" | "picker" | "mode" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "dropdownClassName" | "dropdownAlign" | "popupStyle" | "transitionName" | "allowClear" | "defaultOpen" | "inputReadOnly" | "format" | "suffixIcon" | "clearIcon" | "getPopupContainer" | "onOpenChange" | "pickerRef" | "showToday" | "showTime" | "disabledTime"> & {
        locale?: import("./generatePicker").PickerLocale | undefined;
        size?: import("../button").ButtonSize;
        bordered?: boolean | undefined;
    }, "size" | "style" | "direction" | "prefixCls" | "className" | "disabled" | "open" | "aria-label" | "autoComplete" | "autoFocus" | "name" | "placeholder" | "value" | "defaultValue" | "id" | "tabIndex" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onBlur" | "onChange" | "onClick" | "onContextMenu" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onSelect" | "locale" | "mode" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "dropdownClassName" | "dropdownAlign" | "popupStyle" | "transitionName" | "allowClear" | "defaultOpen" | "inputReadOnly" | "format" | "suffixIcon" | "clearIcon" | "getPopupContainer" | "onOpenChange" | "pickerRef" | "showToday" | "showTime" | "disabledTime" | "bordered">, any>;
    RangePicker: import("react").ComponentClass<BaseRangePickerProps<Moment>, any>;
    TimePicker: import("react").ComponentClass<Pick<Pick<import("rc-picker/lib/Picker").PickerTimeProps<Moment>, "style" | "direction" | "prefixCls" | "className" | "disabled" | "open" | "aria-label" | "autoComplete" | "autoFocus" | "name" | "placeholder" | "value" | "defaultValue" | "id" | "tabIndex" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onBlur" | "onChange" | "onClick" | "onContextMenu" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onSelect" | "picker" | "mode" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "dropdownClassName" | "dropdownAlign" | "popupStyle" | "transitionName" | "allowClear" | "defaultOpen" | "inputReadOnly" | "format" | "suffixIcon" | "clearIcon" | "getPopupContainer" | "onOpenChange" | "pickerRef" | "showHour" | "showMinute" | "showSecond" | "use12Hours" | "hourStep" | "minuteStep" | "secondStep" | "hideDisabledOptions" | "disabledHours" | "disabledMinutes" | "disabledSeconds" | "defaultOpenValue"> & {
        locale?: import("./generatePicker").PickerLocale | undefined;
        size?: import("../button").ButtonSize;
        bordered?: boolean | undefined;
    }, "size" | "style" | "direction" | "prefixCls" | "className" | "disabled" | "open" | "aria-label" | "autoComplete" | "autoFocus" | "name" | "placeholder" | "value" | "defaultValue" | "id" | "tabIndex" | "role" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onBlur" | "onChange" | "onClick" | "onContextMenu" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onSelect" | "locale" | "mode" | "defaultPickerValue" | "disabledDate" | "dateRender" | "monthCellRender" | "renderExtraFooter" | "onPanelChange" | "onOk" | "dropdownClassName" | "dropdownAlign" | "popupStyle" | "transitionName" | "allowClear" | "defaultOpen" | "inputReadOnly" | "format" | "suffixIcon" | "clearIcon" | "getPopupContainer" | "onOpenChange" | "pickerRef" | "showHour" | "showMinute" | "showSecond" | "use12Hours" | "hourStep" | "minuteStep" | "secondStep" | "hideDisabledOptions" | "disabledHours" | "disabledMinutes" | "disabledSeconds" | "defaultOpenValue" | "bordered">, any>;
};
export default DatePicker;
