type Props = {
  name: string
}

export default function Home({ name = 'Hello world' }: Props) {
  return <h1>{name}</h1>
}
