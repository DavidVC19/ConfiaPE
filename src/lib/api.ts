export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface RequestOptions {
  method?: HttpMethod;
  path: string; // e.g. /api/auth/login
  body?: unknown;
  headers?: Record<string, string>;
  token?: string;
}

export async function request<T>({ method = 'GET', path, body, headers = {}, token }: RequestOptions): Promise<T> {
  const url = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const finalHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };
  if (token) finalHeaders['Authorization'] = `Bearer ${token}`;

  const res = await fetch(url, {
    method,
    headers: finalHeaders,
    credentials: 'include',
    body: body ? JSON.stringify(body) : undefined,
  });

  const isJson = res.headers.get('content-type')?.includes('application/json');
  const payload = isJson ? await res.json() : await res.text();

  if (!res.ok) {
    const message = isJson && payload && (payload as any).error ? (payload as any).error : res.statusText;
    throw new Error(typeof message === 'string' ? message : 'Request failed');
  }

  return payload as T;
}

export function getApiBaseUrl(): string {
  return BASE_URL;
}


