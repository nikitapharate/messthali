// import React from 'react'

// const Gallery = () => {
//   return (
//     <div>
//       Gallery
//     </div>
//   )
// }

// export default Gallery


import React from 'react'
import './Gallery.css'
const Gallery = () => {
  const FoodList=[
   {
    id:1,
    src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Chiken',
    prize : 200
  },
  {
    id:2,
    src: 'https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Chiken',
    prize : 200
  },
  {
    id:3,
    src: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Chiken',
    prize : 200
  },
  {
    id:4,
    src: 'https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Chiken',
    prize : 200
  },
  {
    id:5,
    src: 'https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Chiken',
    prize : 200
  },
  {
    id:6,
    src: 'https://images.pexels.com/photos/14831540/pexels-photo-14831540.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Chiken',
    prize : 200
  },
  {
    id:7,
    src: 'https://images.pexels.com/photos/13063292/pexels-photo-13063292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Chiken',
    prize : 200
  },
  {
    id:8,
    src: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Chiken',
    prize : 200
  },
  {
    id:9,
    src: 'https://media.istockphoto.com/id/1266098455/photo/vegetarian-food-thali-or-platter-from-maharashtra-india.jpg?b=1&s=612x612&w=0&k=20&c=Jt4XZsM0ga8QUyCpiWgFwfhf7YX8zgdsIgPNH5p8qa4=',
    name: 'Chiken',
    prize : 200
  },
  {
    id:10,
    src: 'https://media.istockphoto.com/id/915307702/photo/selection-of-indian-style-snacks-of-vegetarian-samosas-onion-bhaji-and-aloo-tikka.jpg?b=1&s=612x612&w=0&k=20&c=8pg-X9lC42S9yyqlfBx4G2jKgmgsQXnLkKy10P1PcIk=',
    name: 'Chiken',
    prize : 200
  },
  {
    id:11,
    src: 'https://media.istockphoto.com/id/1167510273/photo/puri-bhaji-masala-aloo-sabzi-fry-served-with-fried-puri-or-indian-bread-and-curd.jpg?b=1&s=612x612&w=0&k=20&c=vjtSLP2wyb1B3abkwAUCyzJI1_qu12hXAfn4SQ7Rsco=',
    name: 'Chiken',
    prize : 200
  },
  {
    id:12,
    src: 'https://images.pexels.com/photos/12365247/pexels-photo-12365247.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Chiken',
    prize : 200
  },
  {
    id:13,
    src: 'https://media.istockphoto.com/id/183324460/photo/thali-traditional-rajastani-meal.jpg?b=1&s=612x612&w=0&k=20&c=84efvjX71vXTytG5fIgxiSeWHBhIspWLAN8GSfwjUNM=',
    name: 'Chiken',
    prize : 200
  },
  {
    id:14,
    src: 'https://images.pexels.com/photos/14882284/pexels-photo-14882284.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Chiken',
    prize : 200
  },
  {
    id:15,
    src: 'https://images.pexels.com/photos/17910326/pexels-photo-17910326/free-photo-of-a-dish-with-rice-and-vegetables.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Chiken',
    prize : 200
  },
  {
    id:16,
    src:'https://images.pexels.com/photos/17649369/pexels-photo-17649369/free-photo-of-meat-with-rice.jpeg?auto=compress&cs=tinysrgb&w=600',
    name:'Chiken',
    prize:200
  }
   
  ]
  return (
    <div id='food'>
      {FoodList.map(({id,src,name,prize})=>{
        return(
          <div key={id} id='food-card'>
            <img src={src} width={"250px"} height={"250px"} alt={name} />
                <h2>{name}</h2>
                <p>{prize}</p>
                <button>Add to Cart</button>
          </div>
        );
      }
      )}
    </div>
  )
}

export default Gallery