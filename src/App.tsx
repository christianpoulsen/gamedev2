import React from 'react';

import Welcome from './views/Welcome';
import ValueProposition from './views/ValueProposition';
import TheTeam from './views/TheTeam';
import RememberThis from './views/RememberThis';
import Home from './views/Home';
import Build from './views/Build';
import { Views } from './store/viewActions';
import { useTypedSelector } from './store';

const App: React.FC = () => {
  const view = useTypedSelector(state => state.view)

  switch (view) {
    case Views.WELCOME:
      return <Welcome/>
    case Views.THE_TEAM:
      return <TheTeam />
    case Views.VALUE_PROPOSITION:
      return <ValueProposition />
    case Views.REMEMBER_THIS:
      return <RememberThis />
    case Views.HOME:
      return <Home />
    case Views.BUILD:
      return <Build />
    default:
      return <Home />
  }
}

export default App;
