import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your New Home ' subtitle='Find new & featured property located near you.' />
          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <select name="price" id="price">
                <option value="" > Property Type </option>
                <option value="buy"> Buy </option>
                <option value="rent"> Rent </option>
                <option value="sold"> Sold </option>
              </select>
            </div>
            <div className='box'>
              <span>Price Range</span>
              <select name="price" id="price">
                <option value="" > Budget </option>
                <option value="5"> 5 lacs </option>
                <option value="10"> 10 lacs </option>
                <option value="15"> 15 lacs </option>
                <option value="20"> 20 lacs </option>
                <option value="25"> 25 lacs </option>
                <option value="30"> 30+ lacs </option>
              </select>
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
