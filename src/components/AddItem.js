import React, { useEffect, useState } from 'react'

export default function AddItem() {

  const intiallst = ()=>{
    let lst = localStorage.getItem('data')
    if(lst){
      return JSON.parse(lst)
    }
    else
    return [[]]
  }
  const[itemslst,setitemslst] = useState(intiallst());

  useEffect(()=>{
      localStorage.setItem('data',JSON.stringify(itemslst))
  },[[itemslst]])

 
  const [items,setitem] = useState();
  const changeitem = (event)=>{
    setitem(event.target.value);
  }

  const [desc,setdesc] = useState();


  const listofitems = () =>{
    setitemslst((olditems)=>{
      return[...olditems,[items,desc]]
    })
  }

  const changedesc = (event)=>{
    setdesc(event.target.value)
  }
  const emptylst = ()=>{
    setitemslst([]);
  }

  const deleteitem = (id)=>{
      setitemslst((olditems)=>{
        return olditems.filter((arrele,index)=>{
          return index!==id;
        })
      })
  }

  return (
    <>
    <div className='container my-4'>
    <h1 className='text-center'>TO DO LIST</h1>
    <h3 className=''>Enter a List</h3>
    <input className="form-control" id="disabledInput" type="text" placeholder="Enter the task" onChange={changeitem} />
    <br></br>
    <h3 className=''>Desciption</h3>
    <textarea className="form-control" rows="6" aria-label="With textarea" onChange={changedesc}></textarea>
    <button type="button" className="btn btn-success my-2" onClick={listofitems} >Add Item</button>
    <button type="button" className="btn btn-success my-2 mx-2" onClick={emptylst} >Clear List</button>
    </div>
    <h3 className="container">Your items</h3>
    <div className="container">
      <table className="table table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">item</th>
            <th scope="col">Description</th>
            <th scope="col">Completed</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody id="tablebody"></tbody>
     
      <tbody>
      {itemslst.map((itemval,index)=>{
        if(index === 0)
          return " "
        else
        {
        return(
        <tr key={index}>
              <td>{index}</td>
              <td>{itemval[0]}</td>
              <td>{itemval[1]}</td>
              <td>
                <select className="form-select" aria-label="Default select example">
                <option value="1">Yes</option>
                <option value="2">No</option>
                </select>
              </td>
              <td><button className="btn btn-danger btn-sm" type="submit" onClick={()=>{
                deleteitem(index)
              }} >Delete</button></td>
            </tr>
            
          )
        }
      }
      )}
      </tbody>
      </table>
    </div>
    

    </>
  )
}
