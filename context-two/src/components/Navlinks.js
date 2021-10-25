import React, {useState} from 'react'
import { data } from './data';
import { useNavModalContext } from './context';
const Navlinks = () => {
      const [navData, setNavData] = useState(data);
        //  const dataOne = useNavModalContext();
        //  const { isSideBarOpen, sideBarToggler } = dataOne;
        //  console.log(dataOne);
    return (
      <div>
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
    );
}

export default Navlinks
