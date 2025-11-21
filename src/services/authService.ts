const BASE_URL = "https://stoqkeep-soma.up.railway.app";

export interface ApiResponse<T = Record<string, unknown>> {
  status: string;
  message: string;
  data: T;
  status_code: number;
}

// ❗ Keep only THIS version of EmptyData
export type EmptyData = {
  message: string;
};

// ---------- HELPER FUNCTIONS -----------

async function postRequest<T>(endpoint: string, body: Record<string, unknown>, headers?: Record<string, string>): Promise<ApiResponse<T>> {
  const url = `${BASE_URL}${endpoint}`; // remove extra /api/v1

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
    }

    return response.json() as Promise<ApiResponse<T>>;
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getRequest<T>(endpoint: string, params?: Record<string, string>): Promise<ApiResponse<T>> {
  const url = new URL(`${BASE_URL}${endpoint}`);

  if (params) {
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
  }

  const response = await fetch(url.toString(), { method: "GET" });

  if (!response.ok) {
    try {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occurred");
    } catch {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  return response.json() as Promise<ApiResponse<T>>;
}

// ---------- AUTH RESPONSE TYPES -----------

export type SignupData = {
  message: string;
  token: string;
  userId?: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
};

export type LoginData = {
  message: string;
  accessToken: string;
  refreshToken?: string;
  user_id: string;
  email: string;
  token?: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
};

// ---------- AUTH ENDPOINTS ------------

export const signup = (data: { name: string; email: string; password: string }) => postRequest<SignupData>("/api/v1/auth/signup", data);
// Add this to your authService.ts file:

export const resendVerification = (data: { email: string }) => postRequest<EmptyData>("/api/v1/auth/resend-verification", data);

export const login = (data: { email: string; password: string }) => postRequest<LoginData>("/api/v1/auth/login", data);

export const forgotPassword = (data: { email: string }) => postRequest<EmptyData>("/api/v1/auth/forgot-password", data);

export const resetPassword = (data: { email: string; token: string; newPassword: string }) => postRequest<EmptyData>("/api/v1/auth/reset-password", data);

export const logout = (accessToken: string) => postRequest<EmptyData>("/api/v1/auth/logout", {}, { Authorization: `Bearer ${accessToken}` });
