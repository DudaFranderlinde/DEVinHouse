import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCityDto } from '../dto/create-city.dto';
import { CityRepository } from '../city.repository';
import { CityEntity } from '../entities/city.entity';
import { UpdateResult } from 'typeorm';

@Injectable()
export class CityService {
  constructor(private readonly cityRepository: CityRepository) {}

  async findById(id: number): Promise<CityEntity> {
    const foundCity = await this.cityRepository.getById(id);
    if (!foundCity) {
      throw new NotFoundException('cityNotFound');
    }

    return foundCity;
  }

  async createCity(newCity: CreateCityDto): Promise<void> {
    if (await this.findById(newCity.state_id)) {
      throw new ConflictException('Essa cidade já está cadastrada!');
    }
    await this.cityRepository.createCity(newCity);
  }

  async deleteCity(id: number): Promise<string> {
    const foundCity = await this.cityRepository.getById(id);
    if (!foundCity) {
      throw new NotFoundException(
        'Não foi encontrada nenhuma cidade com este Id',
      );
    }

    await this.cityRepository.deleteCity(id);

    return 'Cidade excluída com sucesso!';
  }

  async updateCity(
    cityId: number,
    updateCityDTO: CreateCityDto,
  ): Promise<UpdateResult> {
    const updatedCity = await this.cityRepository.updateCity(
      cityId,
      updateCityDTO.name,
      updateCityDTO.state_id,
    );

    if (!updatedCity) {
      throw new NotFoundException('Não achamos uma cidade com este Id!');
    }

    return updatedCity;
  }

  async findCity(cityDTO: CreateCityDto): Promise<CityEntity[]> {
    const foundCity = await this.cityRepository.findCityBy(
      cityDTO.name,
      cityDTO.state_id,
    );

    if (!foundCity) {
      throw new NotFoundException(
        'Não encontramos nenhuma cidade com estes dados',
      );
    }

    return foundCity;
  }
}
