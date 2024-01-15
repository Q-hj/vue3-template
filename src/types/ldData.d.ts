import { InsParam, Instruction } from '@/types/Instruction';

/** LD指令数据格式 */
export type InstructionData = Omit<
  Instruction,
  'IsCanUse' | 'IsIEC61131' | 'InsTreeIconIndex'
> & {
  /** 是否选中 */
  isChecked?: boolean;

  /** 参数类型 */
  Params: InsDataParam[];
};

/** 参数类型 -LD数据 */
export type InsDataParam = InsParam & {
  /** 是否为编辑状态 */
  isFocus: boolean;

  /** 参数值 */
  value: string;
};

/** 梯形图网络数据格式 */
export interface INetwork {
  /** 网络名称 */
  // title?: string;

  /** 网络注释 */
  comment?: string;

  /** 指令集数据 */
  insList: InstructionData[];
}
