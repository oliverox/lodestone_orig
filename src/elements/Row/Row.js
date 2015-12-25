import React from 'react';

/** Row Element
 *  Renders a div element with class 'row'.
 *  Used to align <Column/> in a row.
 */
const Row = (prop) => {
  const cn = 'row ' + ((prop.className) ? prop.className : '');
  return (
    <div {...prop} className={cn}>{prop.children}</div>
  );
};

export default Row;
