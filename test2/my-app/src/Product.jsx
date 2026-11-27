function Product({name,age,img,stockstatus}) {
    return(
       <>
       <div className="div">Hi</div>
        <div className="hi"> This is productcard component</div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
        <img src={img} alt={name} />
        <p>Stock Status: {stockstatus}</p>
       </>
    )
}
export default Product