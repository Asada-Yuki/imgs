/**
 * GET /file/{filename}
 */

async function handleRequest(context) {
    const { request, env, params } = context;
    const url = new URL(request.url);

    const res_img = await fetch('https://telegra.ph/' + url.pathname + url.search, {
        method: request.method,
        headers: request.headers,
        body: request.body,
    });

    const Referer = request.headers.get('Referer') || "Referer"

    try {
        if (Referer == url.origin + "/admin" || Referer == url.origin + "/list") {
            return res_img;
        } else {
            return res_img;
        }
    } catch (error) {
        console.log(error);
        return res_img;
    }
}

export async function onRequestGet(context) {
    try {
        return await handleRequest(context);
    } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
