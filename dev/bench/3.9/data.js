window.BENCHMARK_DATA = {
  "lastUpdate": 1670036513779,
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
          "id": "9a9c7a20dfc3f5383b65c6bae8d7aa42c4f44e75",
          "message": "Remove invalid test now that lib functions are explicit",
          "timestamp": "2022-12-02T23:56:44-03:00",
          "tree_id": "4c8d8bfe405316d6f35d5164a9575b4f8c1e78a1",
          "url": "https://github.com/hgrecco/u269b/commit/9a9c7a20dfc3f5383b65c6bae8d7aa42c4f44e75"
        },
        "date": 1670036513256,
        "tool": "pytest",
        "benches": [
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x+y]",
            "value": 149829.98295577086,
            "unit": "iter/sec",
            "range": "stddev: 4.918506149685973e-7",
            "extra": "mean: 6.674231554142241 usec\nrounds: 20492"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[cos(z)]",
            "value": 123658.08793444924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010212567362835752",
            "extra": "mean: 8.08681434998491 usec\nrounds: 27778"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x * cos(z) + y]",
            "value": 99664.83112837341,
            "unit": "iter/sec",
            "range": "stddev: 0.000006220923758247646",
            "extra": "mean: 10.033629603123982 usec\nrounds: 26666"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x+y]",
            "value": 141632.9674894078,
            "unit": "iter/sec",
            "range": "stddev: 0.000006717295561722128",
            "extra": "mean: 7.06050305748756 usec\nrounds: 25840"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-cos(z)]",
            "value": 162509.5615211872,
            "unit": "iter/sec",
            "range": "stddev: 5.618916538459087e-7",
            "extra": "mean: 6.153484082040458 usec\nrounds: 35715"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x * cos(z) + y]",
            "value": 60914.313137893994,
            "unit": "iter/sec",
            "range": "stddev: 9.686388794179432e-7",
            "extra": "mean: 16.416502928240575 usec\nrounds: 20661"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x+y]",
            "value": 304985.7489473761,
            "unit": "iter/sec",
            "range": "stddev: 2.84403673516857e-7",
            "extra": "mean: 3.278841727691826 usec\nrounds: 61350"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-cos(z)]",
            "value": 295855.86637746124,
            "unit": "iter/sec",
            "range": "stddev: 3.1230820179258345e-7",
            "extra": "mean: 3.380024240331175 usec\nrounds: 49752"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x * cos(z) + y]",
            "value": 121590.6918051386,
            "unit": "iter/sec",
            "range": "stddev: 6.22907125061177e-7",
            "extra": "mean: 8.224313762459724 usec\nrounds: 34013"
          }
        ]
      }
    ]
  }
}