import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ContactDto {
    @IsString()
    @IsNotEmpty({ message: 'Le nom est obligatoire.' })
    name!: string;

    @IsEmail({}, { message: 'L\'adresse e-mail est invalide.' })
    @IsNotEmpty({ message: 'L\'e-mail est obligatoire.' })
    email!: string;

    @IsString()
    @IsNotEmpty({ message: 'Le sujet ne peut pas être vide.' })
    @MinLength(10, { message: 'Le sujet doit faire au moins 5 caractères.' })
    subject!: string;

    @IsString()
    @IsNotEmpty({ message: 'Le message ne peut pas être vide.' })
    @MinLength(10, { message: 'Le message doit faire au moins 10 caractères.' })
    message!: string;
}