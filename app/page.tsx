"use client"
import AboutUs from "@/components/Home/AboutUs";
import CTA from "@/components/Home/CTA";
import FreelanceFilter from "@/components/Home/FreelanceFilter";
import FreelanceList from "@/components/Home/FreelanceList";
import Hero from "@/components/Home/Hero";
import MoreServices from "@/components/Home/MoreServices";
import GlobalApis from "@/services/GlobalApis";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [freelanceList, setFreelanceList] = useState<any>([]);
  const [freelanceListOptions, setFreelanceListOptions] = useState<any>([]);
  const getFreelancers = async() => {
    const result:any = await GlobalApis.getFreelanceList();
    setFreelanceList(result?.portofolios)
    setFreelanceListOptions(result?.portofolios);
    //console.log(result);
  }

  // //filter the cars
  // const filterCarsList = (brand:string) =>{
  //   const filterList = carsListOptions.filter((item:any)=>
  //     item.carBrand==brand);
  //     setCarsList(filterList);
  // }

  // //order car list
  const orderFreelancerList = (order:any) =>{
    const sortedData = [...freelanceListOptions].sort((a,b)=>
      order==-1? a.from - b.from:b.from - a.from)
    setFreelanceList(sortedData);
  }
  useEffect(() => {
    getFreelancers();
  }, [])
  return (
    <main className="">
      <Hero />
      <AboutUs />
      {/* <FreelanceFilter
      freelanceList={freelanceListOptions}
      orderFreelancerList={(value:string)=>orderFreelancerList(value)}
       /> */}
       <MoreServices />
      <FreelanceList freelanceList={freelanceList}/>
      <CTA />
    </main>
  );
}
