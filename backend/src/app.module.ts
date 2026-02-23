/**
 * app.module.ts — Root Application Module
 *
 * Imports all feature modules and the shared Supabase module.
 */

import { Module } from '@nestjs/common';
import { SupabaseModule } from './supabase/supabase.module';
import { ProfileModule } from './profile/profile.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    SupabaseModule,   // Shared Supabase client provider
    ProfileModule,    // GET /projects
    ContactModule,    // POST /contact
  ],
})
export class AppModule {}
