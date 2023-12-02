import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod"

export const env = createEnv({
    // serverで使用するための環境変数
   server: {
    API_KEY: z.string(),
    // urlかをバリデーションする
    PREFECTURES_API_URL: z.string().url(),
    POPULATION_API_URL: z.string().url(),
   },
   // envファイルと紐づける
   //invalid URLと出た。
   runtimeEnv:{
        API_KEY: process.env.API_KEY,
        PREFECTURES_API_URL: process.env.PREFECTURES_API_URL,
        POPULATION_API_URL: process.env.POPULATION_API_URL,
   }
})