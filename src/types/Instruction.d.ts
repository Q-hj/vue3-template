/** 指令集类型 */
export interface Instruction {
  /** 指令ID */
  InsId: number;
  /** 指令名 */
  InsName: string; // | null
  /** 指令类型 */
  InsType: InsTypeEnum;
  /** 指令组 */
  InsGroup: InsGroupEnum;
  /** 参数数量 */
  ParamsNumber: number;
  /** 参数列表 */
  Params: InsParam[] | null;
  /** 是否可用 */
  IsCanUse: boolean;
  /** 解释 */
  Comment: string | null;
  /** 是否是IEC61131指令 */
  IsIEC61131: boolean;
  /** 树形图中对应的图标索引 */
  InsTreeIconIndex: InsTreeIconIndexEnum;
}

/** 指令类型 */
export enum InsTypeEnum {
  IL_INS = 0, //IL指令
  LDI_CONTACT, //LD触点
  LDI_COIL, //线圈
  StdFun, //标准功能
  StdFB, //标准功能块
  SBR, //用户子程序（自定义功能）
}

/** 指令参数类型 */
export interface InsParam {
  /** 指令参数ID */
  InsParamId: number;
  /** 参数名 */
  ParamName: string | null;
  /** 参数类型 */
  ParamType: number;
  /** 指令ID */
  InsId: number;
}

/** 树形图中对应的图标索引 */
export enum InsTreeIconIndexEnum {
  BitIsIEC = 19, // -||在指令树图标中的索引地址
  BitNoIEC,
  BlockIsIEC,
  BlockNoIEC,
  CoilIsIEC, //-()
  CoilNoIEC,
}

/** 指令组 */
export enum InsGroupEnum {
  BitLogic = 0, //位逻辑
  TRANSFER, //赋值指令
  COMPARE, //比较
  ALOGIC, //模拟量逻辑操作
  SHIFT, //移位指令
  TYPETYPE, //类型转换
  MATH, //数学运算
  PROGCTRL, //程序控制
  REALTIMER, //实时时钟
  COMM, //通讯
  COUNTER, //计数器
  INT, //中断
  TIMER, //定时器
  PID,
  MOVE, //LDToIL时与普通指令一样处理，但ILToLD时需注意是否需下一行进行复合
  COMMON, //不需要特殊处理，直接转换的指令
  MODBUS,

  CANOPEN,
  NOT_BOOL, //如果NOT_BOOL 与 NOT_WORD之类的冲突的话, 用此标记处理 IL LD互转
  END,
}
