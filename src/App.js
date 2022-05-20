import { useState } from "react";
import Bulb from "./Bulb-Effect/Bulb";
import FetchData from "./Fetch-Data/FetchData";
import Radio from "./Radio-widget/components/Radio";
import StationList from "./Radio-widget/components/StationList";

const navItems = ['Bulb Effect', 'Fetch Data', 'Radio Widget'];

function App() {
  const [selectedStation, setSelectedStation] = useState(null)
  const [navItem, setNavItem] = useState('Bulb Effect')

  return (
    <>
      <nav>
        <ul>
          {
            navItems.map(navItem => {
              return <li key={navItem} onClick={() => setNavItem(navItem)}>{navItem}</li>
            })
          }
        </ul>
      </nav>
      <div className="container">

        {
          navItem === 'Radio Widget' && <>
            <StationList setSelectedStation={setSelectedStation} />
            <Radio selectedStation={selectedStation} />
          </>
        }
        {
          navItem === 'Bulb Effect' && <Bulb />
        }
        {
          navItem === 'Fetch Data' && <FetchData />
        }
      </div>
    </>
  );
}

export default App;
