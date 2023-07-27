import { useEffect } from 'react';

import './App.css';
import { Loading } from '../components/Loading';
import { useLoadedData } from './fetch-data';

function App() {


  const { data, load } = useLoadedData()

  useEffect(() => {
    load()
    // NOTE: We specifically only want to run this effect on mounting the component
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (data.status === "mount") return null
  if (data.status === "loading") return <Loading />
  if (data.status === "error") return <div>{ JSON.stringify(data.error) }</div>



  return (
    <div className="App">
      <div>

      </div>
    </div>
  );
}


export default App;
