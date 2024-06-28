"use client"
import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Info from './Info'
import NavBar from '@/components/NavBar'
import GlobalApis from '@/services/GlobalApis'
import { usePathname } from 'next/navigation'

function FreelancePage() {
  const param = usePathname();
  const [freelanceProfile, setFreelanceProfile] = useState<any>([]);

  const GetFreelancerDetails = async (profleSlug:any) => {
    const result:any = await GlobalApis.getSingleFreelanceItem(profleSlug);
    setFreelanceProfile(result.portofolios);
    console.log(result.portofolios);
  }

  const getFreelancers = async() => {
    const result:any = await GlobalApis.getFreelanceList();
  }



  useEffect(() =>{
    GetFreelancerDetails(param.split('/')[2]);
  }, [])

  return (
    <main>
        <NavBar isHomePage={false}/>
        <Hero freelanceProfile={freelanceProfile}/>
        <Info freelanceProfile={freelanceProfile}/>
    </main>
  )
}

export default FreelancePage