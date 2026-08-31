import 'dotenv/config';
import { PrismaClient, ProjectSize } from '../src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
    await prisma.project.deleteMany();

    const projects = [
        {
            title: 'Nota Risques Urba',
            description: 'Une solution e-commerce de haute performance, conçue pour l\'évolutivité. Propose la création de documents dédiés au métier du notariat, des micro-interactions dynamiques et une interface sur mesure.',
            tags: ['Angular', 'Symfony', 'E-commerce'],
            linkText: 'Visiter le site',
            linkRef: 'https://www.nota-risques-urba.fr/',
            linkIcon: '→',
            image: '/img/nru-mockup.png',
            size: ProjectSize.large
        },
        {
            title: 'Natural Risks',
            description: 'Application web multiplateforme hybride proposant des fonctionnalitées propres aux diagnostiques immobilier.',
            tags: ['Angular', 'PWA', 'Symfony'],
            linkText: 'Visiter le site',
            linkRef: 'https://www.naturalsrisks.com/',
            linkIcon: '↗',
            image: 'img/nr-mockup.png',
            size: ProjectSize.medium
        },
        {
            title: 'ERP interne sur-mesure',
            description: 'Plateforme web de gestion centralisée multi-entités permettant l\'administration du portefeuille client, le suivi de la facturation et du cycle de vente, la gestion comptable, ainsi que le pilotage des campagnes de communication..',
            tags: ['Symfony', 'CRM', 'Architecture Multi-entités', 'Angular'],
            linkText: 'Projet interne (Accès restreint)',
            linkRef: '#',
            linkIcon: '</>',
            icon: 'picto/commercial.svg',
            size: ProjectSize.small
        },
        {
            title: 'Taï Dam Traiteur',
            description: 'Site vitrine sur-mesure pour un traiteur asiatique, intégrant une présentation immersive du savoir-faire culinaire et un module de prise de commande en ligne via un formulaire dynamique.',
            tags: ['Wordpress', 'UX/UI'],
            linkText: 'Visiter le site',
            linkRef: 'https://tai-dam-traiteur.fr/',
            linkIcon: '→',
            image: 'img/commercial-mockup.png',
            size: ProjectSize.horizontal
        }
    ];

    await prisma.project.createMany({
        data: projects,
    });

    console.log('✅ Base de données initialisée avec 4 projets !');
}

main()
    .catch((error) => {
        console.error('❌ Erreur lors du seeding :', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });