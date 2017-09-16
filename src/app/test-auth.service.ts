export class TestAuthService {
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
