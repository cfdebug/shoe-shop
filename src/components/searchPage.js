import React, {Suspense} from 'react'
import Spinner from './spinner';
import ItemCard from './itemCard';

export default function SearchResults () {

    const renderCards = () => {
          return(
            <Suspense fallback={<Spinner />}>
              <ItemCard/>
            </Suspense>
          )
        }
      
    return(
        <div className="homepage">
            {renderCards()}
        </div>
    )
}