"use server";
import { auth } from "@/lib/auth";

/**
 * Response type for authentication actions
 */
export type AuthResponse = {
  success: boolean;
  message: string;
};

/**
 * Sign in a user with email and password
 * @param email - User's email
 * @param password - User's password
 */
export const signIn = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    await auth.api.signInEmail({
      body: { email, password },
    });
    return {
      success: true,
      message: "Sign-in successful",
    };
  } catch (error) {
    const e = error as Error;
    return {
      success: false,
      message: e.message || "Unknown error occurred",
    };
  }
};

/**
 * Sign up a new user
 * @param email - User's email
 * @param password - User's password
 * @param username - User's name
 */
export const signUp = async (
  email: string,
  password: string,
  username: string
): Promise<AuthResponse> => {
  // Basic input validation
  if (!email || !password || !username) {
    return {
      success: false,
      message: "All fields are required.",
    };
  }
  try {
    await auth.api.signUpEmail({
      body: { email, password, name: username },
    });
    return {
      success: true,
      message: "Sign-up successful",
    };
  } catch (error) {
    const e = error as Error;
    return {
      success: false,
      message: e.message || "An unknown error occurred",
    };
  }
};