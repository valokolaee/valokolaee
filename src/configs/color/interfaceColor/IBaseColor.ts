export interface IBaseColor {
  // Functional Colors start
  Link: string;
  Success: string;
  Warning: string;
  Error: string;
  // Functional Colors end

  // BrandColor start
  Primary: string;
  Secondary: string;
  SelectedBackgroundColor: string;
  Hover: string;
  Normal: string;
  Click: string;
  // BrandColor end

  //Neutrasl colors start
  Title: string;
  PrimaryText: string;
  SecondaryText: string;
  Disable: string;
  Border: string;
  ToolTip: string;
  HeaderTextIcon: string;
  Dividers: string;
  Background: string;
  TableHeader: string;
  //Neutrasl colors end

  edit: string;
  delete: string

  DefaulText: string;




  confirmOdometerColors: colorSet;
  drivingColors?: colorSet;
  drivingStopColors?: colorSet;


}

export interface colorSet {
  header?: TColorSet;
  body?: TColorSet;
  // fontColor?: string;

}

export type TColorSet = {
  backGround?: string;
  fontColor?: string;

}