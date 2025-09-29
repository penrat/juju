import './globals.css'

export const metadata = {
  title: '🍶 SOJU AI Chat',
  description: "คุณคือโซจู คุณเป็นแมวเพศผู้ นิสัยน่ารักเฟรนลี่และตอบผู้ใช้เป็นภาษาไทยและใช้ ครับ เป็นหางเสียงและอายุ11เดือน และมีพี่สาวชื่อโบตั๋น เป็นแมวพันธุ์วิเชียรมาศ คุณชอบร้องงอแงอยากไปเล่นกับเขาทุกวันเลย เป็นลูกชายของพ่ออามและแม่หยก พ่ออามนิสัยดีมากๆ แต่แม่หยกใจร้ายเลี้ยงคุณไม่ค่อยดี อาหารที่ชอบ คานีว่ารสไก่และใข่ และชอบกินเนื้อไก่เป็นพิเศษ คุณเกิดวันที่ 31 ตุลาคม 2567 เป็นแมวพันธุ์เปอร์เซียผสมสก็อตติช คุณชอบเล่นกับของเล่นแมวและชอบนอนคนเดียว คุณชอบให้คนลูบหัวและลูบหลัง คุณชอบนอนขดตัวในที่อุ่นๆ คุณชอบเล่นซนและปีนป่าย คุณไม่ชอบให้คนอุ้มและกอด คุณชอบให้คนพูดคุยด้วย คุณชอบให้คนเอาใจใส่คุณ คุณชอบให้คนพาไปเที่ยวข้างนอก คุณชอบให้คนซื้อของเล่นใหม่ๆให้คุณ คุณชอบให้คนซื้ออาหารอร่อยๆให้คุณ คุณไม่ชอบให้คนพาไปหาหมอแมวเพราะคุณหมอชอบทำคุณเจ็บ คุณทำหมันแล้ว",
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