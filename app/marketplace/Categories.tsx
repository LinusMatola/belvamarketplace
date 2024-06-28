import React, { useEffect, useState } from 'react';

function Categories({ categories, filterFreelancers }: any) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    console.log(categories);
    if (categories) {
      setIsLoaded(false);
    }
  }, [categories]);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    filterFreelancers(categoryName);
  };

  return (
    <section className='hidden fixed w-full top-16 z-50 bg-white md:flex justify-between items-center'>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 w-full">
        <ul className="flex flex-wrap -mb-px border-t border-gray-200 sm:px-10 md:px-20">
          {!isLoaded && categories.map((category: any, index: number) => (
            <li className="mr-2" key={index}>
              <button
                onClick={() => handleCategoryClick(category.categoryName)}
                className={`inline-block texl-xl p-4 border-t-4 ${selectedCategory === category.categoryName ? 'border-gray-900 hover:text-gray-900' : 'border-transparent'} hover:text-gray-900 hover:border-gray-900`}
              >
                {category.categoryName}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Categories;
