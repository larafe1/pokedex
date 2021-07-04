import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemon/:pokemonId" component={Pokemon} />
      </Switch>
    </BrowserRouter>
  );
}
