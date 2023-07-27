import { useEffect } from 'react';

import styles from './App.module.scss'

import { useLoadedData } from './Post/fetch-data';
import { Post } from './Post/Post';
import { EmptyState, Row, Spinner } from '@canonical/react-components';

function App() {


  const { data, load } = useLoadedData()

  useEffect(() => {
    load()
    // NOTE: We specifically only want to run this effect on mounting the component
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (data.status === "mount") return <EmptyState image={ <span></span> } title="This application doesn't have any configuration parameters" />
  if (data.status === "loading") return <Spinner text="Loading..." />
  if (data.status === "error") return <div>{ JSON.stringify(data.error) }</div>



  return (
    <div className={ styles.container }>
      <Row>
        { data.value.map(Post) }
      </Row>
    </div>
  );
}


export default App;
