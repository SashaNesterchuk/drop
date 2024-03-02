async function httpRequest<T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  data?: any
): Promise<T> {
  const requestInit: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  };

  const response = await fetch(url, requestInit);

  if (!response.ok) {
    throw new Error(`HTTP request failed with status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export default httpRequest;
