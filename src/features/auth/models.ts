export interface AppUser {
  readonly displayName: string | null;
  readonly email: string | null;
  readonly emailVerified: boolean;
  readonly phoneNumber: string | null;
  readonly photoURL: string | null;
  readonly uid: string;
}
