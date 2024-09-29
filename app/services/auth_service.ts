import User from '../models/user.js'

export class AuthService {
  public async createUserIfNotExists(user: User): Promise<void> {
    // Updated return type
    const isUserExists = await User.findBy('email', user.email)
    if (!isUserExists) {
      await User.create(user)
    }
  }
}
