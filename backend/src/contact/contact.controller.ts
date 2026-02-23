/**
 * contact.controller.ts — Contact REST Controller
 *
 * Exposes POST /contact to receive visitor messages.
 */

import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  /**
   * POST /contact
   * Accepts a JSON body { name, email, content } and stores it.
   */
  @Post()
  async create(@Body() createMessageDto: CreateMessageDto) {
    try {
      const result = await this.contactService.saveMessage(createMessageDto);
      return {
        success: true,
        message: 'Your message has been transmitted successfully.',
        data: result,
      };
    } catch (error) {
      throw new HttpException(
        'Failed to save message. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
