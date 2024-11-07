import React from 'react'
import { ShimmerPostList } from 'react-shimmer-effects';
const ShimmerUI = () => {
  return (
    <>
      <div className='container mx-auto mt-10'>
      <ShimmerPostList postStyle="STYLE_FIVE" col={4} row={3} gap={30} />;
      </div>
    </>
  )
}

export default ShimmerUI

