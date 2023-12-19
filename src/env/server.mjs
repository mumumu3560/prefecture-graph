import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod"

export const env = createEnv({
    // serverで使用するための環境変数
   server: {
     /**
     * RESAS APIのAPIキー
     */
    API_KEY: z.string(),

     /**
      * 都道府県一覧を取得するAPIのURL
     */
     PREFECTURES_API_URL: z.string().url(),

     /**
      * 対応する都道府県の人口構成を取得するAPIのURL
     */
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