import { TestStatic } from "src/utils/test";
import { CityService } from "../services/city.service";
import { CityController } from "./city.controller";
import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from "@nestjs/common";

describe('CountryController', () => {
  let cityController: CityController;

  const mockService = {
    findById: jest.fn(),
    createCity: jest.fn(),
    updateCity: jest.fn(),
    deleteCity: jest.fn(),
  }

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CityController],
      providers: [{ provide: CityService, useValue: mockService }],
    }).compile();

    cityController = module.get<CityController>(CityController)
  });

  beforeEach(() => {
    mockService.createCity.mockReset();
    mockService.deleteCity.mockReset();
    mockService.findById.mockReset();
    mockService.updateCity.mockReset();
  });

  describe('getById', () => {
    it('deveria retornar o resultado da busca e devolver um registro de dados de país', async () => {
      const city = TestStatic.cityData();
      mockService.findById.mockReturnValue(city);
      const foundCity = await cityController.getById(city.id);
      expect(foundCity).toMatchObject({ id: city.id });
      expect(mockService.findById).toHaveBeenCalledTimes(1);
    });

    it('deveria retornar uma exceção, pois o path param enviado não é um numérico', async () => {
      const anyValue = 'anyValue' as unknown as number;
      await cityController.getById(anyValue).catch((error: Error) => {
        expect(error).toMatchObject({
          message: 'FieldMustBeNumber',
        });
        expect(error).toBeInstanceOf(BadRequestException);
      });
    });
  })


})
