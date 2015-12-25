import React from 'react';

/** Container Element
 *  Renders a div element with class 'container'.
 *  Usually used for the main centered wrapper
 */
const Container = (prop) => {
  return (
    <div {...prop} className={'container'}>
      {prop.children}
    </div>
  );
};

export default Container;
