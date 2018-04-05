import { TestAuthService } from './test-auth.service';

describe('Service: Auth', () => {

  let service: TestAuthService;

  beforeEach(() => {
    service = new TestAuthService();
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('token');
  });

  it('should return true from isAuthenticated when there is a token', () => {
    localStorage.setItem('token', '1234');
    expect(service.isAuthenticated()).toBeTruthy();
  });
});
