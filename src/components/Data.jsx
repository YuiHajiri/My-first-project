import React from "react"

export default function Data({ Bloodtype }) {
  const Birthday = "生年月日：2001/9/27"

  return (
    <>
      <h4>DATA</h4>
      <p>
        {Birthday} <br />
        出身地：東京都東村山市
        <br /> 血液型：{Bloodtype}
        <br /> PT：とれたの
        <br />
        Pro-K以外の所属団体：劇団コギト
        <br /> バイト：
        <a href="https://www.youthcommunity.net/">
          NPO法人ユースコミュニティー
        </a>
        での学習支援
      </p>
    </>
  )
}
