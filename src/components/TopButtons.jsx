import React from 'react'

function TopButtons({setQuery}) {

const cities = [
{
    id:1,
    title: 'London'},

{
    id:2,
    title: 'Sydney'},

{
    id:3,
    title: 'Tokyo'},

{
    id:4,
    title: 'Toronto'},

{
    id:5,
    title: 'Paris'},
{
    id : 6,
    title : 'Gujrat'},
    {
        id : 7,
        title : 'Islamabad'},
]


  return ( 
  <div className="flex items-center justify-around my-6">
  {cities.map((city)=> (
      <button key={city.id} className="text-white text-lg font-medium transition ease-out hover:scale-150" onClick={()=> setQuery({q: city.title})}>{city.title}</button>
  ))}
</div>
  );
} 

export default TopButtons;