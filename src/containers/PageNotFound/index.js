import { useSelector } from 'react-redux'

function PageNotFound() {
  const darkMode = useSelector(state => state.darkMode.darkMode)

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div style={{height: "100vh", width: "100vw"}}>
        <h1 className='white-text'> Error 404 </h1>
      </div>
    </div>
  );
}

export default PageNotFound;
