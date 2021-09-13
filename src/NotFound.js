import { Link } from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry mate..</h2>
            <p>Seems like you're lost</p>
            <Link to='/'>Back home we go yeh?</Link>
        </div>
     )
}
 
export default NotFound;