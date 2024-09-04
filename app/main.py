from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from app.routers import routers

app = FastAPI()

# templates = Jinja2Templates(directory="app/templates")

# Mount static files(e.g Css files, )
app.mount("/static", StaticFiles(directory="static"), name="static")


# @app.get("/", response_class=HTMLResponse)
# async def home(request: Request):
#     return templates.TemplateResponse("home.html")


app.include_router(routers.router)
