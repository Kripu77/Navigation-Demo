import React ,{useState}from 'react'
import { data } from './data'
import Header from './Header';

const Navbar = () => {

    const [navData, setNavData] = useState(data)
    return (
      <main>
        <div className="wrapper">
          <Header />

          <div className="nav-container">
            {navData.map((value) => {
              const { url, id, name } = value;
              return (
                <div key={id}>
                  <a href={url} alt={name}>
                    {" "}
                    {url} {name}
                  </a>{" "}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
}

export default Navbar
