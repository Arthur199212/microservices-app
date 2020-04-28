const ONE_HOUR = 1000 * 60 * 60
const TREE_DAYS = ONE_HOUR * 24 * 3

// Bcrypt

export const BCRYPT_WORK_FACTOR = 12

export const BCRYPT_MAX_BYTES = 72

// Verification email

export const EMAIL_VERIFICATION_TIMEOUT = TREE_DAYS

// sha1 -> 160 bits / 8 = 20 bytes * 2 (hex) = 40 bytes
export const EMAIL_VERIFICATION_TOKEN_BYTES = 40

// sha256 -> 256 bits / 8 = 32 bytes * 2 (hex) = 64 bytes
export const EMAIL_VERIFICATION_SIGNATURE_BYTES = 64
