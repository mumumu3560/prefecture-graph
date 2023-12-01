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
   experimental__runtimeEnv:{
        API_KEY: "API_KEY",
        PREFECTURES_API_URL: "PREFECTURES_API_URL",
        POPULATION_API_URL: "POPULATION_API_URL",
   }
})