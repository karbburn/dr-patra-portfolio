# Dr. Soumya Prakash Bhargava Portfolio

Official portfolio website for Dr. Soumya Prakash Bhargava, Assistant Professor of Law & IPR at IIM Bodh Gaya.

**Live Site**: https://dr-patra-portfolio.vercel.app

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

---

## How to Edit This Website

All website data is in a single file: **`src/data/profile.ts`**

### What's in profile.ts

| Section | What You Can Update |
|---------|---------------------|
| **Profile Info** | Name, title, institution, bio, email, phone, address |
| **Research Interests** | Add/remove interests |
| **Publications** | Add new journal articles |
| **Book Chapters** | Add new book chapters |
| **Patents** | Add new patents |
| **Experience** | Add work history |
| **Education** | Add degrees |
| **Courses** | Add courses you teach |
| **Skills** | Add expertise areas |
| **Stats** | Publications count, patents count, years experience |

### Adding/Editing Patents

When adding a new patent:

1. **Upload the PDF certificate** to `public/Patents/` folder
   - Filename format: `IN-{patent_number}_B.pdf` (e.g., `IN-560757_B.pdf`)

2. **Add the patent entry** in `src/data/profile.ts`:
   ```typescript
   {
     id: 'pat-XX',
     title: 'Patent Title',
     patentNumber: 'IN123456',
     grantDate: '1st January 2024',
     pdfUrl: '/Patents/IN-123456_B.pdf',
   },
   ```

---

## After Editing

1. **Save** the file
2. **Commit** your changes:
   ```bash
   git add .
   git commit -m "Update profile data"
   ```
3. **Push** to GitHub:
   ```bash
   git push origin main
   ```

The site **auto-deploys** on Vercel within ~1 minute.

---

## Questions?

Contact: [your email]

Built with Next.js + Tailwind CSS
