export interface DonationData {
  price: string;
  method: string;
  project: string;
}

export interface DonationContextData {
  donate(donation: DonationData): Promise<boolean>;
  loading: boolean;
}
