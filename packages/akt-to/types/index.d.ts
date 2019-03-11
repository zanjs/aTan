type TDate = Date | string | number;

export function toInt(date: any): number;
export function toDate(locale: any): Date;

export interface IndexInterface {
  toInt(date: any): number;
  toDate(locale: any): Date;
}

export interface Factory {
  (): IndexInterface;
}
declare let factory: Factory;

export default factory;