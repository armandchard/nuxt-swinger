interface DateOfBirth {
  age: number
  date: string
}

interface Identity {
  name: string
  value: string
}
interface Location {
  city: string
  coordinates: {
    latitude: string
    longitude: string
  }
  country: string
  postcode: number
  state?: string
  street: {
    number?: number
    name: string
  }
  timezone?: {
    description: string
    offset: string
  }
}

interface Name {
  first: string
  last: string
  title: string
}
interface Picture {
  large: string
  medium: string
  thumbnail: string
}

export interface Artist {
  cell: string
  dob: DateOfBirth
  email: string
  id: Identity
  location: Location
  name: Name
  nat: string
  phone: string
  picture: Picture
}
