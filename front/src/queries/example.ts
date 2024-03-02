import httpRequest from "@/utils/httpRequest";

export const fetchExample = async (): Promise<Array<string>> => {
  return httpRequest<Array<string>>("GET", "http://localhost:3000/");
};
