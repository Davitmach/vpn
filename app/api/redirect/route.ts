// pages/api/redirect.ts

export async function POST(request: Request) {
    try {
      const { url } = await request.json();  // Получаем URL из тела запроса
  
      if (!url) {
        return new Response(JSON.stringify({ error: "URL parameter is required" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      // Формируем редирект на deeplink
      return new Response(null, {
        status: 302,
        headers: {
          Location: url,  // Перенаправляем на переданный URL
        },
      });
    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({ error: "Something went wrong" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  