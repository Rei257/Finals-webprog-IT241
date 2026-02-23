/**
 * supabase.service.ts — Supabase Client Integration
 *
 * Creates and exposes a Supabase client instance using
 * environment variables SUPABASE_URL and SUPABASE_KEY.
 */

import { Injectable, Logger } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private readonly logger = new Logger(SupabaseService.name);
  private client: SupabaseClient;

  constructor() {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_KEY;

    if (!url || !key) {
      this.logger.error(
        'Missing SUPABASE_URL or SUPABASE_KEY environment variables.',
      );
      throw new Error('Supabase credentials are not configured.');
    }

    this.client = createClient(url, key);
    this.logger.log('Supabase client initialized successfully.');
  }

  /** Returns the Supabase client for database operations. */
  getClient(): SupabaseClient {
    return this.client;
  }
}
