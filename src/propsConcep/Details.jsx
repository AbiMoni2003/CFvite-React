import React from 'react'

function Details({name,age,phone,email}) {
  return (
   <div>
   <h1>Name : {name}</h1>
   <h1>Age : {age}</h1>
   <h1>Phone : 8870224305</h1>
   <h1> PhoneNo : {phone}</h1>
   <h1>EmailId : {email}</h1>
   </div>
  )
}

export default Details