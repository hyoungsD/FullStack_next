import { SaleData } from "@/types/types";

async function  fetchData(url: string): Promise<SaleData[]> {
  try{
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.status} : HTTP request failed.`);
    const data = await response.json();
    return data.documents;
  }catch(error){
    console.log(error);
    return [];
  }
}

export async function fetchSales(q?:string): Promise<SaleData[]> {
  let apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/sales`;
  if(q){
    apiUrl += `?q=${q}`
  }
  return fetchData(apiUrl);
}

export async function fetchSalesRecent(): Promise<SaleData[]> {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/sales/recent`;
  return fetchData(apiUrl);
}

export async function fetchSalesById(id:number): Promise<SaleData[]> {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/sales/${id}`;
  return fetchData(apiUrl);
}
