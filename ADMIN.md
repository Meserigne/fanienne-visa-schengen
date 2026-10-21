# Back-office Tukki Consulting

Interface d’administration pour gérer les demandes, formules, textes et coordonnées.

## Accès local

1. Configurer `.env` (voir `.env.example`)
2. Initialiser la base :

```bash
npm run db:setup
```

3. Lancer le site : `npm run dev`
4. Ouvrir : [http://localhost:3000/admin](http://localhost:3000/admin)

### Identifiants par défaut (seed)

- **Email :** `admin@tukkiconsulting.com`
- **Mot de passe :** valeur de `ADMIN_PASSWORD` (défaut seed : `TukkiAdmin2026!`)

Changez-les immédiatement en production.

## Fonctionnalités

| Section | Contenu |
|--------|---------|
| **Tableau de bord** | Compteurs + dernières demandes |
| **Demandes** | Leads du formulaire (statut, notes, suppression) |
| **Photos** | Remplacer toutes les images du site (URL ou upload) |
| **Formules** | CRUD des packs affichés sur l’accueil |
| **Contenus** | Blocs de texte FR/EN éditables |
| **Paramètres** | Email, WhatsApp, adresse + changement de mot de passe |

Les demandes du formulaire public sont enregistrées automatiquement dans **Demandes**.

### Photos

Dans **Photos**, chaque emplacement a un libellé clair (Hero, Professionnels, Étudiants…).  
Vous pouvez :

1. Coller une URL (Unsplash, CDN…) puis **Enregistrer**
2. Ou **Upload** un fichier JPG/PNG/WebP

Sur Vercel, les fichiers uploadés localement ne persistent pas : préférez une URL externe ou Vercel Blob.

## Production (Vercel)

SQLite local ne convient pas à Vercel (filesystem éphémère). Utilisez **PostgreSQL** (Neon, Prisma Postgres, Vercel Postgres) :

1. Créez une base Postgres et copiez `DATABASE_URL`
2. Dans `prisma/schema.prisma`, passez `provider = "postgresql"`
3. Ajoutez sur Vercel les variables :

- `DATABASE_URL`
- `AUTH_SECRET` (long secret aléatoire)
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` / `ADMIN_NAME`
- les variables contact / email déjà utilisées

4. Redéployez, puis une fois :

```bash
npx prisma db push
npm run db:seed
```

(ou via un job one-off / machine locale pointant sur la `DATABASE_URL` de prod)

## Sécurité

- `/admin` est protégé par cookie de session (JWT)
- Ne committez jamais `.env`
- Utilisez un `AUTH_SECRET` fort en production
