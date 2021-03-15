export interface HomeBranch {
  id: number;
  name: string;
  address: string;
  photo: string;
  features: string[];
  openingHours: OpeningHours;
  lat: string;
  lng: string;
  distance: number;
  isFavourite: boolean;
}

export interface HomeBranchesRes {
  apiStatus: string;
  apiCode: string;
  data: HomeBranch[];
}
export interface OpeningHours {
  allWeek?: boolean;
  default?: {
    friday: OpeningHoursDay[];
    monday: OpeningHoursDay[];
    saturday: OpeningHoursDay[];
    sunday: OpeningHoursDay[];
    thursday: OpeningHoursDay[];
    tuesday: OpeningHoursDay[];
    wednesday: OpeningHoursDay[];
  };
}

export interface OpeningHoursDay {
  start: string;
  end: string;
}
