// import React, { useRef } from 'react'
// import { useEffect } from 'react';
// const ReviewOnScroll = ({children}) => {

//     const reff = useRef(null);

//     useEffect(() => {
//       const obser = new IntersectionObserver(([entry])=>{
//         if(entry.isIntersecting){
//             reff.current.classList.add("visible");
//         }
//       },
//       {threshold:0.2, rootMargin:"0px 0px -50px 0px"}
//     );
//       if(reff.current) obser.observe();
//       return () => obser.disconnect();
//     })
    
//   return (
//     <div ref={reff} className='reveal'>
//       {children}
//     </div>
//   )
// }

// export default ReviewOnScroll
