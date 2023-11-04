import { useContext } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import MyContext from "../../others/DataContext";
import "./Home.css";

function Home() {
    // const [total, setTotal] = useState(0)
    // useEffect(() => {
    //   console.log('Texto desde el useEffect')
    //   return () => {
    //     console.log("Ultima voluntad");
    //   };
    // }, [])
  
    const characters = useContext(MyContext)
  
      return (
        <>
          {/* <Link to={'/otra'}>Ir a otra</Link> */}
          <MyContext.Provider value={characters}>
            <Navbar />
            <div className="content">
              <div className="container">
                <img src="/inmortal.webp" alt="The Inmortal"/>
                <div className="text">
                  <h1>Guardians of the Globe</h1>
                  <p>
                    The Guardians of the Globe are a superhero team originally
                    formed by Immortal to protect the world from crime and
                    injustice.
                  </p>
                </div>
              </div>
            </div>
          </MyContext.Provider>
        </>
      )
  }
  
  export default Home