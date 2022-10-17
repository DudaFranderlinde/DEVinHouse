export interface QueryParamsFindMyPizzas {
    name?: string
}

export interface Pizza {
    id: string
    name: string
    url: string
    description: string
    price: number,
    ingredients: string[]
  }

export interface BodyParamsCriarPizza {
    name: string,
    url: string,
    description: string,
    price: number,
    ingredients: string[]
}

export interface BodyParamsAtualizarPizza {
    id: string,
    name: string,
    url: string,
    description: string,
    price: number,
    ingredients: string[]
  }
