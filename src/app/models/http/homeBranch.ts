export interface HomeBranch {
  id: number;
  name: string;
  address: string;
  photo: string;
  features: string;
  openingHours: any[];
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
