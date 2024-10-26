import Layout from '../layouts/Layout'
import { Title } from '@solidjs/meta'
import { createQuery } from '@tanstack/solid-query'
import ky from 'ky';

export default function About(props) {
  const amount = () => props.amount;
  const query = createQuery(() => ({
    queryKey: ['data'],
    queryFn: () => ky.post('/data').json()
  }))
  return (
    <>
      <Title>About</Title>
      <section>
        Amount : {amount()}
        <Switch>
          <Match when={query.isSuccess}>
            <p>{query.data.dollars}</p>
          </Match>
          <Match when={query.isError}>
            <p>Error: {query.error}</p>
          </Match>
          <Match when={query.isPending}>
            <p>loading...</p>
          </Match>
        </Switch>
      </section>
    </>
  )
}

About.layout = Layout
