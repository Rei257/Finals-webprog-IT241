/**
 * profile.controller.ts — Projects REST Controller
 *
 * Exposes GET /projects to retrieve all portfolio projects.
 */

import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('projects')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  /**
   * GET /projects
   * Returns all projects ordered by creation date (newest first).
   */
  @Get()
  async findAll() {
    try {
      return await this.profileService.getAllProjects();
    } catch (error) {
      throw new HttpException(
        'Failed to fetch projects.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
