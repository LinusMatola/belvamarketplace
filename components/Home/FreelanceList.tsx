import React, {useState, useEffect} from 'react'
import FreelanceCard from './FreelanceCard'
import Skeleton from './Skeleton';
import { HiArrowLongRight } from "react-icons/hi2";
import Link from 'next/link';

function FreelanceList(props:any) {
  const [isLoaded, setIsLoaded] = useState(true);
    const [selectedFreelancer, setSelectedFreelancer] = useState<any>();
    useEffect(()=>{
      console.log(props.freelanceList);
        if(props.freelanceList){
            setIsLoaded(false);
        }
    },[props.freelanceList])
  return (
    <section className='p-5 sm:px-10 md:px-20'>

    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    {!isLoaded&&props.freelanceList.map((freelancer:any, index:number) =>(
            <div key={index} onClick={()=>{setSelectedFreelancer(freelancer)}}>
                <FreelanceCard freelancer={freelancer}/>
            </div>
        ))}
        {isLoaded?
        [1,2,3,4,5].map((item)=>(
            <Skeleton />
        )) : null}

    {/* {[1,2,3,4,5,6,7,8].map((item)=>(
        <FreelanceCard />
    )) } */}

</div>
</section>
  )
}

export default FreelanceList