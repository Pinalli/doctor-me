import bcrypt from 'bcrypt';

// Hashes a password
export function hashPassword(password: string) {
    const SALT = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, SALT);
}
// Compares a password with a hash
export function comparePassword(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}