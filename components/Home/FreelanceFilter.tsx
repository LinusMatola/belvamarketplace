import React from 'react'

function FreelanceFilter({freelanceList, orderFreelancerList}:any) {
    // const [brandList, setBrandList] = useState<any>();
    // const BrandSet = new Set();
    // useEffect(()=>{
    //     if(carsList){
    //         filterCarList();
    //     }
    // },[carsList])

    // const filterCarList = () =>{
    //     carsList.forEach((element:any) => {
    //         BrandSet.add(element.carBrand);
    //     });
    //     console.log(BrandSet);
    //     setBrandList(Array.from(BrandSet));
    // }
    return (
      <section className='p-5 sm:px-10 md:px-20'>
        <div className='mt-10 flex flex-col md:flex-row items-start md:items-center justify-between'>
          {/* left items */}
          <div className='mb-4 md:mb-0'>
            <h2 className='font-bold text-3xl text-black'>Card Catalogue</h2>
            <h2 className='text-lg font-semibold'>
              Explore our cars you may like
            </h2>
          </div>
          {/* right items */}
          <div className='flex items-center justify-center gap-3'>
            <h2 className='font-medium text-lg whitespace-nowrap'>Sort by:</h2>
            <div className="relative">
              <select
                onChange={(e) => orderFreelancerList(e.target.value)}
                className="select select-info border border-gray-300 rounded-lg p-3 pr-10 appearance-none">
                <option disabled selected>Price</option>
                <option value={-1}>Min to Max</option>
                <option value={1}>Max to Min</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    );
}

export default FreelanceFilter