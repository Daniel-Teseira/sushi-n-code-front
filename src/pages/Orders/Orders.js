import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './orders.css'

const Producto = () => {
  const params = useParams()
  const [product, setProduct] = useState(null)
  const [cantidad, setCantidad] = useState('1')

  const fetchProduct = async (id) => {
    const response = await fetch(`...`)
    const data = await response.json()
    
    setProduct(data)
  }

  useEffect(() => {
    fetchProduct(params.id)
  }, [params.id])

  if (!product) return <h3 className='text-center mt-3'>Cargando producto...</h3>

  return (
    <section className='product-detail-container container p-4 mt-5'>
      <p><h3 className='d-flex justify-content-center'> {...} </h3></p>

      <div className='d-flex row contenido'>
        <img src={...} className='col-4 image' alt={...}/>

        <div className='d-flex flex-column col-8 info'>
          <p> {...} </p>
          {/* <span class="badge bg-secondary col-2"> {product.category} </span> */}
          <h4 className='mt-3'>${...}</h4>
                  
          <div className='d-flex align-items-center mx-5  justify-content-end comprar'>
            {/* <p className='mx-3 my-0'> Hay {product.rating.count} 
                disponible!! 
            </p> */}
             <h5 className='my-0'> Cantidad 
            </h5>
            <select className="form-select mx-3" aria-label="Default select example" onChange={(event) => setCantidad(event.target.value)}>              
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          <button className='btn btn-outline-success m-0'> Realizar Pedido</button>
            
          </div>
                   
        </div>
      </div>
    </section>
  )
}

export default Producto