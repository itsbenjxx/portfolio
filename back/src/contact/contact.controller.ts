import {Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe} from '@nestjs/common';
import { ContactService } from './contact.service';
import { UpdateContactDto } from './dto/update-contact.dto';
import {ContactDto} from "./dto/contact.dto";

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('sendMessage')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async sendMessage(@Body() contactDto: ContactDto) {
    return this.contactService.handleContactForm(contactDto);
  }

  @Post()
  create(@Body() contactDto: ContactDto) {
    return this.contactService.create(contactDto);
  }

  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.update(+id, updateContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(+id);
  }
}
