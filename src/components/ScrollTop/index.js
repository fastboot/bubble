import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);