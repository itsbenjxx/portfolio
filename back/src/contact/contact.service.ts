import { Injectable } from '@nestjs/common';
import { UpdateContactDto } from './dto/update-contact.dto';
import {PrismaService} from "../prisma/prisma.service";
import * as nodemailer from "nodemailer";
import {ContactDto} from "./dto/contact.dto";

@Injectable()
export class ContactService {
  private transporter: nodemailer.Transporter;

  constructor(private readonly  prisma: PrismaService) {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.MAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      }
    })
  }

  async handleContactForm(contactDto: ContactDto) {
    const savedMessage = await this.create(contactDto)

    const { name, email, subject, message } = contactDto;

    try {
      await this.transporter.sendMail({
        from: `"${name}" <${process.env.MAIL_USER}>`,
        replyTo: email,
        to: process.env.MAIL_DESTINATION,
        subject: contactDto.subject,
        html: `
          <h2>Nouveau message depuis le portfolio</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Sujet :</strong>${subject}</p>
          <p><strong>Message :</strong></p>
          <p>${message}</p>
        `,
      })
    } catch (error) {
      console.log(error)
    }

    return { success: true, message: 'Message envoyé avec succès !.' };
  }

  async create(contactDto: ContactDto) {

    const { name, email, subject, message } = contactDto;
    return this.prisma.contactMessage.create({
      data: { name, email, subject, message }
    })
  }

  findAll() {
    return `This action returns all contact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contact`;
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}
