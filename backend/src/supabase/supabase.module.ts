/**
 * supabase.module.ts — Global Supabase Provider
 *
 * Provides a singleton SupabaseClient that can be injected
 * into any service across the application.
 */

import { Module, Global } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Global()
@Module({
  providers: [SupabaseService],
  exports: [SupabaseService],
})
export class SupabaseModule {}
