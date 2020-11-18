export interface IRootStore {
  CurrentOperation: string | null;
  DisplayValue: string;
  IsNewOperationClicked: boolean;
  MemoryValue: string | null;
  PrevValue: string | null;
  ResultValue: string | null;
  SubDisplayValue: string;
}