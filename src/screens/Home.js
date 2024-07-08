import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Craousel from "../components/Craousel";

export default function Home() {
  return (
    <>
      <div><Navbar /></div>
      <div><Craousel/></div>
      <div><Card/></div> 
      <div><Footer /></div>
    </>
  );
}
