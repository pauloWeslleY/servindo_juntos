import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import * as S from './styles'

export const GoogleMaps = () => {
  const API_KEY = 'AIzaSyD8DqWT5YNf9n6IbH2ZuKyYNtDOhzYArSk'
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  })

  const position = {
    lat: -23.709612,
    lng: -46.799277,
  }
  return (
    <S.Wrapper>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={position}
          zoom={15}
        >
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <span>Não foi possível carregar o google maps!</span>
      )}
    </S.Wrapper>
  )
}
