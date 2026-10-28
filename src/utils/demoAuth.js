const ACCOUNT_KEY = "medqueue.demoAccount";
const SESSION_KEY = "medqueue.currentUser";
const PASSWORD_ITERATIONS = 120000;

function encodeBase64(bytes) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

async function hashPassword(password, salt) {
  if (!globalThis.crypto?.subtle) {
    throw new Error("Secure browser cryptography is unavailable. Use localhost or HTTPS.");
  }

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: PASSWORD_ITERATIONS,
      hash: "SHA-256",
    },
    key,
    256,
  );

  return new Uint8Array(bits);
}

function getAccount() {
  const serializedAccount = localStorage.getItem(ACCOUNT_KEY);
  return serializedAccount ? JSON.parse(serializedAccount) : null;
}

function saveSession(profile) {
  const user = {
    firstName: profile.firstName,
    lastName: profile.lastName,
    email: profile.email,
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return user;
}

export async function registerDemoAccount(profile, password) {
  if (getAccount()) {
    throw new Error("A demo account already exists in this browser. Sign in instead.");
  }

  const salt = crypto.getRandomValues(new Uint8Array(16));
  const passwordHash = await hashPassword(password, salt);
  const account = {
    ...profile,
    email: profile.email.trim().toLowerCase(),
    salt: encodeBase64(salt),
    passwordHash: encodeBase64(passwordHash),
  };

  localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
  return saveSession(account);
}

export async function loginDemoAccount(email, password) {
  const account = getAccount();
  if (!account) {
    throw new Error("No demo account exists in this browser. Sign up first.");
  }

  const normalizedEmail = email.trim().toLowerCase();
  if (normalizedEmail !== account.email) {
    throw new Error("Email or password is incorrect.");
  }

  const salt = Uint8Array.from(atob(account.salt), (character) =>
    character.charCodeAt(0),
  );
  const passwordHash = await hashPassword(password, salt);
  if (encodeBase64(passwordHash) !== account.passwordHash) {
    throw new Error("Email or password is incorrect.");
  }

  return saveSession(account);
}

export function getCurrentUser() {
  const serializedUser = localStorage.getItem(SESSION_KEY);
  return serializedUser ? JSON.parse(serializedUser) : null;
}
