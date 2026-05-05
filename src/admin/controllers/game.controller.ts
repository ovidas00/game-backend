import { Controller, Get, Param, Query } from '@nestjs/common';
import { GameService } from '../services/game.service';

@Controller('admin/games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get(':slug/players')
  getPlayerList(
    @Param('slug') slug: string,
    @Query() query: { limit: number; page: number },
  ) {
    return this.gameService.getPlayerList(slug, query);
  }
}
