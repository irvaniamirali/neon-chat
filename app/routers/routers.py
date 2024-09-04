from fastapi import APIRouter, Response, status

from app.api import fetch_gpt_response

router = APIRouter(prefix="/models")


@router.get("/gpt", status_code=status.HTTP_207_MULTI_STATUS)
async def gpt(response: Response, prompt: str) -> str:
    """
    ChatGPT 3.5 API
    """
    return await fetch_gpt_response(prompt)
