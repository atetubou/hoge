import random
from typing import Dict, List

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
from starlette.responses import RedirectResponse

app = FastAPI()


@app.get('/')
async def root():
    return RedirectResponse("./static/index.html")

app.mount("/static", StaticFiles(directory="dist"))


class Point(BaseModel):
    x: int
    y: int


@app.get('/hello', response_model=Dict[str, str])
async def hello():
    return {"message": "Hello World!"}


@app.post('/api', response_model=List[Point])
async def api(points: List[Point]):
    for point in points:
        point.x += random.randint(-1, 1)
        point.y += random.randint(-1, 1)
    return points
