import React from 'react'
import Details from './Details'

function User() {
    const details={
        name:"Abishek",
        age:21,
        phone:"8870224305",
        email:"abimoni2003@gmail.com"
    }
  return (
    <>
    <Details
    //  name={details.name}
    //  age={details.age} 
    //  phone={details.phone}
    //   email={details.email}
    {...details}
      />
    </>
  )
}

export default User