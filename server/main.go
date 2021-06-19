package main

import (
	"encoding/json"
	"flag"
	"io/ioutil"
	"math/rand"
	"net/http"
	"strconv"
)

func panicIfErr(err error) {
	if err != nil {
		panic(err)
	}
}

type Point struct {
	X int `json:"x"`
	Y int `json:"y"`
}

func main() {
	port := flag.Int("port", 8081, "port")
	flag.Parse()

	http.HandleFunc("/api", func(w http.ResponseWriter, r *http.Request) {
		b, err := ioutil.ReadAll(r.Body)
		panicIfErr(err)
		defer r.Body.Close()

		// This handler moves given points randomly a little.
		var points []*Point
		panicIfErr(json.Unmarshal(b, &points))

		for _, point := range points {
			point.X += rand.Intn(3) - 1
			point.Y += rand.Intn(3) - 1
		}

		b, err = json.Marshal(points)
		panicIfErr(err)

		_, err = w.Write(b)
		panicIfErr(err)
	})

	http.ListenAndServe(":"+strconv.Itoa(*port), nil)
}
