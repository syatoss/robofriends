import Card from '../Card/Card.jsx'


const CardList = ({robots})=>{


    return (
        <div>
            {   
                    robots.map((item)=>{

                        return( 
                        <Card 
                        id={item.id} 
                        name={item.name} 
                        username={item.username} 
                        email={item.email} 
                        key = {item.id}
                        />
                        )
                    })
        }
        </div>
    )

}

export default CardList;
