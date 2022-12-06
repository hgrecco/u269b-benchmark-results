window.BENCHMARK_DATA = {
  "lastUpdate": 1670353385230,
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
        "date": 1670036511622,
        "tool": "pytest",
        "benches": [
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x+y]",
            "value": 157950.67916195124,
            "unit": "iter/sec",
            "range": "stddev: 6.06357080496329e-7",
            "extra": "mean: 6.33109021946447 usec\nrounds: 18588"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[cos(z)]",
            "value": 134711.53219434107,
            "unit": "iter/sec",
            "range": "stddev: 5.605426376936325e-7",
            "extra": "mean: 7.423269438858091 usec\nrounds: 29940"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x * cos(z) + y]",
            "value": 105900.95880529047,
            "unit": "iter/sec",
            "range": "stddev: 8.978346923856315e-7",
            "extra": "mean: 9.442785138882456 usec\nrounds: 18868"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x+y]",
            "value": 137087.60057574307,
            "unit": "iter/sec",
            "range": "stddev: 0.000005582229416407706",
            "extra": "mean: 7.29460575427815 usec\nrounds: 23148"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-cos(z)]",
            "value": 151515.86697642624,
            "unit": "iter/sec",
            "range": "stddev: 0.00006216958568789641",
            "extra": "mean: 6.599968834654037 usec\nrounds: 38023"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x * cos(z) + y]",
            "value": 58956.211781924554,
            "unit": "iter/sec",
            "range": "stddev: 7.756542950408923e-7",
            "extra": "mean: 16.961741091828273 usec\nrounds: 21834"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x+y]",
            "value": 291682.1572475212,
            "unit": "iter/sec",
            "range": "stddev: 2.7368691511854093e-7",
            "extra": "mean: 3.428389344883379 usec\nrounds: 65790"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-cos(z)]",
            "value": 291889.14879505755,
            "unit": "iter/sec",
            "range": "stddev: 0.000007760803406949907",
            "extra": "mean: 3.4259581218694914 usec\nrounds: 49262"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x * cos(z) + y]",
            "value": 118691.71945993391,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011607117504659655",
            "extra": "mean: 8.425187574585305 usec\nrounds: 837"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "maurosilber@gmail.com",
            "name": "Mauro Silberberg",
            "username": "maurosilber"
          },
          "committer": {
            "email": "maurosilber@gmail.com",
            "name": "Mauro Silberberg",
            "username": "maurosilber"
          },
          "distinct": true,
          "id": "2cf4a0ccecfa760102f2772921a3ce5e4191d1c3",
          "message": "Fix flake8 in pre-commit config",
          "timestamp": "2022-12-05T17:27:54-03:00",
          "tree_id": "3ff4025ec2f2c0ad6cae7b081fce6209136562ee",
          "url": "https://github.com/hgrecco/u269b/commit/2cf4a0ccecfa760102f2772921a3ce5e4191d1c3"
        },
        "date": 1670272115352,
        "tool": "pytest",
        "benches": [
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x+y]",
            "value": 161628.22541301633,
            "unit": "iter/sec",
            "range": "stddev: 5.205842911944235e-7",
            "extra": "mean: 6.1870381701256205 usec\nrounds: 24155"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[cos(z)]",
            "value": 140812.46521509576,
            "unit": "iter/sec",
            "range": "stddev: 8.120817562703953e-7",
            "extra": "mean: 7.101644009090151 usec\nrounds: 31748"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x * cos(z) + y]",
            "value": 109464.35584016619,
            "unit": "iter/sec",
            "range": "stddev: 6.988133660753734e-7",
            "extra": "mean: 9.13539382134715 usec\nrounds: 33114"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x+y]",
            "value": 129249.38923316801,
            "unit": "iter/sec",
            "range": "stddev: 0.000007765838525647146",
            "extra": "mean: 7.736980468015857 usec\nrounds: 30770"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-cos(z)]",
            "value": 149708.44803151995,
            "unit": "iter/sec",
            "range": "stddev: 0.00005213259625983686",
            "extra": "mean: 6.679649766922023 usec\nrounds: 39685"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x * cos(z) + y]",
            "value": 55139.82194143867,
            "unit": "iter/sec",
            "range": "stddev: 0.000011603410282345547",
            "extra": "mean: 18.13571326113551 usec\nrounds: 21054"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x+y]",
            "value": 283835.59905357,
            "unit": "iter/sec",
            "range": "stddev: 3.0520573202596e-7",
            "extra": "mean: 3.523166238958151 usec\nrounds: 70922"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-cos(z)]",
            "value": 280944.7266942684,
            "unit": "iter/sec",
            "range": "stddev: 3.0344773373034396e-7",
            "extra": "mean: 3.5594190066013476 usec\nrounds: 62894"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x * cos(z) + y]",
            "value": 113759.65189227351,
            "unit": "iter/sec",
            "range": "stddev: 6.583555984343918e-7",
            "extra": "mean: 8.790462904606686 usec\nrounds: 957"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "maurosilber@gmail.com",
            "name": "Mauro Silberberg",
            "username": "maurosilber"
          },
          "committer": {
            "email": "maurosilber@gmail.com",
            "name": "Mauro Silberberg",
            "username": "maurosilber"
          },
          "distinct": true,
          "id": "d4bb103c994ef21a58eb2257cc43ef4c0a1787f7",
          "message": "Add NumPyMapper in a separate module",
          "timestamp": "2022-12-06T16:02:25-03:00",
          "tree_id": "e9a88c7d8c3b96870a36df57c2c3a7b12c4d9d52",
          "url": "https://github.com/hgrecco/u269b/commit/d4bb103c994ef21a58eb2257cc43ef4c0a1787f7"
        },
        "date": 1670353384830,
        "tool": "pytest",
        "benches": [
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x+y]",
            "value": 163688.6252206459,
            "unit": "iter/sec",
            "range": "stddev: 5.423158310086067e-7",
            "extra": "mean: 6.109159989901796 usec\nrounds: 24039"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[cos(z)]",
            "value": 140883.61382344458,
            "unit": "iter/sec",
            "range": "stddev: 6.306270494086556e-7",
            "extra": "mean: 7.098057558725037 usec\nrounds: 29674"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x * cos(z) + y]",
            "value": 111004.69826177393,
            "unit": "iter/sec",
            "range": "stddev: 8.73396833779157e-7",
            "extra": "mean: 9.008627703683102 usec\nrounds: 28249"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x+y]",
            "value": 128525.34943611843,
            "unit": "iter/sec",
            "range": "stddev: 0.000006956643313981557",
            "extra": "mean: 7.780566280405522 usec\nrounds: 29941"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-cos(z)]",
            "value": 152564.39937958444,
            "unit": "iter/sec",
            "range": "stddev: 0.000043907658574931655",
            "extra": "mean: 6.554609096660698 usec\nrounds: 46083"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x * cos(z) + y]",
            "value": 55350.49104032345,
            "unit": "iter/sec",
            "range": "stddev: 0.000003391605435556956",
            "extra": "mean: 18.066687055612363 usec\nrounds: 20534"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x+y]",
            "value": 289833.0529380286,
            "unit": "iter/sec",
            "range": "stddev: 2.350089768104406e-7",
            "extra": "mean: 3.450262107316717 usec\nrounds: 72993"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-cos(z)]",
            "value": 291900.7053014902,
            "unit": "iter/sec",
            "range": "stddev: 2.7446611254688526e-7",
            "extra": "mean: 3.4258224863387983 usec\nrounds: 57804"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x * cos(z) + y]",
            "value": 113397.48957855119,
            "unit": "iter/sec",
            "range": "stddev: 7.095408260629799e-7",
            "extra": "mean: 8.818537374297808 usec\nrounds: 990"
          }
        ]
      }
    ]
  }
}