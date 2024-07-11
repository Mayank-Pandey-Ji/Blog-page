import './App.css';
import Header from './Components/Header';
import Blogs from './Components/Blogs';
import Pagination from './Components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './contexts/AppContext';
function App() {
  const {fetchBlogPost} = useContext(AppContext);

  useEffect( ()=> {
    fetchBlogPost();
  } , []);
  return (
    <div className='w-full h-full  flex flex-col'>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}

export default App;
