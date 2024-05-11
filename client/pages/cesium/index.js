import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./playground'), {
  ssr: false,
})

export default () => {
  return <Map />
}