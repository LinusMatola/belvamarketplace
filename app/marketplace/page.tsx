"use client"
import Footer from '@/components/Footer'
import FreelanceList from '@/components/Home/FreelanceList'
import NavBar from '@/components/NavBar'
import React, { useEffect, useState } from 'react'
import Categories from './Categories'
import SearchService from './SearchService'
import FreelanceFilter from '@/components/Home/FreelanceFilter'
import GlobalApis from '@/services/GlobalApis'
function MarketPlace() {
  const [freelanceList, setFreelanceList] = useState<any>([]);
  const [freelanceListOptions, setFreelanceListOptions] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);

  const getFreelancers = async() => {
    const result:any = await GlobalApis.getFreelanceList();
    setFreelanceList(result?.portofolios)
    setFreelanceListOptions(result?.portofolios);
    //console.log(result);
  }

  const getCategories = async() => {
    const result:any = await GlobalApis.getCategory();
    //console.log(result?.categories);
    setCategories(result?.categories)
  }

  // //filter the freelancers by category
  const filterFreelancers = (category:string) =>{
    const filterList = freelanceListOptions.filter((item:any)=>
      item.category?.categoryName==category);
    console.log('Category:', category);
    console.log('Filtered List:', filterList);
    setFreelanceList(filterList);
  }

  // //order car list
  const orderFreelancerList = (order:any) =>{
    const sortedData = [...freelanceListOptions].sort((a,b)=>
      order==-1? a.from - b.from:b.from - a.from)
    setFreelanceList(sortedData);
  }
  useEffect(() => {
    getCategories();
    getFreelancers();
  }, [])
  return (
    <main>
        <NavBar isHomePage={false}/>
        <Categories categories={categories} filterFreelancers={(value:string)=>filterFreelancers(value)}/>
        <SearchService />
        <FreelanceFilter
        freelanceList={freelanceListOptions}
        orderFreelancerList={(value:string)=>orderFreelancerList(value)}
        />
      <FreelanceList freelanceList={freelanceList}/>
    </main>
  )
}

export default MarketPlace