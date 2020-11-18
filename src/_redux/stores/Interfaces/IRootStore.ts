export interface IRootStore {
  CurrentOperation: string | null,
  IsNewOperationClicked: boolean,
  DisplayValue: string,
  PrevValue: string | null
  ResultValue: string | null
  SubDisplayValue: string
}