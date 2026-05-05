import { BadRequestException, Injectable } from '@nestjs/common';
import { GameroomService } from 'src/game/gameroom.service';
import { MafiaService } from 'src/game/mafia.service';

@Injectable()
export class GameService {
  private serviceMap: Record<string, any>;

  constructor(
    private readonly gameroomService: GameroomService,
    private readonly mafiaService: MafiaService,
  ) {
    this.serviceMap = {
      gameroom: this.gameroomService,
      mafia: this.mafiaService,
    };
  }

  async getPlayerList(slug: string, query: { limit: number; page: number }) {
    const service = this.serviceMap[slug];
    const { limit, page } = query;

    if (!service) {
      throw new BadRequestException(`Unknown game slug: ${slug}`);
    }

    return service.getPlayerList(limit, page);
  }
}
