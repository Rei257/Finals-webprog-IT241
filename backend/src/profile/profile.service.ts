/**
 * profile.service.ts — Projects Business Logic
 *
 * Queries the Supabase `projects` table and returns results.
 */

import { Injectable, Logger } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class ProfileService {
  private readonly logger = new Logger(ProfileService.name);

  constructor(private readonly supabaseService: SupabaseService) {}

  /**
   * Retrieves all projects from the database, ordered by newest first.
   */
  async getAllProjects() {
    const supabase = this.supabaseService.getClient();

    const { data, error } = await supabase
      .from('projects')
      .select('id, title, description, tech_stack, link, image_url, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      this.logger.error(`Supabase query failed: ${error.message}`);
      throw new Error(error.message);
    }

    this.logger.log(`Fetched ${data.length} projects.`);
    return data;
  }
}
