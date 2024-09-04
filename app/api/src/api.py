from fastapi import HTTPException, status

import aiohttp
import user_agent


async def http_request(url, data, headers):

    async with aiohttp.ClientSession() as session:
        async with session.get(url, json=data, headers=headers) as response:
            response_data = await response.text()
            if not response.ok:
                return None
            return response_data


async def fetch_gpt_response(prompt):
    """
    ChatGPT 3.5 API
    """
    host = "https://api.binjie.fun/api/generateStream"
    data = {
        "prompt": prompt,
        "userId": "#/chat/1724442116057",
        "network": True,
        "system": "",
        "withoutContext": False,
        "stream": False
    }
    headers = {
        "User-Agent": user_agent.generate_user_agent(),
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Referer": "https://chat18.aichatos8.com/",
        "Origin": "https://chat18.aichatos8.com"
    }
    query_response = await http_request(host, data, headers)
    if not query_response:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="A problem has occurred."
        )
    return query_response
