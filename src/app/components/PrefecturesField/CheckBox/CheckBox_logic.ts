/*
"use client";

import { useRouter } from "next/navigation";

export function CookieRequest(
  prefCode: number,
  prefName: string,
): void{
  const router = useRouter();

  document.cookie = `prefCode=${encodeURIComponent(prefCode)}`;
  document.cookie = `prefName=${encodeURIComponent(prefName)}`;
  
  router.refresh();

}

*/