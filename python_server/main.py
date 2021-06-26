from fastapi import FastAPI
from typing import List
from pydantic import BaseModel

app = FastAPI()


class Point(BaseModel):
    x: int
    y: int


@app.get('/api')
def api(data: List[Point]):
    return data
