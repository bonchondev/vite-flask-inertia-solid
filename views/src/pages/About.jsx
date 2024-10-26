import Layout from '../layouts/Layout'
import { Title } from '@solidjs/meta'

export default function About(props) {
  const amount = () => props.amount;
  return (
    <Layout>
      <Title>About</Title>
      <section>
        Amount : {amount()}
      </section>
    </Layout>
  )
}
