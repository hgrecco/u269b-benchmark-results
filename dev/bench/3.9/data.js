window.BENCHMARK_DATA = {
  "lastUpdate": 1669425219004,
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
        "date": 1669425218798,
        "tool": "pytest",
        "benches": [
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x+y]",
            "value": 151154.8713853961,
            "unit": "iter/sec",
            "range": "stddev: 4.0041746904946785e-7",
            "extra": "mean: 6.615731208889213 usec\nrounds: 23096"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[cos(z)]",
            "value": 120981.6758011103,
            "unit": "iter/sec",
            "range": "stddev: 8.093110186902138e-7",
            "extra": "mean: 8.265714566923055 usec\nrounds: 3556"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x * cos(z) + y]",
            "value": 99199.73574139284,
            "unit": "iter/sec",
            "range": "stddev: 5.261240371870809e-7",
            "extra": "mean: 10.080672015164778 usec\nrounds: 35337"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x+y]",
            "value": 191363.13322618764,
            "unit": "iter/sec",
            "range": "stddev: 0.00000503795637794017",
            "extra": "mean: 5.225666946088403 usec\nrounds: 39369"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-cos(z)]",
            "value": 180537.56722190694,
            "unit": "iter/sec",
            "range": "stddev: 3.2246646280899146e-7",
            "extra": "mean: 5.539013377591682 usec\nrounds: 47617"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x * cos(z) + y]",
            "value": 73364.30873494621,
            "unit": "iter/sec",
            "range": "stddev: 5.185585904673173e-7",
            "extra": "mean: 13.630606179536752 usec\nrounds: 31847"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_ast[math-x+y]",
            "value": 172747.56925736702,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012527383443800633",
            "extra": "mean: 5.788793464932381 usec\nrounds: 34246"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_ast[math-cos(z)]",
            "value": 167284.6403728365,
            "unit": "iter/sec",
            "range": "stddev: 2.799910230103743e-7",
            "extra": "mean: 5.9778351304175015 usec\nrounds: 44053"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_ast[math-x * cos(z) + y]",
            "value": 67538.61408473729,
            "unit": "iter/sec",
            "range": "stddev: 4.915155376868354e-7",
            "extra": "mean: 14.806344689651915 usec\nrounds: 29499"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x+y]",
            "value": 301974.0875657047,
            "unit": "iter/sec",
            "range": "stddev: 2.1067717982511786e-7",
            "extra": "mean: 3.311542417633487 usec\nrounds: 74627"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-cos(z)]",
            "value": 266761.8813658059,
            "unit": "iter/sec",
            "range": "stddev: 2.536001260054161e-7",
            "extra": "mean: 3.7486615212040637 usec\nrounds: 63292"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x * cos(z) + y]",
            "value": 114486.61166799477,
            "unit": "iter/sec",
            "range": "stddev: 4.3683414292210894e-7",
            "extra": "mean: 8.734645784608842 usec\nrounds: 29499"
          }
        ]
      }
    ]
  }
}