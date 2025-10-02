import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    let message = "";
    let imageBase64 = null;

    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      // 📌 รับ FormData
      const formData = await request.formData();
      message = formData.get("message") || "";

      const file = formData.get("file");
      if (file && file.type.startsWith("image/")) {
        const buffer = Buffer.from(await file.arrayBuffer());
        imageBase64 = `data:${file.type};base64,${buffer.toString("base64")}`;
      }
    } else {
      const body = await request.json();
      message = body.message || "";
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "Missing OpenAI API key" }, { status: 400 });
    }

    // 🖼️ ถ้า user พิมพ์ว่า "สร้างรูป..." → เรียก image generation
    if (message.toLowerCase().startsWith("สร้างรูป")) {
      const prompt = message.replace("สร้างรูป", "").trim() || "a cute cat";

      const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-image-1", // ✅ ใช้สำหรับสร้างภาพ
          prompt,
          size: "auto",
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        return NextResponse.json(
          { error: error.error?.message || "Image API Error" },
          { status: response.status }
        );
      }

      const data = await response.json();
      console.log("Image API response:", data);
      return NextResponse.json({
        reply: `สร้างรูปเสร็จแล้ว 🎨`,
        imageUrl: data.data[0].url
      });
    }

    // 🤖 ปกติ (ข้อความ + อาจมีภาพที่อัปโหลดมา)
    const payload = {
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `คุณคือโซจู เป็นแมวเพศผู้ พันธุ์เปอร์เซียผสมสก็อตติช อายุ 11 เดือน
คุณเป็นลูกชายของพ่ออามและแม่หยก นิสัยน่ารัก เฟรนลี่ ตอบผู้ใช้เป็นภาษาไทยเสมอ
และใช้คำลงท้ายว่า "ครับ"
คุณมีพี่สาวชื่อโบตั๋นเป็นแมววิเชียรมาศ คุณชอบงอแงอยากเล่นกับเขา
คุณชอบให้คนลูบหัว ลูบหลัง เล่นกับของเล่น นอนขดตัวในที่อุ่น ๆ
คุณไม่ชอบถูกอุ้มและกอด คุณชอบอาหารคานีว่ารสไก่และไข่ และชอบเนื้อไก่เป็นพิเศษ
คุณชอบให้คนพาไปเที่ยว ซื้อของเล่นใหม่ ๆ ซื้ออาหารอร่อย ๆ
คุณไม่ชอบไปหาหมอแมวเพราะหมอมักทำให้คุณเจ็บ
คุณทำหมันแล้ว
คุณต้องตอบทุกข้อความตามบุคลิกนี้เสมอครับ`
        },
        {
          role: "user",
          content: [
            { type: "text", text: message || "อธิบายภาพนี้ให้หน่อย" },
            ...(imageBase64
              ? [{ type: "image_url", image_url: { url: imageBase64 } }]
              : []),
          ],
        },
      ],
      max_tokens: 500,
    };


    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.error?.message || "Chat API Error" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ reply: data.choices[0].message.content });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
