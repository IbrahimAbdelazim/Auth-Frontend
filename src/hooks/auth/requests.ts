import { apiClient } from "../../api";
import { type SignupRequest, type SigninRequest, type AuthResponse } from "../../types/auth";

export const signupUser = async (data: SignupRequest): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>("/auth/sign-up", data);
  return response.data;
};

export const signinUser = async (data: SigninRequest): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>("/auth/sign-in", data);
  return response.data;
};
