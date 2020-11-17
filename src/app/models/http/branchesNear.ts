export interface BranchesNearResponse {
  apiStatus: string;
  apiCode: string;
  data: BranchNear[];
}

export interface BranchNear {
  name: string;
  lat: string;
  lng: string;
  distance: number;
}
