import Layout from '../layouts/Layout'
import { Title } from '@solidjs/meta'

export default function Welcome() {
  return (
    <Layout>
      <Title>Welcome</Title>
      <h1>Welcome</h1>
      <p class="text-red-500 font-bold text-3xl">Hello, welcome to your first Inertia app!</p>
    </Layout>
  )
}
