import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Data from "../components/Data"
import Biography from "../components/Biography"
import FavoriteThings from "../components/FavoriteThings"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
      <h1>Yui Hajiri</h1>
      <h3>OFFICIAL WEBSITE&ensp;&ensp;&ensp;</h3>
      <Data Bloodtype="A" />
      <Biography />

      <h4>HOBBIES/INTERESTS</h4>
      <p>
        お城などの遺跡めぐり、博物館めぐり、読書、クイズ番組を見ること
        <br />
        <img src="DSC_0700.JPG" wigth="135" height="180" title="姫路城" />
        <img src="IMG_0445.jpg" width="240" height="180" title="佐賀城" />
        <img src="IMG_8372.jpg" width="240" height="180" title="中城城" />
        <img src="DSC_0224.jpg" wigth="270" height="180" title="掛川城" />
        <img src="IMG_0998.JPG" width="120" height="180" title="忍城" />
        <img src="IMG_0827.JPG" width="240" height="180" title="吉野ヶ里遺跡" />
        <img src="IMG_0730.JPG" width="240" height="180" title="吉野ヶ里遺跡" />
        <img src="IMG_9222.JPG" width="240" height="180" title="登呂遺跡" />
        <img src="IMG_5292.JPG" width="240" height="180" title="稲荷山古墳" />
      </p>
      <FavoriteThings />
    </div>
  )
}
