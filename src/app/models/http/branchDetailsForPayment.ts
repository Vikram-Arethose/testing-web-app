export interface BranchDetailsForPayment {
  branchId: number;
  minOrderValue: string;
  lastUsedPayment: string | undefined;
}
