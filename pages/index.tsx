import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Container></Container>
    </>
  )
}

const productList = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

const Container = () => {
  return(
    <div>
      <SearchArea></SearchArea>
      <ListArea></ListArea>
    </div>
  )
}

const SearchArea = () => {
  return(
    <div>
      <input type="text" placeholder="Search..."/>
      <input type="checkbox" id="checkbox"/>
      <label htmlFor="checkbox">Only show products in stock</label>
    </div>
  )
}

const ListArea = () => {
  return(
    <div>4321</div>
  )
}
