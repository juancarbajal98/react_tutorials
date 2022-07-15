import React, { useState, Component, useEffect, memo } from 'react';
import RocketCore from './RocketCore';

/* 
INITIAL FUNCTIONAL COMPONENT - missing memo wrapper
export function FunctionalRocket() {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
}
*/

/* 
SOLUTIUON - memo wrapper
from docs: If your component renders the same result given the same props, 
you can wrap it in a call to React.memo for a performance boost in some cases 
by memoizing the result. This means that React will skip rendering the component, 
and reuse the last rendered result.


*/
export const FunctionalRocket = memo(() => {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
})

export class ClassRocket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
