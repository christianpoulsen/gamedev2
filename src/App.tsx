import React from 'react';

import Welcome from './views/WelcomeView';
import ValueProposition from './views/ValuePropositionView';
import TheTeam from './views/TheTeamView';
import RememberThis from './views/RememberThisView';
import Home from './views/HomeView';
import Build from './views/BuildView';
import { Views } from './store/viewActions';
import { useTypedSelector } from './store';
import DecisionView from './views/DecisionView';

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
    case Views.SUBJECT:
      return <DecisionView />
    default:
      return <Home />
  }
}

export default App;
