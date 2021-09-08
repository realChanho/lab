import apiClient from '.'

interface GetPokemonAPIRequest {
  limit?: number
  offset?: number
}

export const getPokemonAPI = ({ limit = 0, offset = 0 }: GetPokemonAPIRequest) => {
  return apiClient.get(`/pokemon?limit=${limit}&offset=${offset}`)
}
