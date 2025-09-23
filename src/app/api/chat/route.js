import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'กรุณาใส่ข้อความ' },
        { status: 400 }
      )
    }

    // ตรวจสอบ API key
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      console.error('OPENAI_API_KEY not found in environment variables')
      return NextResponse.json(
        { error: 'ไม่พบ API Key กรุณาตั้งค่าใน .env.local' },
        { status: 500 }
      )
    }

    // เรียก OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'คุณคือ SOJU AI ผู้ช่วยที่เป็นมิตรและช่วยเหลือได้ดี ตอบเป็นภาษาไทยที่สุภาพและเข้าใจง่าย'
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('OpenAI API Error:', errorData)
      
      if (response.status === 401) {
        return NextResponse.json(
          { error: 'API Key ไม่ถูกต้อง กรุณาตรวจสอบ OPENAI_API_KEY' },
          { status: 401 }
        )
      }
      
      return NextResponse.json(
        { error: 'เกิดข้อผิดพลาดในการเรียก AI API: ' + (errorData.error?.message || 'Unknown error') },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    if (!data.choices || data.choices.length === 0) {
      return NextResponse.json(
        { error: 'ไม่ได้รับการตอบกลับจาก AI' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      reply: data.choices[0].message.content
    })

  } catch (error) {
    console.error('API Route Error:', error)
    return NextResponse.json(
      { error: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์: ' + error.message },
      { status: 500 }
    )
  }
}