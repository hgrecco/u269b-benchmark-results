window.BENCHMARK_DATA = {
  "lastUpdate": 1669425219932,
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
        "date": 1669425219746,
        "tool": "pytest",
        "benches": [
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x+y]",
            "value": 159823.68870953977,
            "unit": "iter/sec",
            "range": "stddev: 6.097301272139478e-7",
            "extra": "mean: 6.256894757430978 usec\nrounds: 20619"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[cos(z)]",
            "value": 134653.55673041442,
            "unit": "iter/sec",
            "range": "stddev: 6.883282937314634e-7",
            "extra": "mean: 7.426465548192447 usec\nrounds: 27778"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x * cos(z) + y]",
            "value": 104683.03460450144,
            "unit": "iter/sec",
            "range": "stddev: 7.838169758649409e-7",
            "extra": "mean: 9.552646269551296 usec\nrounds: 1716"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x+y]",
            "value": 194819.21802632947,
            "unit": "iter/sec",
            "range": "stddev: 4.83260149742504e-7",
            "extra": "mean: 5.132963832473918 usec\nrounds: 36497"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-cos(z)]",
            "value": 183842.0103118206,
            "unit": "iter/sec",
            "range": "stddev: 4.7193130329644293e-7",
            "extra": "mean: 5.439453138615415 usec\nrounds: 40321"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x * cos(z) + y]",
            "value": 72690.46948100785,
            "unit": "iter/sec",
            "range": "stddev: 6.205903972703346e-7",
            "extra": "mean: 13.756961636645837 usec\nrounds: 28986"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_ast[math-x+y]",
            "value": 167539.95157017992,
            "unit": "iter/sec",
            "range": "stddev: 5.04394869196256e-7",
            "extra": "mean: 5.968725612178031 usec\nrounds: 31645"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_ast[math-cos(z)]",
            "value": 159886.72471789725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027852653775477943",
            "extra": "mean: 6.254427950565573 usec\nrounds: 32679"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_ast[math-x * cos(z) + y]",
            "value": 61345.81357954798,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030513103230507137",
            "extra": "mean: 16.30103085523979 usec\nrounds: 23529"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x+y]",
            "value": 313429.9417795084,
            "unit": "iter/sec",
            "range": "stddev: 2.704413586033702e-7",
            "extra": "mean: 3.190505649595787 usec\nrounds: 75758"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-cos(z)]",
            "value": 246278.01448257113,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027992630772640416",
            "extra": "mean: 4.060451770739646 usec\nrounds: 54946"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x * cos(z) + y]",
            "value": 116861.16230609569,
            "unit": "iter/sec",
            "range": "stddev: 0.000001077212803966413",
            "extra": "mean: 8.557162878293896 usec\nrounds: 31545"
          }
        ]
      }
    ]
  }
}