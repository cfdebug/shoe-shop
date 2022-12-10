import React from "react"

function ItemCard(props) {
  const item = [
    {
      id: "0573527e-1b66-4898-814a-22f3e6d1f5fd",
      sku: "GY2681",
      brand: "adidas",
      name: "ZX 2K Boost J 'Triple White'",
      colorway: "Cloud White/Cloud White/Grey Two",
      gender: "youth",
      silhouette: "ZX 2K Boost",
      releaseYear: "2020",
      releaseDate: "2020-12-31",
      retailPrice: 120,
      estimatedMarketValue: 94,
      story: "",
      image: {
        360: [],
        original: "https://image.goat.com/attachments/product_template_pictures/images/048/421/694/original/GY2681.png.png",
        small: "https://image.goat.com/750/attachments/product_template_pictures/images/048/421/694/original/GY2681.png.png",
        thumbnail: "https://image.goat.com/375/attachments/product_template_pictures/images/048/421/694/original/GY2681.png.png",
      },
      links: {
        stockX: "",
        goat: "https://goat.com/sneakers/zx-2k-boost-j-triple-white-gy2681",
        flightClub: "https://flightclub.com/zx-2k-boost-j-triple-white-gy2681",
        stadiumGoods: ""
      }
    },
    {
      id: "0fc73134-3819-40a2-a87c-1cb569fd03b8",
      sku: "G57978",
      brand: "adidas",
      name: "D.O.N. Issue #2 Little Kids 'Black Multi'",
      colorway: "Core Black/Cloud White/Solar Red",
      gender: "youth",
      silhouette: "D.O.N. Issue #2",
      releaseYear: "2020",
      releaseDate: "2020-12-31",
      retailPrice: 65,
      estimatedMarketValue: 75,
      story: "",
      image: {
        360: [],
        original: "https://image.goat.com/attachments/product_template_pictures/images/048/366/050/original/G57978.png.png",
        small: "https://image.goat.com/750/attachments/product_template_pictures/images/048/366/050/original/G57978.png.png",
        thumbnail: "https://image.goat.com/375/attachments/product_template_pictures/images/048/366/050/original/G57978.png.png"
      },
      links: {
        stockX: "",
        goat: "https://goat.com/sneakers/d-o-n-issue-2-little-kids-black-multi-g57978",
        flightClub: "https://flightclub.com/d-o-n-issue-2-little-kids-black-multi-g57978",
        stadiumGoods: ""
      }
    },
    {
      id: "1730bcb2-07f9-45cc-9d45-d381407104ab",
      sku: "671127F",
      brand: "Converse",
      name: "Chuck Taylor All Star High GS 'Jungle Fun'",
      colorway: "White/Black/Yellow",
      gender: "youth",
      silhouette: "Chuck Taylor All Star",
      releaseYear: "2020",
      releaseDate: "2020-12-31",
      retailPrice: 40,
      estimatedMarketValue: 40,
      story: "",
      image: {
        360: [],
        original: "https://image.goat.com/attachments/product_template_pictures/images/048/476/271/original/671127F.png.png",
        small: "https://image.goat.com/750/attachments/product_template_pictures/images/048/476/271/original/671127F.png.png",
        thumbnail: "https://image.goat.com/375/attachments/product_template_pictures/images/048/476/271/original/671127F.png.png"
      },
      links: {
        stockX: "",
        goat: "https://goat.com/sneakers/chuck-taylor-all-star-high-gs-jungle-fun-671127f",
        flightClub: "https://flightclub.com/chuck-taylor-all-star-high-gs-jungle-fun-671127f",
        stadiumGoods: ""
      }
    }
  ]
  return (
    <card>
      <div>
        <img src={item[1].image.small} />
      </div>
      <div>
        <h1>{item[1].brand}</h1>
        <h2>{item[1].name}</h2>
      </div>
      <div>
        <h2>Description</h2>
        <p>
          SKU: {item[1].sku}
          <br/>
          colorway: {item[1].colorway}
          <br/>
          gender: {item[1].gender}
          <br/>
          release year: {item[1].releaseYear}
        </p>
        <p>
          <h2>Story</h2>
          {item[1].story}
        </p>
        <p>
          <h2>Story</h2>
          {item[1].story}
        </p>
        <p>
          <h2>More Info</h2>
          StockX: <a href={item[1].links.stockX}>{item[1].links.stockX}</a>
          <br/>
          goat: <a href={item[1].links.goat}>{item[1].links.goat}</a>
          <br/>
          flight Club: <a href={item[1].links.flightClub}>{item[1].links.flightClub}</a>
          <br/>
          stadium Goods: <a href={item[1].links.stadiumGoods}>{item[1].links.stadiumGoods}</a>
        </p>
      </div>
    </card>
  )
}

export default ItemCard