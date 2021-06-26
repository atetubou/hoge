import random
from typing import Dict, List

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Point(BaseModel):
    x: int
    y: int


@app.get('/', response_model=Dict[str, str])
async def root():
    return {"message": "Hello World!"}


@app.post('/api', response_model=List[Point])
def api(points: List[Point]):
    for point in points:
        point.x += random.randint(-1, 1)
        point.y += random.randint(-1, 1)

    return points
