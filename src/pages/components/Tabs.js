import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Forms from '../Forms'
import Schedular from '../schedular';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  let [categories] = useState({
    Dashboard: [
      {
        id: 1,
        title: "Dashboard",
        
      },
     
    ],
    Forms: [
      {
        id: 2,
        title: <Forms /> ,
       
      },
      
    ],
    Schedule: [
      {
        id: 3,
        title: <Schedular />,
        
      },
    
    ],
    Results: [{
      id: 4,
      title: "Results",
      
    },],
  })

  return (
    <div className="flex items-center justify-center">
    <div className="w-3/4 px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-bogold p-2">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ active }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                  'focus:ring-white focus:bg-white focus:ring-2 focus:text-bogold',
                  active
                    ? 'bg-white shadow'
                    : 'hover:bg-white hover:text-gold'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-gray p-3'
               
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
    </div>
  )
}
