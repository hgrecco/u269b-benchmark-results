window.BENCHMARK_DATA = {
  "lastUpdate": 1670036241477,
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
        "date": 1670035986745,
        "tool": "pytest",
        "benches": [
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x+y]",
            "value": 142866.95626389846,
            "unit": "iter/sec",
            "range": "stddev: 4.1012816123389886e-7",
            "extra": "mean: 6.9995191760986195 usec\nrounds: 21459"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[cos(z)]",
            "value": 112648.7271403726,
            "unit": "iter/sec",
            "range": "stddev: 4.060112519779177e-7",
            "extra": "mean: 8.877153123566952 usec\nrounds: 32895"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x * cos(z) + y]",
            "value": 89881.47388585782,
            "unit": "iter/sec",
            "range": "stddev: 5.540415743584432e-7",
            "extra": "mean: 11.125763260957635 usec\nrounds: 28090"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x+y]",
            "value": 174849.07513551292,
            "unit": "iter/sec",
            "range": "stddev: 4.196167763833672e-7",
            "extra": "mean: 5.719218126975919 usec\nrounds: 35461"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-cos(z)]",
            "value": 218475.8326929138,
            "unit": "iter/sec",
            "range": "stddev: 0.000006468087539243884",
            "extra": "mean: 4.577165298669827 usec\nrounds: 43860"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x * cos(z) + y]",
            "value": 74765.79156151837,
            "unit": "iter/sec",
            "range": "stddev: 5.251381486781607e-7",
            "extra": "mean: 13.375100819700217 usec\nrounds: 25253"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x+y]",
            "value": 368346.17557731265,
            "unit": "iter/sec",
            "range": "stddev: 2.3259011536878908e-7",
            "extra": "mean: 2.7148374716601578 usec\nrounds: 91744"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-cos(z)]",
            "value": 384071.3026859233,
            "unit": "iter/sec",
            "range": "stddev: 1.976363817901235e-7",
            "extra": "mean: 2.6036832041516944 usec\nrounds: 65790"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x * cos(z) + y]",
            "value": 141417.72169437745,
            "unit": "iter/sec",
            "range": "stddev: 3.7545892431237417e-7",
            "extra": "mean: 7.071249543682604 usec\nrounds: 42734"
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
        "date": 1670036240994,
        "tool": "pytest",
        "benches": [
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x+y]",
            "value": 141332.8120116434,
            "unit": "iter/sec",
            "range": "stddev: 0.000002068174926233015",
            "extra": "mean: 7.075497796772184 usec\nrounds: 18383"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[cos(z)]",
            "value": 118348.3981238664,
            "unit": "iter/sec",
            "range": "stddev: 5.842642825048344e-7",
            "extra": "mean: 8.449628519292462 usec\nrounds: 30120"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_python_eval[x * cos(z) + y]",
            "value": 93730.07380271856,
            "unit": "iter/sec",
            "range": "stddev: 8.13570366250043e-7",
            "extra": "mean: 10.66893430709105 usec\nrounds: 27248"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x+y]",
            "value": 189222.58297268755,
            "unit": "iter/sec",
            "range": "stddev: 5.153950411336156e-7",
            "extra": "mean: 5.284781468945175 usec\nrounds: 35972"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-cos(z)]",
            "value": 226577.2699096379,
            "unit": "iter/sec",
            "range": "stddev: 0.000008645567243683161",
            "extra": "mean: 4.413505381183265 usec\nrounds: 45249"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate_as_string[math-x * cos(z) + y]",
            "value": 79404.64855112621,
            "unit": "iter/sec",
            "range": "stddev: 6.593925755177668e-7",
            "extra": "mean: 12.593721126492119 usec\nrounds: 25707"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x+y]",
            "value": 372686.60630022094,
            "unit": "iter/sec",
            "range": "stddev: 3.628833654104979e-7",
            "extra": "mean: 2.6832195820700924 usec\nrounds: 77520"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-cos(z)]",
            "value": 370947.97932152275,
            "unit": "iter/sec",
            "range": "stddev: 3.9522612447040985e-7",
            "extra": "mean: 2.695795787401339 usec\nrounds: 58821"
          },
          {
            "name": "u269b/testsuite/benchmarks/test_basic.py::test_evaluate[math-x * cos(z) + y]",
            "value": 145719.85272171386,
            "unit": "iter/sec",
            "range": "stddev: 4.817538563853113e-7",
            "extra": "mean: 6.862482917202325 usec\nrounds: 45455"
          }
        ]
      }
    ]
  }
}