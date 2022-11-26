window.BENCHMARK_DATA = {
  "lastUpdate": 1669425223924,
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
        "date": 1669425223445,
        "tool": "pytest",
        "benches": [
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x+y]",
            "value": 101789.70555465188,
            "unit": "iter/sec",
            "range": "stddev: 0.000013595064629527944",
            "extra": "mean: 9.824176173327176 usec\nrounds: 7118"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[cos(z)]",
            "value": 83495.43948505126,
            "unit": "iter/sec",
            "range": "stddev: 0.00001345877769639562",
            "extra": "mean: 11.976702035073863 usec\nrounds: 30121"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x * cos(z) + y]",
            "value": 63465.22468735308,
            "unit": "iter/sec",
            "range": "stddev: 0.000024860220899800695",
            "extra": "mean: 15.756660516468214 usec\nrounds: 25907"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x+y]",
            "value": 229263.71064589728,
            "unit": "iter/sec",
            "range": "stddev: 0.000012905559809981348",
            "extra": "mean: 4.361789300115278 usec\nrounds: 38168"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-cos(z)]",
            "value": 204964.5949404263,
            "unit": "iter/sec",
            "range": "stddev: 0.000011076597428734707",
            "extra": "mean: 4.878891402149984 usec\nrounds: 43104"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x * cos(z) + y]",
            "value": 83426.47141078119,
            "unit": "iter/sec",
            "range": "stddev: 0.000018932017973160586",
            "extra": "mean: 11.986603089996807 usec\nrounds: 17606"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_ast[math-x+y]",
            "value": 195557.6295898385,
            "unit": "iter/sec",
            "range": "stddev: 0.00001276670391851761",
            "extra": "mean: 5.11358212971488 usec\nrounds: 32680"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_ast[math-cos(z)]",
            "value": 173525.55865121007,
            "unit": "iter/sec",
            "range": "stddev: 0.00002065624037847042",
            "extra": "mean: 5.762839824708592 usec\nrounds: 44445"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_ast[math-x * cos(z) + y]",
            "value": 69859.56810995186,
            "unit": "iter/sec",
            "range": "stddev: 0.000024944526434765558",
            "extra": "mean: 14.314431466654671 usec\nrounds: 18553"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x+y]",
            "value": 441949.48641489504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031315766612303664",
            "extra": "mean: 2.2627020298451397 usec\nrounds: 98040"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-cos(z)]",
            "value": 304061.05265174544,
            "unit": "iter/sec",
            "range": "stddev: 0.00003361968147834505",
            "extra": "mean: 3.28881318826895 usec\nrounds: 57143"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x * cos(z) + y]",
            "value": 145133.13839311013,
            "unit": "iter/sec",
            "range": "stddev: 0.000014094864487959592",
            "extra": "mean: 6.890225148245486 usec\nrounds: 26809"
          }
        ]
      }
    ]
  }
}