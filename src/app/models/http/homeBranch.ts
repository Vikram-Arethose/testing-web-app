export interface HomeBranch {
  id: number;
  name: string;
  address: string;
  photo: string;
  features: string;
  openingHours: {
    default?: {
      friday: DayOpeningHours;
      monday: DayOpeningHours;
      saturday: DayOpeningHours;
      sunday: DayOpeningHours;
      thursday: DayOpeningHours;
      tuesday: DayOpeningHours;
      wednesday: DayOpeningHours;
    }
  };
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

export interface DayOpeningHours {
  start: string;
  end: string;
}
