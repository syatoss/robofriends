import './App.css';
import 'tachyons';
import CardList from '../components/CardList/CardList.jsx';
import {useState, useEffect}  from 'react';
import Title from '../components/Title/Title.jsx';
import SearchBox from '../components/SearchBox/SearchBox.jsx';
import Scroll from '../components/Scroll/Scroll.jsx'



const App=()=> {

  const[api,setApi] = useState('https://jsonplaceholder.typicode.com/users')
  const [first_mount,setFirstMount] = useState(true)
  const [data,setData] = useState([])
  const [robots,setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')

  const onSearchChange = (e)=>{
      
      setRobots(data.filter((robot)=>{
        return (robot.name.toLowerCase().includes(e.target.value.toLowerCase()))
      }))
      
  }


  useEffect(()=>{
    if(first_mount){

      try{
        fetch(api).
        then((res)=>{
          return res.json()
        }).
        then((data)=>{
          setData(data)
          setRobots(data)
        })
      } catch(err) {
        console.error(err.message)
      }


      setFirstMount(false)

    }
  },[first_mount])


  if(data.length === 0){
    return (
      <div>
        <h1 className='tc'>Loading</h1>
      </div>
    )
  }else{

  return (
    <div className="App">
      
      <Title/>
      <SearchBox searchfield={searchfield} onSearchChange={onSearchChange}/>
      <Scroll>
        <CardList robots={robots}/>
      </Scroll>
      
    </div>
  );
  }
}

export default App;
