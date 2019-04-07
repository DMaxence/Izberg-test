/*
 * action types
 */

export const REGISTER_USER = 'REGISTER_USER'

/*
 * action creators
 */

export function registerUser(text) {
  return { type: REGISTER_USER, text }
}