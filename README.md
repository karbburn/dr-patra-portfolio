# Dr. Soumya Prakash Bhargava Portfolio

Official portfolio website for Dr. Soumya Prakash Bhargava, Assistant Professor of Law & IPR at IIM Bodh Gaya.

**Live Site**: https://dr-patra-portfolio.vercel.app

---

## Quick Start (For Developers)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

---

## How to Edit This Website (GitHub Web)

You can edit this website directly from your browser using GitHub's web interface - no technical setup required!

### Step-by-Step Guide

**Step 1: Go to the File**
1. Open: https://github.com/karbburn/dr-patra-portfolio
2. Click the **"Go to file"** button (near the top)
3. Type: `src/data/profile.ts`
4. Press Enter

**Step 2: Edit the File**
1. Click the **pencil icon** (top right of the file content)
2. Make your changes (see guidelines below)
3. Click **"Commit changes"** (green button at bottom)

**Step 3: Done!**
- The site will auto-deploy on Vercel within ~1 minute
- Your changes will be live!

---

## What You Can Edit

All website data is in **`src/data/profile.ts`**.

| Section | What You Can Update | Example |
|---------|---------------------|---------|
| **Name** | Your full name | `'Dr. Soumya Prakash Bhargava'` |
| **Title** | Your job title | `'Assistant Professor'` |
| **Institution** | Where you work | `'IIM Bodh Gaya'` |
| **Bio** | Your biography | Edit the text inside backticks |
| **Email** | Your email | `'email@example.com'` |
| **Research Interests** | Add/remove interests | Edit the list in brackets |
| **Publications** | Add journal articles | Add entries to publications array |
| **Book Chapters** | Add book chapters | Add entries to bookChapters array |
| **Patents** | Add patents | Add entries to patents array |

---

## IMPORTANT: How to Edit Safely

### ❌ What NOT to Do
- Do NOT add or remove brackets `{ }`
- Do NOT add or remove square brackets `[ ]`
- Do NOT add or remove parentheses `( )`
- Do NOT add or remove commas `,`
- Do NOT change text outside of quotes `' '` or backticks `` ` ` ``

### ✅ What You CAN Do
- Change text **inside quotes**: `'Old Name'` → `'New Name'`
- Change text **inside backticks**: `` `old text` `` → `` `new text` ``
- Add new items to an existing list (follow the same pattern)

### Examples

| You Want to Change | Correct | Wrong |
|--------------------|---------|-------|
| Change name | `name: 'New Name'` | `name: { value: 'New Name' }` |
| Change title | `title: 'Professor'` | `title: ('Professor')` |
| Add interest | `'New Interest',` (in list) | Add new brackets |

---

## How to Add New Publications

Find the `publications` array in the file and add a new entry following this format:

```typescript
{
  id: 'pub-26',
  type: 'journal',
  title: 'Your Paper Title',
  authors: ['Dr. S.P. Bhargava', 'Co-author Name'],
  journalOrPublisher: 'Journal Name',
  year: 2024,
  doi: 'https://doi.org/...',
  category: 'A'
},
```

**Category options**: `'A'`, `'B'`, `'C'`, or `'SCOPUS'`

---

## How to Add New Book Chapters

Find the `bookChapters` array and add:

```typescript
{
  id: 'bc-4',
  type: 'book',
  title: 'Your Chapter Title',
  authors: ['Dr. S.P. Bhargava', 'Co-author'],
  journalOrPublisher: 'Book Publisher',
  year: 2024,
  doi: 'https://doi.org/...'
},
```

---

## How to Add New Patents

**Step 1: Upload the PDF**
- Upload the patent certificate PDF to the `public/Patents/` folder
- Filename format: `IN-{number}_B.pdf` (e.g., `IN-560757_B.pdf`)

**Step 2: Add the Patent Entry**

Find the `patents` array and add:

```typescript
{
  id: 'pat-26',
  title: 'Patent Title',
  patentNumber: 'IN123456',
  grantDate: '1st January 2024',
  pdfUrl: '/Patents/IN-123456_B.pdf'
},
```

---

## After Editing (Summary)

1. Click **"Commit changes"** (green button)
2. Add a short commit message (e.g., "Update publications")
3. Click **"Commit changes"**
4. Wait ~1 minute for Vercel to deploy
5. Check your live site!

---

## Questions?

Contact: karbburn@gmail.com

---

Built with Next.js + Tailwind CSS
