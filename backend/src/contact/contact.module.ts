/**
 * contact.module.ts — Contact Feature Module
 *
 * Handles the contact form submission endpoint.
 */

import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';

@Module({
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
