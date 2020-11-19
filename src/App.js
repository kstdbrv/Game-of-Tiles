import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Quiz from './containers/quiz/Quiz'
import Layout from './hoc/Layout'

const App = () => {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Quiz} />
{/*           <Route path="/categories" component={CategoriesGrid} /> */}
        </Switch>
      </Layout>
  )
}

export default App
