import { Controller, Get, Param, Query } from '@nestjs/common';
import { GameService } from '../services/game.service';

@Controller('admin/games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  getAllGames() {
    return this.gameService.getAllGames();
  }

  @Get(':slug/players')
  getPlayerList(
    @Param('slug') slug: string,
    @Query()
    query: {
      limit?: number;
      page?: number;
      id?: string;
      account?: string;
      nickname?: string;
    },
  ) {
    return this.gameService.getPlayerList(slug, query);
  }
}
