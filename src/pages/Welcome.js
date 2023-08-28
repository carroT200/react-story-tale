import { Route } from 'react-router-dom/cjs/react-router-dom.min';

const Welcome = () => {
  return (
    <section>
      <h2>
        Hello! Here I tried to make a site with technology React and Node.js and
        RouterDom This was my first project and it was difficult for me, but I
        got a lot of valuable experience
      </h2>
      <Route path="welcome/new-user">
        <p>Welcome new user</p>
      </Route>
    </section>
  );
};

export default Welcome;
