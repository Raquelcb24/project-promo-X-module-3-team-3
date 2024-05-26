function Reset({setData}) {
    const handleReset=(event)=>{
        event.preventDefault();
        setData({name:"", slogan:"", technologies:"", repo:"", demo:"", desc:"", autor:"", job:"", image:"", photo:""});
      
    }
  return (
    <div>
        <button className='button--large' onClick={handleReset}>Reset</button>
    </div>
   
  )
}

export default Reset