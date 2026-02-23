/**
 * contact.service.ts — Contact Business Logic
 *
 * Inserts a new message into the Supabase `messages` table.
 */

import { Injectable, Logger } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(private readonly supabaseService: SupabaseService) {}

  /**
   * Retrieves all messages from the database, newest first.
   */
  async getMessages() {
    const supabase = this.supabaseService.getClient();

    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      this.logger.error(`Failed to fetch messages: ${error.message}`);
      throw new Error(error.message);
    }

    return data;
  }

  /**
   * Persists a contact form submission to the database.
   */
  async saveMessage(dto: CreateMessageDto) {
    const supabase = this.supabaseService.getClient();

    const { data, error } = await supabase
      .from('messages')
      .insert({
        name: dto.name,
        email: dto.email,
        content: dto.content,
      })
      .select()
      .single();

    if (error) {
      this.logger.error(`Failed to insert message: ${error.message}`);
      throw new Error(error.message);
    }

    this.logger.log(`Message saved from ${dto.email}.`);
    return data;
  }
}
