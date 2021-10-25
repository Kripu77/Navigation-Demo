import React ,{useState}from 'react'
import { data } from './data'
import Header from './Header';
import { FaAffiliatetheme } from "react-icons/fa";

const Navbar = () => {

    const [navData, setNavData] = useState(data)
    return (
      <main>
        <Header />
        <div className="wrapper">
          <div className="nav-container">
            <h1> Kripu Khadka</h1>

            <FaAffiliatetheme />
          </div>
          <div className="nav-links">
            <div className="nav-social">
              {navData.map((value) => {
                const { url, id, name } = value;
                return (
                  <div key={id}>
                    <a href={url} alt={name}>
                      {" "}
                      {name}
                    </a>{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    );
}

export default Navbar
