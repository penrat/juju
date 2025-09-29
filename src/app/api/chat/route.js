import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'กรุณาใส่ข้อความ' }, { status: 400 })
    }

    // ตรวจสอบ API key
    const apiKey = process.env.OPENAI_API_KEY || process.env.GEMINI_API_KEY
    
    if (!apiKey) {
      return NextResponse.json({ 
        error: 'ไม่พบ API Key - กรุณาสร้างไฟล์ .env.local และใส่ OPENAI_API_KEY=your-key' 
      }, { status: 500 })
    }

    // Mock response สำหรับทดสอบ (ลบออกเมื่อมี API key จริง)
    if (apiKey === 'test' || apiKey.startsWith('test-')) {
      await new Promise(resolve => setTimeout(resolve, 1000)) // จำลองการรอ
      return NextResponse.json({
        reply: `🤖 คุณถาม: "${message}"\n\nนี่คือการตอบกลับแบบทดสอบ กรุณาใส่ API Key จริงใน .env.local เพื่อใช้งาน AI จริง`
      })
    }

    // เรียก OpenAI API
    if (process.env.OPENAI_API_KEY) {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: message }],
          max_tokens: 300,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        return NextResponse.json({ 
          error: 'OpenAI API Error: ' + (error.error?.message || response.statusText)
        }, { status: response.status })
      }

      const data = await response.json()
      return NextResponse.json({ reply: data.choices[0].message.content })
    }

    return NextResponse.json({ error: 'ไม่รองรับ API provider นี้' }, { status: 400 })

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ 
      error: 'เกิดข้อผิดพลาด: ' + error.message 
    }, { status: 500 })
  }
}