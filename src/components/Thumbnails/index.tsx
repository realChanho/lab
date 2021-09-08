import { useEffect, useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { getPokemonAPI } from '../../lib/api/pokemon'

function Thumbnails() {
  const { data, isLoading } = useQuery('pokemonlist', getPokemonAPI)
  const [thumbnails, setThumbnails] = useState<PokemonThumbnails[]>([])
  const pokemonList = useMemo(() => {
    if (data) {
      return data.results.map((item, index) => ({
        ...item,
        number: index + 1,
      }))
    }
    return []
  }, [data])

  useEffect(() => {
    setThumbnails(
      pokemonList.map((pokemon) => ({
        ...pokemon,
        image: `${IMAGE_URL}${pokemon.number}.png`,
      })),
    )
  }, [pokemonList])

  const pokemonImages = useMemo(
    () => (
      <>
        {thumbnailes.map((thumbnail, index) => (
          <Styles.Thumbnail
            delay={Math.random() * 5}
            left={Math.random() * 100}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            <Thumbnail pokemon={thumbnail} />
          </Styles.Thumbnail>
        ))}
      </>
    ),
    [thumbnailes],
  )

  if (isLoading || !data) {
    return <div>Loading...</div>
  }

  return (
    <div css={container}>
      <img css={image} src={} alt="titleImage" />
      <Link href="/docs">
        <a css={link}>{'포켓몬 찾기 >'}</a>
      </Link>
      {pokemonImages}
    </div>
  )
}

export default Thumbnails
