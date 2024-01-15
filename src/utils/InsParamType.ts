/** 解析指令参数类型 */
export class InsParamType {
  constructor(paramType: number) {
    if (paramType == 0) this.notype = true;
    else {
      if (paramType & 0x01) {
        this.bit = true;
        this.bool = true;
      }
      if (paramType & 0x02) this.byte = true;
      if (paramType & 0x04) this.word = true;
      if (paramType & 0x08) this.dword = true;
      if (paramType & 0x10) this.int = true;
      if (paramType & 0x20) this.dint = true;
      if (paramType & 0x40) this.real = true;
      if (paramType & 0x80) this.pointer = true;
      if (paramType & 0x100) this.address = true;
      if (paramType & 0x200) this.force = true;
      if (paramType & 0x400) this.lable = true;
      if (paramType & 0x800) this.addr = true;
      if (paramType & 0x1000) this.constant = true;
      if (paramType & 0x2000) this.input = true;
      if (paramType & 0x4000) this.output = true;
      if (paramType & 0x8000) this.read = true;
      if (paramType & 0x10000) this.write = true;
      if (paramType & 0x20000) this.I = true;
      if (paramType & 0x40000) this.Q = true;
      if (paramType & 0x80000) this.M = true;
      if (paramType & 0x100000) this.SM = true;
      if (paramType & 0x200000) this.T = true;
      if (paramType & 0x400000) this.C = true;
      if (paramType & 0x800000) this.V = true;
      if (paramType & 0x1000000) this.L = true;
      if (paramType & 0x2000000) this.AC = true;
      if (paramType & 0x4000000) this.HC = true;
      if (paramType & 0x8000000) this.AI = true;
      if (paramType & 0x10000000) this.AQ = true;
      if (paramType & 0x20000000) this.RS = true;
      if (paramType & 0x40000000) this.SR = true;
      if (paramType & 0x80000000) this.BR = true;
    }
  }
  /**
   * 无类型
   */
  notype = false;
  /**
   * 支持位类型
   */
  bit = false;
  /**
   * 支持布尔类型
   */
  bool = false;
  /**
   * 支持字节类型
   */
  byte = false;
  /**
   * 支持字类型
   */
  word = false;
  /**
   * 支持双字类型
   */
  dword = false;
  /**
   * 支持整数类型
   */
  int = false;
  /**
   * 支持双精度整数类型
   */
  dint = false;
  /**
   * 支持实数类型
   */
  real = false;
  /**
   * 支持指针类型
   */
  pointer = false;
  /**
   * 支持地址引用数据类型
   */
  address = false;
  /**
   * 可强制
   */
  force = false;
  /**
   * 子程序或标号的标志
   */
  lable = false;
  /**
   * 内存地址
   */
  addr = false;
  /**
   * 常量
   */
  constant = false;
  /**
   * 用于输入
   */
  input = false;
  /**
   * 用于输出
   */
  output = false;
  /**
   * 可读
   */
  read = false;
  /**
   * 可写
   */
  write = false;
  /**
   * 支持内存中的I区
   */
  I = false;
  /**
   * 支持内存中的Q区
   */
  Q = false;
  /**
   * 支持内存中的M区
   */
  M = false;
  /**
   * 支持内存中的SM区
   */
  SM = false;
  /**
   * 支持内存中的T区
   */
  T = false;
  /**
   * 支持内存中的C区
   */
  C = false;
  /**
   * 支持内存中的V区
   */
  V = false;
  /**
   * 支持内存中的L区
   */
  L = false;
  /**
   * 支持内存中的AC区
   */
  AC = false;
  /**
   * 支持内存中的HC区
   */
  HC = false;
  /**
   * 支持内存中的AI区
   */
  AI = false;
  /**
   * 支持内存中的AQ区
   */
  AQ = false;
  /**
   * 支持内存中的RS区
   */
  RS = false;
  /**
   * 支持内存中的SR区
   */
  SR = false;
  /**
   * 支持内存中的BR区
   */
  BR = false;
}

console.log(new InsParamType(1644081153));
