/**
 * create-message.dto.ts — Data Transfer Object for Contact Messages
 *
 * Validates incoming POST /contact payloads using class-validator.
 */

import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required.' })
  @MaxLength(255)
  name: string;

  @IsEmail({}, { message: 'Please provide a valid email address.' })
  @IsNotEmpty({ message: 'Email is required.' })
  @MaxLength(255)
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Message content is required.' })
  @MaxLength(5000)
  content: string;
}
