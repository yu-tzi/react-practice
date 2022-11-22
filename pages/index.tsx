import Head from 'next/head'
import Image from 'next/image'
import { GeneratedIdentifierFlags } from 'typescript';
import styles from '../styles/Home.module.css'

const wrapper = {
  frame:{
    width: '400px',
  },
  column: {
    display: 'flex',
    flexFlow: 'column wrap',
    padding: '20px',
  },
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  gridContainer: {
    display: 'grid',
  },
  gridItemTitleOne: {
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '2',
    textAlign: 'center',
  },
  gridItemTitleTwo: {
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '1',
    gridRowEnd: '2',
    textAlign: 'center',
  },
  gridItemSubtitle: {
    gridColumnStart: '1',
    gridColumnEnd: '3',
    gridRowStart: '1',
    gridRowEnd: '2',
    textAlign: 'center',
  },
  gridItemItemOne: {
    gridColumnStart: '1',
    gridColumnEnd: '2',
    textAlign: 'center',
  },
  gridItemItemTwo: {
    gridColumnStart: '2',
    gridColumnEnd: '3',
    textAlign: 'center',
  }
};


export default function Home() {
  return (
    <div style={wrapper.frame}>
      <Container></Container>
    </div>
  )
};

const productList = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

const Container = () => {
  return (
    <div style={wrapper.column}>
      <SearchArea></SearchArea>
      <ListArea></ListArea>
    </div>
  )
};

const SearchArea = () => {
  return (
    <div style={wrapper.column}>
      <input type="text" placeholder="Search..." />
      <div style={wrapper.row}>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Only show products in stock</label>
      </div>
    </div>
  )
};

const ListArea = () => {
  // 寫一段 func 抽出 category key（再用 category key 去 mapping 詳細資料）
  return (
    <>
      <div style={wrapper.gridContainer}>
        <div style={wrapper.gridItemItemOne}>Name</div>
        <div style={wrapper.gridItemTitleTwo}>Price</div>
      </div>
      <div style={wrapper.gridContainer}>
        <div style={wrapper.gridItemSubtitle}>789</div>
        <div style={wrapper.gridItemItemOne}>1112</div>
        <div style={wrapper.gridItemItemTwo}>1113</div>
        <div style={wrapper.gridItemItemOne}>1112</div>
        <div style={wrapper.gridItemItemTwo}>1113</div>
      </div>
    </>
  )
};
