// import dependancies
import React, { Suspense } from 'react'
import WishList from './wishList';
import Spinner from './spinner';


const WishPage = () => {

  const renderWishList = () => {
      return(
        <Suspense fallback={<Spinner />}>
          <WishList/>
        </Suspense>
      )
    }

    return (
        <div>
        {renderWishList()}
        </div>
    )
    
}


export default WishPage