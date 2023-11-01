import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../others/DataContext";

function Home() {
    // const [total, setTotal] = useState(0)
    // useEffect(() => {
    //   console.log('Texto desde el useEffect')
    //   return () => {
    //     console.log("Ultima voluntad");
    //   };
    // }, [])
  
    function acarreo(info) {
      const { price, operacion } = info
  
      if (operacion) {
        setTotal(total + price)
      } else {
        setTotal(total - price)
      }
    }
  
    const characters = useContext(MyContext)
    console.log(characters)
  
      return (
        <>
          {/* <Link to={'/otra'}>Ir a otra</Link> */}
          <h1>Home</h1>
          {/* <Acarreo total={total} /> */}
        </>
      )
  }
  
  export default Home