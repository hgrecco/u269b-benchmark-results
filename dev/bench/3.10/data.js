window.BENCHMARK_DATA = {
  "lastUpdate": 1670035984451,
  "repoUrl": "https://github.com/hgrecco/u269b",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "hernan.grecco@gmail.com",
            "name": "Hernan",
            "username": "hgrecco"
          },
          "committer": {
            "email": "hernan.grecco@gmail.com",
            "name": "Hernan",
            "username": "hgrecco"
          },
          "distinct": true,
          "id": "a6400e6616f863d1fac684bf092981df4a311248",
          "message": "Create bench by Python version",
          "timestamp": "2022-11-25T22:04:09-03:00",
          "tree_id": "0e92e53d805ce74df042e1a6a4fc83cbd3433a1b",
          "url": "https://github.com/hgrecco/u269b/commit/a6400e6616f863d1fac684bf092981df4a311248"
        },
        "date": 1669425217944,
        "tool": "pytest",
        "benches": [
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x+y]",
            "value": 144029.10099131786,
            "unit": "iter/sec",
            "range": "stddev: 5.07515544644079e-7",
            "extra": "mean: 6.943041323713327 usec\nrounds: 5953"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[cos(z)]",
            "value": 120147.55399131424,
            "unit": "iter/sec",
            "range": "stddev: 7.73396905419433e-7",
            "extra": "mean: 8.323099112548661 usec\nrounds: 32680"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x * cos(z) + y]",
            "value": 95820.81646615524,
            "unit": "iter/sec",
            "range": "stddev: 5.079037985533692e-7",
            "extra": "mean: 10.436145681906277 usec\nrounds: 32468"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x+y]",
            "value": 201449.84380193413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045255953631874515",
            "extra": "mean: 4.964014769766721 usec\nrounds: 47394"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-cos(z)]",
            "value": 183902.53545206512,
            "unit": "iter/sec",
            "range": "stddev: 3.5688441758922787e-7",
            "extra": "mean: 5.437662931301204 usec\nrounds: 43104"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x * cos(z) + y]",
            "value": 75065.04805880382,
            "unit": "iter/sec",
            "range": "stddev: 4.6934855999124657e-7",
            "extra": "mean: 13.32177925492872 usec\nrounds: 31747"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_ast[math-x+y]",
            "value": 171164.3764247206,
            "unit": "iter/sec",
            "range": "stddev: 3.3600048393463563e-7",
            "extra": "mean: 5.842337178377813 usec\nrounds: 37452"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_ast[math-cos(z)]",
            "value": 165147.1516013604,
            "unit": "iter/sec",
            "range": "stddev: 3.077531682836595e-7",
            "extra": "mean: 6.055205859159138 usec\nrounds: 44443"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_ast[math-x * cos(z) + y]",
            "value": 66825.4318999299,
            "unit": "iter/sec",
            "range": "stddev: 6.285131964881376e-7",
            "extra": "mean: 14.96436269199854 usec\nrounds: 27624"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x+y]",
            "value": 311987.5626663809,
            "unit": "iter/sec",
            "range": "stddev: 2.3090854417518156e-7",
            "extra": "mean: 3.2052559770446187 usec\nrounds: 76331"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-cos(z)]",
            "value": 266279.90148491797,
            "unit": "iter/sec",
            "range": "stddev: 2.3064682869045295e-7",
            "extra": "mean: 3.7554467852191236 usec\nrounds: 58480"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x * cos(z) + y]",
            "value": 115779.23389837869,
            "unit": "iter/sec",
            "range": "stddev: 3.6706389335797057e-7",
            "extra": "mean: 8.63712745653263 usec\nrounds: 31446"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernan.grecco@gmail.com",
            "name": "Hernan",
            "username": "hgrecco"
          },
          "committer": {
            "email": "hernan.grecco@gmail.com",
            "name": "Hernan",
            "username": "hgrecco"
          },
          "distinct": true,
          "id": "bd1195b94c357078bee46a6bc59f532c704d44df",
          "message": "Add testsuit common",
          "timestamp": "2022-12-02T23:52:28-03:00",
          "tree_id": "6c3ca0bbd4ab740a2f49937ab64038d21d8f7ad5",
          "url": "https://github.com/hgrecco/u269b/commit/bd1195b94c357078bee46a6bc59f532c704d44df"
        },
        "date": 1670035983937,
        "tool": "pytest",
        "benches": [
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x+y]",
            "value": 149640.6751717484,
            "unit": "iter/sec",
            "range": "stddev: 4.628795810607711e-7",
            "extra": "mean: 6.68267500699433 usec\nrounds: 22422"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[cos(z)]",
            "value": 125288.80591199068,
            "unit": "iter/sec",
            "range": "stddev: 5.024643368675407e-7",
            "extra": "mean: 7.9815590285252735 usec\nrounds: 29850"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x * cos(z) + y]",
            "value": 98866.83742683927,
            "unit": "iter/sec",
            "range": "stddev: 5.499868768407527e-7",
            "extra": "mean: 10.114615031961478 usec\nrounds: 27701"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x+y]",
            "value": 145951.3729456289,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044992182933505524",
            "extra": "mean: 6.851597075229494 usec\nrounds: 30770"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-cos(z)]",
            "value": 169805.61207051275,
            "unit": "iter/sec",
            "range": "stddev: 4.307639393839582e-7",
            "extra": "mean: 5.889086867074477 usec\nrounds: 38461"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x * cos(z) + y]",
            "value": 63763.6201246836,
            "unit": "iter/sec",
            "range": "stddev: 6.443986267662935e-7",
            "extra": "mean: 15.682923868572654 usec\nrounds: 19532"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x+y]",
            "value": 305554.4672128047,
            "unit": "iter/sec",
            "range": "stddev: 9.951476505128565e-7",
            "extra": "mean: 3.272738929729166 usec\nrounds: 67568"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-cos(z)]",
            "value": 294695.5674080977,
            "unit": "iter/sec",
            "range": "stddev: 2.4569515817495253e-7",
            "extra": "mean: 3.3933323422377404 usec\nrounds: 56177"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x * cos(z) + y]",
            "value": 118380.10427137928,
            "unit": "iter/sec",
            "range": "stddev: 5.033563224758303e-7",
            "extra": "mean: 8.447365426436525 usec\nrounds: 34483"
          }
        ]
      }
    ]
  }
}