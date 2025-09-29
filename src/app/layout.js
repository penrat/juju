import './globals.css'

export const metadata = {
  title: '🍶 SOJU AI Chat',
  description: 'โซจู AI ผู้ช่วยแชทภาษาไทย เป็นแมวที่น่ารักและช่วยเหลือได้ดี ตอบเป็นภาษาไทยที่สุภาพและเข้าใจง่าย โดยใช้ OpenAI GPT-4o-mini',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}