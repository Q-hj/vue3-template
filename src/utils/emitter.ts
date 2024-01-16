import mitt from 'mitt';

/** 自定义事件 */
type Events = {
  foo: string;
  bar: number;
};

export default mitt<Events>();
