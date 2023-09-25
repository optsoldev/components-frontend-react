export interface UserInfo {
  id: string;
  nome: string;
  email: string;
}

export interface AuthenticationState {
  userInfo?: UserInfo | null;
  tenantId?: string;
  token?: string;
}
