import { TestStatic } from "src/utils/test";
import { CityService } from "./city.service";

describe('CountryController', () => {
  let cityService: CityService;
  
  const mockService = {
    findById: jest.fn(),
    createCity: jest.fn(),
    updateCity: jest.fn(),
    deleteCity: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CityController],
      providers: [{ provide: CityService, useValue: mockService }],
    }).compile();

    cityService = module.get<CityService>(CityService);
  });

  beforeEach(() => {
    mockService.createCity.mockReset();
    mockService.deleteCity.mockReset();
    mockService.findById.mockReset();
    mockService.updateCity.mockReset();
  });
  
  describe('findById', () => {
    it('deveria retornar o resultado da busca e devolver um registro de dados de país', async () => {
      const city = TestStatic.countryData();
      mockService.findById.mockReturnValue(city);
      const foundCity = await cityService.findById(city.id)
      expect(foundCity).toMatchObject({ id: city.id });
      expect(mockService.findById).toHaveBeenCalledTimes(1);
    });
  });

  describe('createCity', () => {
    it('deveria criar um registro de cidade com sucesso', async () => {
      const cityDto = TestStatic.cityDto();
      const city = TestStatic.cityData();

      mockService.createCity.mockReturnValue(city);
    });
  });

  }) 