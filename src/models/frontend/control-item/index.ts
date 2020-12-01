import { Icon } from '../icon/index';
export type Value = number | string | boolean;
export interface ControlItem {
  value: Value;
  label: string;
  icon?: Icon;
}
