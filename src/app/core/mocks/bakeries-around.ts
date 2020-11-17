export const BakeriesAround: BranchNear[] = [
  {
    name: 'Dahnivska Branch',
    lat: '49.444433',
    lng: '32.059767',
    distance: 0.00013425878593145295
  },
  {
    name: 'Chehova branch',
    lat: '49.4242542',
    lng: '32.0988567',
    distance: 3.6089557970056627
  }
];

export interface BranchNear {
  name: string;
  lat: string;
  lng: string;
  distance: number;
}
