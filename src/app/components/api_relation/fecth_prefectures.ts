/*npm install react-query axios */
import axios from "axios";
import { env } from '@/env/server.mjs';

/*
server componentsでapi取得 
NEXT_PUBLIC_をつけることで、クライアントサイドからも参照可能になるが今回はセキュリティを考慮してサーバーサイドのみで参照する
また型定義も必要↓
*/

/*
参考サイト
https://zenn.dev/mostlove/articles/de0087838d3ba0
https://zenn.dev/temasaguru/articles/406189a014b656
これを参考に環境変数を設定(スキーマの分割など)
https://zenn.dev/hayato94087/articles/3e4128feddffb9
ライブラリのサイト
https://env.t3.gg/docs/nextjs
.mjsとは？？
https://zenn.dev/kibe/articles/78205d43d4ec05
*/

axios
      .get<{ message: null; result: { prefCode: number; prefName: string }[] }>(
        env.API_URL,
        {
          headers: { "X-API-KEY": env.API_KEY },
        }
      )
      .then((results) => {
        const formattedData = results.data.result.map((prefecture: { prefCode: number; prefName: string }) => ({
          prefCode: prefecture.prefCode,
          prefName: prefecture.prefName,
        }));
        console.log("Prefectures:", formattedData);
      })
      .catch((error) => {
        console.error("Error fetching prefectures:", error);
      });