
const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";

export interface ApiResponse<T = Record<string, unknown>> {
  status: string;
  message: string;
  data: T;
  status_code: number;
}

export type EmptyData = Record<string, unknown>;
async function postRequest<T>(
  endpoint: string,
  body: Record<string, unknown>,
  headers?: Record<string, string>
): Promise<ApiResponse<T>> {
  const url = `${BASE_URL}${endpoint}`;

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
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
}

async function getRequest<T>(
  endpoint: string,
  params?: Record<string, string>
): Promise<ApiResponse<T>> {
  const url = new URL(`${BASE_URL}${endpoint}`); 

  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
  }

  const response = await fetch(url.toString(), {
    method: "GET",
  });

  if (!response.ok) {
    try {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occurred");
    } catch (e) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  return response.json() as Promise<ApiResponse<T>>;
}

// ---------- AUTH ENDPOINTS ------------

// ✔ Signup
export interface SignupData {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const signup = (data: {
  name: string;
  email: string;
  password: string;
}): Promise<ApiResponse<SignupData>> => {
  return postRequest<SignupData>("/auth/signup", data); 
};

// ✔ Login
export interface LoginData {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const login = (data: {
  email: string;
  password: string;
}): Promise<ApiResponse<LoginData>> => {
  return postRequest<LoginData>("/auth/login", data);
};

// Forgot password
export const forgotPassword = (data: { email: string }) => {
  return postRequest<EmptyData>("/auth/forgot-password", data);
};

// Reset password
export const resetPassword = (data: {
  email: string;
  token: string;
  newPassword: string;
}) => {
  return postRequest<EmptyData>("/auth/reset-password", data);
};

// Logout
export const logout = (accessToken: string) => {
  return postRequest<EmptyData>(
    "/auth/logout",
    {},
    {
      Authorization: `Bearer ${accessToken}`,
    }
  );
};
