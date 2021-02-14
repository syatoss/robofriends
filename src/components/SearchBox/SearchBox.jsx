

const SearchBox = ({searchfield,onSearchChange})=>{



    return(
        <div className='pa2'>
            <input
             type="search"
             className='pa3 ba b--green bg-light-blue' 
             placeholder='Search robots'  
             onChange={onSearchChange}            
             />
        </div>
    )
}

export default SearchBox;